import dotenv from 'dotenv';

dotenv.config();

export const config = {
  mongoUri: process.env.MONGODB_URI || 'mongodb+srv://saifashion:saifashion@saifashion.zaenm.mongodb.net/?retryWrites=true&w=majority&appName=saifashion',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret_key_here',
  port: process.env.PORT || 5000
};