import { 
  createService, 
  deleteServiceService, 
  getAllServicesService, 
  getServiceByIdService, 
  updateServiceService 
} from "../Service/HomeserviceService.js";

export const createServiceController = async (req, res) => {
  try {
    const { title, subtitle, description, bulletPoints } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: 'Title and description are required'
      });
    }

    const iconFile = req.files?.icon?.[0];
    const serviceImageFile = req.files?.servicePageImage?.[0];

    const result = await createService(
      { title, subtitle, description, bulletPoints },
      iconFile,
      serviceImageFile
    );

    return res.status(result.success ? 201 : 400).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getAllServices = async (req, res) => {
  try {
    const result = await getAllServicesService();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getServiceById = async (req, res) => {
  try {
    const result = await getServiceByIdService(req.params.id);
    return res.status(result.success ? 200 : 404).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const updateService = async (req, res) => {
  try {
    const { title, subtitle, description, bulletPoints } = req.body;
    
    let updateData = {};
    if (title) updateData.title = title;
    if (subtitle !== undefined) updateData.subtitle = subtitle;
    if (description) updateData.description = description;
    if (bulletPoints !== undefined) updateData.bulletPoints = bulletPoints;

    const iconFile = req.files?.icon?.[0];
    const serviceImageFile = req.files?.servicePageImage?.[0];

    const result = await updateServiceService(
      req.params.id,
      updateData,
      iconFile,
      serviceImageFile
    );

    return res.status(result.success ? 200 : 404).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const deleteService = async (req, res) => {
  try {
    const result = await deleteServiceService(req.params.id);
    return res.status(result.success ? 200 : 404).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};