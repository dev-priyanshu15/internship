import Order from '../models/Order.js';
import User from '../models/User.js';
import { sendOrderConfirmationEmail } from '../utils/emailService.js';

export const createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      ...req.body,
      user: req.user._id
    });

    // Update user's order history
    await User.findByIdAndUpdate(req.user._id, {
      $push: { orders: order._id }
    });

    // Send confirmation email
    await sendOrderConfirmationEmail(req.user.email, order);

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find(
      req.user.role === 'admin' ? {} : { user: req.user._id }
    )
      .populate('user', 'name email')
      .populate('items.product', 'name price image');
    res.json(orders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    order.updatedAt = Date.now();
    await order.save();

    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};