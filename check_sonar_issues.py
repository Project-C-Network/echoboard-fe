import requests
import sys
import os

# Fetch SonarCloud details from environment variables
SONAR_URL = "https://sonarcloud.io"
PROJECT_KEY = os.getenv("PROJECT_KEY")  # Project key from GitHub Secrets
BRANCH_NAME = os.getenv("BRANCH_NAME", "main")  # Default to 'main' branch
SONAR_TOKEN = os.getenv("SONAR_TOKEN")  # Sonar token from GitHub Secrets

# Check if required environment variables are set
if not SONAR_TOKEN:
    print("❌ ERROR: SONAR_TOKEN is not set. Check GitHub Secrets.")
    sys.exit(1)

if not PROJECT_KEY:
    print("❌ ERROR: PROJECT_KEY is not set. Check GitHub Secrets.")
    sys.exit(1)

# API Endpoint using the correct query parameters
API_URL = f"{SONAR_URL}/api/issues/search?projects={PROJECT_KEY}&branch={BRANCH_NAME}"

# Define issue severities and threshold
SEVERITIES = ["INFO", "MINOR", "MAJOR", "CRITICAL", "BLOCKER"]
THRESHOLD = 5  # Set issue limit for failing the workflow

def get_issues():
    """Fetch all unresolved issues from SonarCloud API."""
    headers = {"Authorization": f"Bearer {SONAR_TOKEN}"}
    
    params = {
        "severities": ",".join(SEVERITIES),
        "resolved": "false",
        "ps": 100  # Max issues per request
    }

    response = requests.get(API_URL, params=params, headers=headers)
    
    if response.status_code != 200:
        print(f"❌ Error fetching issues: {response.text}")
        sys.exit(1)

    data = response.json()
    total_issues = len(data.get("issues", []))

    print(f"🔎 Found {total_issues} total issues (bugs, vulnerabilities, code smells).")

    return total_issues

if __name__ == "__main__":
    issue_count = get_issues()

    if issue_count >= THRESHOLD:
        print("❌ Quality Gate Failed: Too many issues.")
        sys.exit(1)  # Fail GitHub Actions workflow
    else:
        print("✅ Quality Gate Passed: Issues within limit.")
