import express, {Router} from 'express';
import { addUsers } from '../controller/user-controller.js';
const router=express.Router();
router.post('/add',addUsers);
export default router;