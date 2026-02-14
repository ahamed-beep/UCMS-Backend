import cloudinary from "../Cloudinary/cloudinary.js";
import { deleteFromCloudinary, uploadToCloudinary } from "../Config/ServiceConfig.js";
import Service from "../Model/homeservices.js";
import { convertToWebP } from "../Sharp/sharp.js";




export const createService = async (serviceData, iconFile, serviceImageFile) => {
  try {
    const { title, subtitle, description, bulletPoints, iconColor } = serviceData;
    
    const lastService = await Service.findOne().sort({ serviceNumber: -1 });
    const serviceNumber = lastService ? lastService.serviceNumber + 1 : 1;

    let iconUrl = 'book';
    let servicePageImageUrl = '';

    if (iconFile) {
      const webpBuffer = await convertToWebP(iconFile.buffer);
      const result = await uploadToCloudinary(webpBuffer, true);
      iconUrl = result.secure_url;
    }

    if (serviceImageFile) {
      const webpBuffer = await convertToWebP(serviceImageFile.buffer);
      const result = await uploadToCloudinary(webpBuffer, true);
      servicePageImageUrl = result.secure_url;
    }

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
      iconColor: iconColor || '#000000',
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

    if (iconFile) {
      await deleteFromCloudinary(existingService.icon);
      const webpBuffer = await convertToWebP(iconFile.buffer);
      const result = await uploadToCloudinary(webpBuffer, true);
      updateData.icon = result.secure_url;
    }

    if (serviceImageFile) {
      await deleteFromCloudinary(existingService.servicePageImage);
      const webpBuffer = await convertToWebP(serviceImageFile.buffer);
      const result = await uploadToCloudinary(webpBuffer, true);
      updateData.servicePageImage = result.secure_url;
    }

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