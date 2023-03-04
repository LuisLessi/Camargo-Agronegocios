# Use the official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Vue.js application
RUN npm run build

# Expose the port that the application will run on
EXPOSE 80

# Run the application when the container starts
CMD [ "node", "server.js" ]
