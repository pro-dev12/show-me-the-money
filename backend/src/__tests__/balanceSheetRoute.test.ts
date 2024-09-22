import request from 'supertest';
import app from '../index';

describe('GET /api/balance-sheet', () => {
	it('should return balance sheet data', async () => {
		const response = await request(app).get('/api/balance-sheet');
		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('Reports');
		expect(response.body).toHaveProperty('Status', 'OK');
	});
});
