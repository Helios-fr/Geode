# Use a base image with Node.js installed
FROM node:22-alpine3.19 AS build-frontend

# Set the working directory for the frontend
WORKDIR /app/

# Copy the frontend files to the container
COPY / ./
# Install dependencies and build the frontend
RUN npm i
RUN npx vite build

FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the built frontend files from the build-frontend stage
COPY --from=build-frontend /app/.svelte-kit ./.svelte-kit
COPY --from=build-frontend /app/node_modules ./node_modules

# Copy the frontend configuration files
COPY --from=build-frontend /app/package.json ./package.json
COPY --from=build-frontend /app/package-lock.json ./package-lock.json
COPY --from=build-frontend /app/postcss.config.cjs ./postcss.config.cjs
COPY --from=build-frontend /app/svelte.config.js ./svelte.config.js
COPY --from=build-frontend /app/DF.vite.config.js ./vite.config.js
COPY --from=build-frontend /app/tailwind.config.cjs ./tailwind.config.cjs
COPY --from=build-frontend /app/ecosystem.config.cjs ./ecosystem.config.cjs

# install pm2
RUN npm install pm2 -g

# Expose ports
EXPOSE 8080

# Start the frontend server with pm2
CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]