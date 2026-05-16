import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (fileStr: string, folder: string = 'shikhobd/general') => {
  try {
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      folder: folder,
      resource_type: 'auto',
    });
    return uploadResponse.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('ফাইল আপলোড ব্যর্থ হয়েছে।');
  }
};

export const uploadPDF = async (fileStr: string, folder: string = 'shikhobd/docs') => {
  try {
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      folder: folder,
      resource_type: 'raw',
    });
    return uploadResponse.secure_url;
  } catch (error) {
    console.error('Cloudinary PDF upload error:', error);
    throw new Error('ডকুমেন্ট আপলোড ব্যর্থ হয়েছে।');
  }
};

export const deleteFile = async (publicId: string) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Cloudinary delete error:', error);
  }
};

export default cloudinary;
