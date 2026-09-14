# Build stage
FROM node:lts-alpine AS build-stage

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies needed for build (npm ci = clean, lockfile-exact install)
RUN npm ci

# Copy project files
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build the app for production
RUN npm run build

# Production stage
FROM node:lts-alpine AS production-stage

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy only necessary files for standalone mode
COPY --from=build-stage /app/.next/standalone ./
COPY --from=build-stage /app/.next/static ./.next/static
COPY --from=build-stage /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
