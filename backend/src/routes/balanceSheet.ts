import { Router } from 'express';
import { getBalanceSheet } from '../controllers/balanceSheet';

const router = Router();

router.get('/', getBalanceSheet);

export default router;
