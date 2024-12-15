export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  totalSpent: number;
  lastOrderDate: string;
  createdAt: string;
  status: 'active' | 'inactive';
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
  };
}