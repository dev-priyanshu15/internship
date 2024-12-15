import React from 'react';
import { CheckCircle, Circle, Truck, Package, MapPin } from 'lucide-react';

interface OrderTrackingProps {
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  estimatedDelivery?: string;
}

const OrderTracking: React.FC<OrderTrackingProps> = ({ status, estimatedDelivery }) => {
  const steps = [
    { id: 'pending', label: 'Order Placed', icon: Package },
    { id: 'processing', label: 'Processing', icon: Circle },
    { id: 'shipped', label: 'Shipped', icon: Truck },
    { id: 'delivered', label: 'Delivered', icon: MapPin }
  ];

  const currentStepIndex = steps.findIndex(step => step.id === status);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Status</h2>

      {status !== 'cancelled' ? (
        <>
          <div className="relative">
            <div className="absolute left-0 top-5 w-full h-0.5 bg-gray-200" />
            <div
              className="absolute left-0 top-5 h-0.5 bg-purple-600 transition-all duration-500"
              style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
            />

            <div className="relative flex justify-between">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isCompleted = index <= currentStepIndex;
                const isCurrent = index === currentStepIndex;

                return (
                  <div key={step.id} className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isCompleted
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-200 text-gray-400'
                      } ${isCurrent ? 'ring-2 ring-purple-600 ring-offset-2' : ''}`}
                    >
                      <StepIcon className="h-5 w-5" />
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-600">{step.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {estimatedDelivery && (
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">Estimated Delivery</p>
              <p className="text-lg font-medium text-gray-900">{estimatedDelivery}</p>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Order Cancelled</h3>
          <p className="text-gray-600">This order has been cancelled.</p>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;