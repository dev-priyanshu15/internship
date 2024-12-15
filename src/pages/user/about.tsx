import React from 'react';
import { Users, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and satisfaction above all else.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Assurance',
      description: 'Every product undergoes strict quality checks before reaching you.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Timely Delivery',
      description: 'We ensure quick and reliable delivery across India.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure Shopping',
      description: 'Your data security and privacy is our top priority.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About SaiFashionZone</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Your trusted destination for premium fashion wear. We bring you the latest trends
          with uncompromising quality and style.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, SaiFashionZone started with a simple mission: to make
            quality fashion accessible to everyone. What began as a small boutique
            has grown into a trusted name in Indian fashion retail.
          </p>
          <p className="text-gray-600">
            We work directly with manufacturers and artisans to bring you the best
            products at competitive prices, while ensuring fair practices and
            sustainable production methods.
          </p>
        </div>
        <div className="relative h-96">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Store Interior"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;