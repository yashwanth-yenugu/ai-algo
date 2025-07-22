# Use the official Node.js image as the base image
FROM node:22

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json to the working directory
COPY package.json ./

# Copy pnpm yaml files to the working directory
COPY pnpm*.yaml ./

# Enable pnpm
RUN corepack enable pnpm

# Install pm2
RUN npm install pm2 -g

# Install the application dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the NestJS application
RUN pnpm run build

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["pm2-runtime", "dist/main"]
