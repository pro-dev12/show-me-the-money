import { BalanceSheetReport } from '../types/types';

const API_URL = 'http://localhost:5000/api/balance-sheet';

export const fetchBalanceSheet = async (): Promise<BalanceSheetReport> => {
	const response = await fetch(API_URL);
	if (!response.ok) {
		throw new Error('Failed to fetch balance sheet');
	}
	return response.json();
};
