import multer from 'multer';

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

const uploadConfig = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

// Single file upload
export const uploadSingle = uploadConfig.single('icon');

// Multiple files upload (icon + servicePageImage)
export const uploadMultiple = uploadConfig.fields([
  { name: 'icon', maxCount: 1 },
  { name: 'servicePageImage', maxCount: 1 }
]);