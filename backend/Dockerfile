FROM golang:1.23-alpine3.20 AS build-backend

# Set the working directory for the backend
WORKDIR /app/backend

# Copy the backend files to the container
COPY go.mod ./
COPY go.sum ./
COPY ecosystem.config.js ./
COPY *.go ./
COPY utils ./utils

# Download Go dependencies and build the backend
RUN go mod download
RUN go build -o backend backend.go

FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the built backend files from the build-backend stage
COPY --from=build-backend /app/backend/backend ./
COPY ecosystem.config.js ./

# install pm2
RUN npm install pm2 -g

# Expose ports
EXPOSE 9001

# Start the backend backend with pm2
CMD ["pm2-runtime", "start", "ecosystem.config.js"]

