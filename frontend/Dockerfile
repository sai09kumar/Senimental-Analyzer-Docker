# frontend/Dockerfile

# Step 1: Build React app
FROM node:18 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Serve app with Nginx
FROM nginx:alpine

# Copy built files to Nginx public dir
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional)
EXPOSE 80
