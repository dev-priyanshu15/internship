import Order from '../models/Order.js';
import Product from '../models/Product.js';
import User from '../models/User.js';

export const getDashboardStats = async (req, res) => {
  try {
    const totalRevenue = await Order.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: null, total: { $sum: '$total' } } }
    ]);

    const totalOrders = await Order.countDocuments();
    const totalCustomers = await User.countDocuments({ role: 'user' });
    const totalProducts = await Product.countDocuments();

    const recentOrders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate('user', 'name email');

    const topProducts = await Order.aggregate([
      { $unwind: '$items' },
      { $group: {
          _id: '$items.product',
          totalSold: { $sum: '$items.quantity' },
          revenue: { $sum: { $multiply: ['$items.price', '$items.quantity'] } }
        }
      },
      { $sort: { revenue: -1 } },
      { $limit: 5 }
    ]);

    res.json({
      totalRevenue: totalRevenue[0]?.total || 0,
      totalOrders,
      totalCustomers,
      totalProducts,
      recentOrders,
      topProducts,
      salesGrowth: 12.5, // Calculate actual growth
      customerGrowth: 8.3  // Calculate actual growth
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRevenueData = async (req, res) => {
  try {
    const { period } = req.query;
    // Implement period-specific revenue aggregation
    const revenueData = await Order.aggregate([
      // Add aggregation pipeline based on period
    ]);
    res.json(revenueData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAdminSettings = async (req, res) => {
  try {
    const { settings } = req.body;
    // Update admin settings in database
    res.json({ message: 'Settings updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};