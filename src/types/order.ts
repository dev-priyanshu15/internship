export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  image: string;
}

export interface Order {
  id: string;
  userId: string;
  customerName: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    pincode: string;
  };
  paymentStatus: 'pending' | 'completed' | 'failed';
  createdAt: string;
  updatedAt: string;
}