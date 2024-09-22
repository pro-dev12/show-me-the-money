import { Request, Response } from 'express';
import { fetchBalanceSheet } from '../services/balanceSheet';

export const getBalanceSheet = async (req: Request, res: Response) => {
  try {
    const balanceSheetData = await fetchBalanceSheet();
    res.status(200).json(balanceSheetData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching balance sheet data' });
  }
};
