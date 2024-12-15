import React from 'react';
import ProfileDetails from '../../components/user/profile/ProfileDetails';
import OrderHistory from '../../components/user/profile/OrderHistory';

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ProfileDetails />
      <OrderHistory />
    </div>
  );
};

export default Profile;