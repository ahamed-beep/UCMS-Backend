import { createService } from "../Service/HomeserviceService.js";

export const createServiceController = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: 'Title and description are required'
      });
    }

    const imageFile = req.file; // Multer stores file here

    const result = await createService(
      { title, subtitle, description },
      imageFile
    );

    return res.status(result.success ? 201 : 400).json(result);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};