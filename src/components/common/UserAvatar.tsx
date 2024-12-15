import React from 'react';
import { User } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface UserAvatarProps {
  size?: 'sm' | 'md' | 'lg';
}

const UserAvatar: React.FC<UserAvatarProps> = ({ size = 'md' }) => {
  const { user } = useAuth();
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full flex items-center justify-center bg-purple-100 text-purple-600 font-semibold`}>
      {user?.name ? (
        <span>{getInitials(user.name)}</span>
      ) : (
        <User className="h-5 w-5" />
      )}
    </div>
  );
};

export default UserAvatar;