import dbConnect from './mongodb';

export const connectDB = async () => {
  await dbConnect();
};
