# E-Commerce Platform

A modern e-commerce platform built with React, TypeScript, and Node.js, featuring both customer-facing and admin interfaces.

## Features

### Customer Features
- User authentication (login/signup)
- Product browsing and search
- Shopping cart functionality
- Order tracking
- Profile management
- Occasion-based shopping
- Category filtering
- Product quick view

### Admin Features
- Dashboard with analytics
- Customer management
- Order management 
- Product management
- Inventory tracking
- Sales statistics

## Tech Stack

### Frontend
- React with TypeScript
- TailwindCSS for styling
- Vite as build tool
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB
- JWT authentication
- File upload functionality

## Project Structure

The project is organized into two main directories:
- `src/` - Frontend React application
- `server/` - Backend Node.js server

### Key Directories
- `src/components/` - Reusable UI components
- `src/pages/` - Page components and routes
- `src/services/` - API and authentication services
- `src/hooks/` - Custom React hooks
- `src/context/` - React Context providers
- `src/types/` - TypeScript type definitions
- `server/controllers/` - API route handlers
- `server/models/` - Database models
- `server/routes/` - API route definitions
- `server/middleware/` - Custom middleware

## Setup and Installation

1. Clone the repository
2. Install dependencies:
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
```

3. Configure environment variables
4. Start the development servers:
```bash
# Start frontend
npm run dev

# Start backend
cd server
npm run server
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
