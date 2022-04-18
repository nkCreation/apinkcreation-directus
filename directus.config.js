module.exports = {
  DB_CONNECTION_STRING:
    (process.env.DB_CONNECTION_STRING || process.env.DATABASE_URL) +
    "?ssl=true&sslmode=no-verify",
  RATE_LIMITER_REDIS: process.env.RATE_LIMITER_REDIS || process.env.REDIS_URL,
  CACHE_REDIS: process.env.CACHE_REDIS || process.env.REDIS_URL,
  EMAIL_FROM: process.env.EMAIL_FROM || process.env.MAILGUN_SMTP_LOGIN,
  EMAIL_SMTP_HOST:
    process.env.EMAIL_SMTP_HOST || process.env.MAILGUN_SMTP_SERVER,
  EMAIL_SMTP_PORT: process.env.EMAIL_SMTP_PORT || process.env.MAILGUN_SMTP_PORT,
  EMAIL_SMTP_USER:
    process.env.EMAIL_SMTP_USER || process.env.MAILGUN_SMTP_LOGIN,
  EMAIL_SMTP_PASSWORD:
    process.env.EMAIL_SMTP_PASSWORD || process.env.MAILGUN_SMTP_PASSWORD,
  ACCESS_TOKEN_TTL: process.env.ACCESS_TOKEN_TTL,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  CORS_ENABLED: process.env.CORS_ENABLED,
  CORS_METHODS: process.env.CORS_METHODS,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  CACHE_ENABLED: process.env.CACHE_ENABLED,
  CACHE_NAMESPACE: process.env.CACHE_NAMESPACE,
  CACHE_AUTO_PURGE: process.env.CACHE_AUTO_PURGE,
  CACHE_STORE: process.env.CACHE_STORE,
  CONFIG_PATH: process.env.CONFIG_PATH,
  DB_CLIENT: process.env.DB_CLIENT,
  EMAIL_SMTP_POOL: process.env.EMAIL_SMTP_POOL,
  EMAIL_SMTP_SECURE: process.env.EMAIL_SMTP_SECURE,
  EMAIL_TRANSPORT: process.env.EMAIL_TRANSPORT,
  EXTENSIONS_PATH: process.env.EXTENSIONS_PATH,
  MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
  MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
  MAILGUN_PUBLIC_KEY: process.env.MAILGUN_PUBLIC_KEY,
  MAILGUN_SMTP_LOGIN: process.env.MAILGUN_SMTP_LOGIN,
  MAILGUN_SMTP_PASSWORD: process.env.MAILGUN_SMTP_PASSWORD,
  MAILGUN_SMTP_PORT: process.env.MAILGUN_SMTP_PORT,
  MAILGUN_SMTP_SERVER: process.env.MAILGUN_SMTP_SERVER,
  NODE_ENV: process.env.NODE_ENV,
  PGSSLMODE: process.env.PGSSLMODE,
  PUBLIC_URL: process.env.PUBLIC_URL,
  RATE_LIMITER_DURATION: process.env.RATE_LIMITER_DURATION,
  RATE_LIMITER_ENABLED: process.env.RATE_LIMITER_ENABLED,
  RATE_LIMITER_KEY_PREFIX: process.env.RATE_LIMITER_KEY_PREFIX,
  RATE_LIMITER_POINTS: process.env.RATE_LIMITER_POINTS,
  RATE_LIMITER_STORE: process.env.RATE_LIMITER_STORE,
  REDIS_TLS_URL: process.env.REDIS_TLS_URL,
  REDIS_URL: process.env.REDIS_URL,
  REFRESH_TOKEN_COOKIE_NAME: process.env.REFRESH_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_SAME_SITE: process.env.REFRESH_TOKEN_COOKIE_SAME_SITE,
  REFRESH_TOKEN_TTL: process.env.REFRESH_TOKEN_TTL,
  STORAGE_LOCATIONS: process.env.STORAGE_LOCATIONS,
  STORAGE_S3_BUCKET: process.env.STORAGE_S3_BUCKET,
  STORAGE_S3_DRIVER: process.env.STORAGE_S3_DRIVER,
  STORAGE_S3_ENDPOINT: process.env.STORAGE_S3_ENDPOINT,
  STORAGE_S3_REGION: process.env.STORAGE_S3_REGION,
  TZ: process.env.TZ,
};
