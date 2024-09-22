import { render, screen } from '@testing-library/react';
import App from './App';
import * as hooks from './hooks/useBalanceSheetReport';

jest.mock('./hooks/useBalanceSheetReport');

describe('App', () => {
	test('displays loading state', () => {
		(hooks.useBalanceSheetReport as jest.Mock).mockReturnValue({
			report: null,
			loading: true,
			error: null,
		});

		render(<App />);
		expect(screen.getByText(/Loading.../)).toBeInTheDocument();
	});

	test('displays error message', () => {
		(hooks.useBalanceSheetReport as jest.Mock).mockReturnValue({
			report: null,
			loading: false,
			error: 'Failed to fetch',
		});

		render(<App />);
		expect(screen.getByText(/Error: Failed to fetch/)).toBeInTheDocument();
	});

	test('displays no report message', () => {
		(hooks.useBalanceSheetReport as jest.Mock).mockReturnValue({
			report: { Status: 'ERROR', Reports: [] },
			loading: false,
			error: null,
		});

		render(<App />);
		expect(screen.getByText(/No report/)).toBeInTheDocument();
	});

	test('renders BalanceSheet component when report is available', () => {
		(hooks.useBalanceSheetReport as jest.Mock).mockReturnValue({
			report: {
				Status: 'OK',
				Reports: [
					{
						ReportID: '1',
						ReportName: 'Test Report',
						ReportType: 'Balance Sheet',
						ReportTitles: ['Assets', 'Liabilities'],
						ReportDate: '2024-09-21',
						UpdatedDateUTC: '2024-09-21T12:00:00Z',
						Fields: [],
						Rows: [],
					},
				],
			},
			loading: false,
			error: null,
		});

		render(<App />);
		expect(screen.getByText(/Test Report/)).toBeInTheDocument();
	});
});
