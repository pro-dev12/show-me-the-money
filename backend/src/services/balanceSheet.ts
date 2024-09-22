import axios from 'axios';
import { BalanceSheetReport } from '../types/balanceSheet';

export const fetchBalanceSheet = async () => {
  const response = await axios.get<BalanceSheetReport>('http://localhost:3000/api.xro/2.0/Reports/BalanceSheet');
  return response.data;
};
