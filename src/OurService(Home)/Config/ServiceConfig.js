 
 import { v2 as cloudinary } from 'cloudinary';
 
 export  const uploadToCloudinary = (buffer, isWebP = false) => {
  return new Promise((resolve, reject) => {
    const uploadOptions = {
      folder: 'ucms/services',
      resource_type: 'auto'
    };

    if (isWebP) {
      uploadOptions.format = 'webp';
    }

    const uploadStream = cloudinary.uploader.upload_stream(
      uploadOptions,
      (error, result) => error ? reject(error) : resolve(result)
    );
    uploadStream.end(buffer);
  });
};

 export  const deleteFromCloudinary = async (imageUrl) => {
  if (!imageUrl || imageUrl === 'book') return;
  
  try {
    const parts = imageUrl.split('/upload/')[1].split('/');
    const publicId = parts.slice(1).join('/').split('.')[0];
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Cloudinary delete error:', error);
  }
};