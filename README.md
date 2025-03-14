# Express Backend Application

This is the backend service for our application built with Express.js and Node.js.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (if using MongoDB as database)

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**
   - Copy `.env.example` to create `.env`
   ```bash
   cp .env.example .env
   ```
   - Update the `.env` file with your configuration values

4. **Database Setup**
   - Ensure your database server is running
   - Update database configuration in `.env` file

5. **Start the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **For Production**
   ```bash
   npm run build
   npm start
   # or
   yarn build
   yarn start
   ```

## API Documentation

The API will be available at `http://localhost:5000` (or the port specified in your `.env` file)

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm test`: Run tests
- `npm run lint`: Run linter

## Project Structure

```
backend/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   └── utils/          # Utility functions
├── tests/              # Test files
└── package.json
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 