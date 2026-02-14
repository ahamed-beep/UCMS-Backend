import cloudinary from "../Cloudinary/cloudinary.js";
import Service from "../Model/homeservices.js";

const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: 'ucms/services', resource_type: 'auto' },
      (error, result) => error ? reject(error) : resolve(result)
    );
    uploadStream.end(buffer);
  });
};

const deleteFromCloudinary = async (imageUrl) => {
  if (!imageUrl || imageUrl === 'book') return;
  
  try {
    const parts = imageUrl.split('/upload/')[1].split('/');
    const publicId = parts.slice(1).join('/').split('.')[0];
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Cloudinary delete error:', error);
  }
};

export const createService = async (serviceData, iconFile, serviceImageFile) => {
  try {
    const { title, subtitle, description, bulletPoints } = serviceData;
    
    // Auto-generate service number
    const lastService = await Service.findOne().sort({ serviceNumber: -1 });
    const serviceNumber = lastService ? lastService.serviceNumber + 1 : 1;

    let iconUrl = 'book';
    let servicePageImageUrl = '';

    // Upload icon (home page)
    if (iconFile) {
      const result = await uploadToCloudinary(iconFile.buffer);
      iconUrl = result.secure_url;
    }

    // Upload service page image
    if (serviceImageFile) {
      const result = await uploadToCloudinary(serviceImageFile.buffer);
      servicePageImageUrl = result.secure_url;
    }

    // Parse bulletPoints
    let parsedBulletPoints = [];
    if (bulletPoints) {
      parsedBulletPoints = typeof bulletPoints === 'string' 
        ? JSON.parse(bulletPoints) 
        : bulletPoints;
    }

    const service = await Service.create({
      serviceNumber,
      title,
      subtitle: subtitle || '',
      description,
      icon: iconUrl,
      servicePageImage: servicePageImageUrl,
      bulletPoints: parsedBulletPoints
    });

    return {
      success: true,
      message: 'Service created successfully',
      data: service
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

export const getAllServicesService = async () => {
  try {
    const services = await Service.find().sort({ serviceNumber: 1 });

    return {
      success: true,
      count: services.length,
      data: services
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

export const getServiceByIdService = async (serviceId) => {
  try {
    const service = await Service.findById(serviceId);

    if (!service) {
      return {
        success: false,
        message: 'Service not found'
      };
    }

    return {
      success: true,
      data: service
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

export const updateServiceService = async (serviceId, updateData, iconFile, serviceImageFile) => {
  try {
    const existingService = await Service.findById(serviceId);

    if (!existingService) {
      return {
        success: false,
        message: 'Service not found'
      };
    }

    // Update icon
    if (iconFile) {
      await deleteFromCloudinary(existingService.icon);
      const result = await uploadToCloudinary(iconFile.buffer);
      updateData.icon = result.secure_url;
    }

    // Update service page image
    if (serviceImageFile) {
      await deleteFromCloudinary(existingService.servicePageImage);
      const result = await uploadToCloudinary(serviceImageFile.buffer);
      updateData.servicePageImage = result.secure_url;
    }

    // Parse bulletPoints if provided
    if (updateData.bulletPoints) {
      updateData.bulletPoints = typeof updateData.bulletPoints === 'string' 
        ? JSON.parse(updateData.bulletPoints) 
        : updateData.bulletPoints;
    }

    const updatedService = await Service.findByIdAndUpdate(
      serviceId,
      updateData,
      { new: true, runValidators: true }
    );

    return {
      success: true,
      message: 'Service updated successfully',
      data: updatedService
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

export const deleteServiceService = async (serviceId) => {
  try {
    const service = await Service.findById(serviceId);

    if (!service) {
      return {
        success: false,
        message: 'Service not found'
      };
    }

    // Delete both images
    await deleteFromCloudinary(service.icon);
    await deleteFromCloudinary(service.servicePageImage);

    await Service.findByIdAndDelete(serviceId);

    return {
      success: true,
      message: 'Service deleted successfully'
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};