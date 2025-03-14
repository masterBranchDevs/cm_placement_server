const dotenv = require('dotenv');

// Load env vars
dotenv.config();

const validateEnv = (envVar, defaultValue = undefined) => {
  if (!process.env[envVar] && defaultValue === undefined) {
    throw new Error(`Environment variable ${envVar} is required`);
  }
  return process.env[envVar] || defaultValue;
};

const MONGO_USER = validateEnv('MONGO_USER', 'user');
const MONGO_PASSWORD = validateEnv('MONGO_PASSWORD', 'password');
const MONGO_DB = validateEnv('MONGO_DB', 'db_name');
const MONGO_HOST = validateEnv('MONGO_HOST', 'host');

const config = {
  // Server Configuration
  nodeEnv: validateEnv('NODE_ENV', 'development'),
  port: validateEnv('PORT', '5000'),
  
  // MongoDB Configuration
  mongoUri: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority&appName=${MONGO_DB}`,

  // Security Configuration
  jwtSecret: validateEnv('JWT_SECRET'),
  jwtExpire: validateEnv('JWT_EXPIRE', '7d'),
  cookieExpire: validateEnv('COOKIE_EXPIRE', '7'),
  
  // CORS Configuration
  corsOrigin: validateEnv('CORS_ORIGIN', 'http://localhost:3000'),
  
  // Email Configuration
  smtp: {
    host: validateEnv('SMTP_HOST', 'smtp.gmail.com'),
    port: validateEnv('SMTP_PORT', '587'),
    user: validateEnv('SMTP_USER', ''),
    pass: validateEnv('SMTP_PASS', ''),
    fromEmail: validateEnv('SMTP_FROM_EMAIL', 'noreply@yourapp.com'),
    fromName: validateEnv('SMTP_FROM_NAME', 'Your App Name'),
  },

  // API Configuration
  api: {
    prefix: '/api',
    rateLimitWindowMs: 10 * 60 * 1000, // 10 minutes
    rateLimitMax: 100, // limit each IP to 100 requests per windowMs
  },
};

module.exports = config;