import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { notFound, errorHandler } from './src/middleware/errorMiddleware.js';

// Route imports
import authRoutes from './src/routes/authRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import portfolioRoutes from './src/routes/portfolioRoutes.js';
import dashboardRoutes from './src/routes/dashboardRoutes.js';
import transactionRoutes from './src/routes/transactionRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/stocks', portfolioRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/transactions', transactionRoutes);

// Base route
app.get('/', (req, res) => {
  res.json({ message: 'Stock Portfolio Management API is running...' });
});

// Error Handling
app.use(notFound);
app.use(errorHandler);

export default app;
