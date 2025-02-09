# Use an official Node.js image as the base
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally (instead of using corepack)
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml before installing dependencies
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build the Next.js project
RUN pnpm build

# Use a minimal image for production
FROM node:18-alpine AS runner

WORKDIR /app

# Install pnpm in the runner stage
RUN npm install -g pnpm

# Copy built files from the builder stage
COPY --from=builder /app ./

# Expose the port the app runs on
EXPOSE 3000

# Run the Next.js app
CMD ["pnpm", "start"]
