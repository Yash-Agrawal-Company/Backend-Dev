import express from 'express';
import { getUserProfile, updateUserProfile, changePassword } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validationMiddleware.js';
import { updateProfileSchema, changePasswordSchema } from '../validations/authValidation.js';

const router = express.Router();

router.use(protect); // Protect all routes in this file

router.get('/profile', getUserProfile);
router.put('/profile', validate(updateProfileSchema), updateUserProfile);
router.put('/change-password', validate(changePasswordSchema), changePassword);

export default router;
