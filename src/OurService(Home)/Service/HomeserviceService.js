import cloudinary from "../Cloudinary/cloudinary.js";
import Service from "../Model/homeservices.js";

export const createService = async (serviceData, imageFile) => {
  try {
    const { title, subtitle, description } = serviceData;
    
    let iconUrl = 'book';

    if (imageFile) {
      // Upload buffer to Cloudinary
      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: 'ucms/services',
            resource_type: 'auto'
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadStream.end(imageFile.buffer); // Using buffer from memory
      });
      
      iconUrl = result.secure_url;
    }

    const service = await Service.create({
      title,
      subtitle,
      description,
      icon: iconUrl
    });

    return {
      success: true,
      message: 'Service created successfully',
      data: service
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || 'Failed to create service'
    };
  }
};