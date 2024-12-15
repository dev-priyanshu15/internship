import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/user/navbar/Navbar';
import Footer from './components/user/footer/Footer';
import Homepage from './pages/user/homepage';
import Shop from './pages/user/shop';
import ProductDetails from './pages/user/productdetails';
import Cart from './pages/user/cart';
import Login from './pages/user/login';
import Signup from './pages/user/signup';
import Checkout from './pages/user/checkout';
import Profile from './pages/user/profile';
import About from './pages/user/about';
import Contact from './pages/user/contact';
import Occasions from './pages/user/occasions';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import ProductsPage from './pages/admin/products';
import OrdersPage from './pages/admin/orders';
import CustomersPage from './pages/admin/customers';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Routes>
              {/* Admin Routes */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute requireAdmin>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/products"
                element={
                  <ProtectedRoute requireAdmin>
                    <ProductsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/orders"
                element={
                  <ProtectedRoute requireAdmin>
                    <OrdersPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/customers"
                element={
                  <ProtectedRoute requireAdmin>
                    <CustomersPage />
                  </ProtectedRoute>
                }
              />

              {/* User Routes */}
              <Route
                path="/*"
                element={
                  <>
                    <Navbar />
                    <main className="flex-grow pt-16">
                      <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route
                          path="/checkout"
                          element={
                            <ProtectedRoute>
                              <Checkout />
                            </ProtectedRoute>
                          }
                        />
                        <Route
                          path="/profile"
                          element={
                            <ProtectedRoute>
                              <Profile />
                            </ProtectedRoute>
                          }
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/occasions" element={<Occasions />} />
                      </Routes>
                    </main>
                    <Footer />
                  </>
                }
              />
            </Routes>
            <Toaster position="bottom-right" />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;