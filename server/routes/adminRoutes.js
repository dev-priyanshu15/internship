import express from 'express';
import { protect, admin } from '../middleware/auth.js';
import {
  getDashboardStats,
  getRevenueData,
  updateAdminSettings
} from '../controllers/adminController.js';

const router = express.Router();

// All routes are protected and require admin access
router.use(protect, admin);

router.get('/stats', getDashboardStats);
router.get('/revenue', getRevenueData);
router.put('/settings', updateAdminSettings);

export default router;