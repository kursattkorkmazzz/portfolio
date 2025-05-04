FROM node:lts-slim AS base

FROM base AS dependencies
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install

FROM base AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runnerdd
WORKDIR /app
ENV NODE_ENV=production
COPY ./package.json ./package-lock.json ./
COPY ./public ./public
COPY --from=builder ./app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
RUN ls -la
CMD ["npm","run","start"]
