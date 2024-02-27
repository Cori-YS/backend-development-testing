# Use the official Node.js 20 image as base
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE $NEST_PORT

# Command to run migrations and start the application
CMD ["sh", "-c", "npx prisma migrate dev && npm run start:dev"]
