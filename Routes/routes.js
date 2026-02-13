import express from 'express';
import { login, register } from '../src/Admin/Controller/AdminController.js';
import authMiddleware from '../src/Admin/Middleware/AuthMiddleware.js';
import { createServiceController } from '../src/OurService(Home)/Controller/Homeservicecontroller.js';
import { upload } from '../src/OurService(Home)/Multer/multer.js';

const router =express.Router();

router.post('/register', authMiddleware, register);
router.post('/create', upload.single('icon'), authMiddleware , createServiceController);
router.post('/login', login);

export default router;