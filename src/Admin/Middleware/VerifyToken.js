export const verifyToken = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: 'Token is valid',
      data: {
        user: {
          id: req.user._id,
          name: req.user.name,
          email: req.user.email
        }
      }
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Token verification failed'
    });
  }
};