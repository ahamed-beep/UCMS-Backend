import express from 'express';
import { getDashboardStatsController, login, register } from '../src/Admin/Controller/AdminController.js';
import authMiddleware from '../src/Admin/Middleware/AuthMiddleware.js';
import { createServiceController, deleteService, getAllServices, getServiceById, updateService } from '../src/OurService(Home)/Controller/Homeservicecontroller.js';
import {  uploadMultiple } from '../src/OurService(Home)/Multer/multer.js';
import { createSubmissionController, deleteSubmissionController, getAllSubmissionsController, getRecentSubmissionsController, markAsReadController } from '../src/StudentApplications/Controller/StudentSubmissionController.js';
import { createContactMessageController, deleteContactMessageController, getAllContactMessagesController, getRecentContactMessagesController, markContactMessageAsReadController } from '../src/Contact/Controller/ContactController.js';

const router =express.Router();

router.post('/register', authMiddleware, register);
router.post('/createHomeService', uploadMultiple, authMiddleware, createServiceController);
router.put('/updateHomeService/:id', uploadMultiple, authMiddleware, updateService);
router.get('/homeservice',authMiddleware, getAllServices);
router.get('/homeservice/:id', authMiddleware, getServiceById);
router.delete('/deletehomeservice/:id',authMiddleware, deleteService);
router.post('/login', login);

router.post('/student-submission', createSubmissionController); 
router.patch('/student-submission/:id/read', authMiddleware, markAsReadController);
router.get('/student-submission/recent', authMiddleware, getRecentSubmissionsController); 
router.get('/student-submission', authMiddleware, getAllSubmissionsController); 
router.delete('/student-submission/:id', authMiddleware, deleteSubmissionController); 

router.post('/contact-message', createContactMessageController); 
router.patch('/contact-message-read/:id', authMiddleware, markContactMessageAsReadController);
router.get('/contact-message/recent', authMiddleware, getRecentContactMessagesController);
router.get('/contact-message', authMiddleware, getAllContactMessagesController);
router.delete('/contact-message/:id', authMiddleware, deleteContactMessageController);

router.get('/dashboard-stats', authMiddleware, getDashboardStatsController);

export default router;