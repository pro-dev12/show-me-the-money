import { Request, Response } from 'express';
import { getBalanceSheet } from '../controllers/balanceSheet';
import * as balanceSheetService from '../services/balanceSheet';
import { data } from '../mocks/mockData';

jest.mock('../services/balanceSheet');

describe('BalanceSheet Controller', () => {
	let req: Partial<Request>;
	let res: Partial<Response>;
	let mockSend: jest.Mock;

	beforeEach(() => {
		mockSend = jest.fn();
		res = {
			status: jest.fn().mockReturnThis(),
			json: mockSend,
		};
	});

	it('should return balance sheet data', async () => {
		const mockData = data;

		jest.spyOn(balanceSheetService, 'fetchBalanceSheet').mockResolvedValue(mockData);

		await getBalanceSheet(req as Request, res as Response);

		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith(mockData);
	});

	it('should handle errors', async () => {
		jest.spyOn(balanceSheetService, 'fetchBalanceSheet').mockRejectedValue(new Error('Error fetching data'));

		await getBalanceSheet(req as Request, res as Response);

		expect(res.status).toHaveBeenCalledWith(500);
		expect(res.json).toHaveBeenCalledWith({ message: 'Error fetching balance sheet data' });
	});
});
