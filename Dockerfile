# =========================
# 1. Builder Stage
# =========================
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first (cached if package.json unchanged)
COPY package.json package-lock.json* ./
RUN npm install

# Copy source files
COPY . .

# Build Next.js (outputs .next, including standalone server)
RUN npm run build


# =========================
# 2. Runner Stage
# =========================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy only necessary files for runtime
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# Start the Next.js standalone server
CMD ["node", "server.js"]
