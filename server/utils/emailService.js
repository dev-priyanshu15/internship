import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export const sendOrderConfirmationEmail = async (email, order) => {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: email,
    subject: `Order Confirmation #${order._id}`,
    html: `
      <h1>Thank you for your order!</h1>
      <p>Your order #${order._id} has been confirmed.</p>
      <h2>Order Details:</h2>
      <ul>
        ${order.items.map(item => `
          <li>${item.productName} x ${item.quantity} - ₹${item.price}</li>
        `).join('')}
      </ul>
      <p><strong>Total:</strong> ₹${order.total}</p>
      <p>We'll notify you when your order ships.</p>
    `
  };

  await transporter.sendMail(mailOptions);
};