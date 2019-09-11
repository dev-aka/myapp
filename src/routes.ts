import { Router } from 'express';
import { studentRoute } from './controllers/student'

const router = Router();

router.use('/', studentRoute);

export default router;
