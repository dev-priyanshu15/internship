export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  totalCustomers: number;
  totalProducts: number;
  recentOrders: Order[];
  topProducts: Product[];
  salesGrowth: number;
  customerGrowth: number;
}

export interface AdminSettings {
  notificationsEnabled: boolean;
  emailNotifications: boolean;
  autoStockAlerts: boolean;
  lowStockThreshold: number;
}

export interface SalesReport {
  period: string;
  revenue: number;
  orders: number;
  averageOrderValue: number;
}