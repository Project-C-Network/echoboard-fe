import requests
import sys
import os
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(message)s")

# SonarCloud API details
SONAR_URL = "https://sonarcloud.io"
PROJECT_KEY = os.getenv("PROJECT_KEY")  # From GitHub Secrets
BRANCH_NAME = os.getenv("BRANCH_NAME", "main")  # Default branch
SONAR_TOKEN = os.getenv("SONAR_TOKEN")  # SonarCloud token

# Validate required environment variables
if not SONAR_TOKEN or not PROJECT_KEY:
    logging.error("ERROR: SONAR_TOKEN or PROJECT_KEY is not set. Check GitHub Secrets.")
    sys.exit(1)

# API Endpoint
API_URL = f"{SONAR_URL}/api/issues/search?projects={PROJECT_KEY}&branch={BRANCH_NAME}"

# Issue severities and failure threshold
SEVERITIES = "INFO,MINOR,MAJOR,CRITICAL,BLOCKER"
THRESHOLD = 10  # Max issues allowed before failing

def fetch_all_issues():
    """Fetch all SonarCloud issues with automatic pagination and filter open issues."""
    headers = {"Authorization": f"Bearer {SONAR_TOKEN}"}
    total_issues = 0
    open_issues_count = 0
    page = 1
    max_per_page = 100

    while True:
        try:
            response = requests.get(
                API_URL,
                headers=headers,
                params={
                    "projects": PROJECT_KEY,
                    "branch": BRANCH_NAME,
                    "severities": SEVERITIES,
                    "ps": max_per_page,
                    "p": page
                },
                timeout=10
            )

            if response.status_code != 200:
                logging.error(f"API Error: {response.text}")
                sys.exit(1)

            data = response.json()
            logging.info(f"API Response: {data}")  # Debugging: Print the API response

            # Safely get the 'issues' key or default to an empty list
            issues = data.get("issues", [])
            if not issues:
                logging.warning(f"No issues found on page {page}.")
                break

            issues_found = len(issues)
            total_issues += issues_found

            # Filter open issues using the 'status' key
            open_issues = [issue for issue in issues if issue.get("status") == "OPEN"]
            open_issues_count += len(open_issues)

            logging.info(f"Page {page}: Found {issues_found} issues (Open: {len(open_issues)})")

            if issues_found < max_per_page:
                break

            page += 1
            time.sleep(1)

        except requests.exceptions.RequestException as e:
            logging.error(f"Network Error: {e}")
            sys.exit(1)

    return total_issues, open_issues_count

if __name__ == "__main__":
    total_issues, open_issues_count = fetch_all_issues()
    logging.info(f"Total Issues Found: {total_issues}")
    logging.info(f"Open Issues Found: {open_issues_count}")

    if open_issues_count >= THRESHOLD:
        logging.error("Quality Gate Failed: Too many issues.")
        sys.exit(1)  # Fail GitHub Actions workflow
    else:
        logging.info("✅ Quality Gate Passed: Issues within limit.")