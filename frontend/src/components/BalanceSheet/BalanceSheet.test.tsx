import { render, screen } from '@testing-library/react';
import { BalanceSheet } from './BalanceSheet';
import { Report } from '../../types/types';

describe('BalanceSheet', () => {
	const mockReport: Report = {
		ReportID: 'BalanceSheet',
		ReportName: 'Balance Sheet',
		ReportType: 'BalanceSheet',
		ReportTitles: ['Balance Sheet', 'Demo Org', 'As at 22 September 2024'],
		ReportDate: '22 September 2024',
		UpdatedDateUTC: '/Date(1726996436971)/',
		Fields: [],
		Rows: [
			{
				RowType: 'Header',
				Cells: [{ Value: '' }, { Value: '22 September 2024' }, { Value: '23 September 2023' }],
			},
			{
				RowType: 'Section',
				Title: 'Bank',
				Rows: [
					{
						RowType: 'Row',
						Cells: [
							{
								Value: 'My Bank Account',
								Attributes: [{ Value: 'd2e3044e-2fb8-42fa-be17-64c8956d5f57', Id: 'account' }],
							},
							{ Value: '126.70' },
						],
					},
					{
						RowType: 'SummaryRow',
						Cells: [{ Value: 'Total Bank' }, { Value: '126.70' }],
					},
				],
			},
			{
				RowType: 'Section',
				Title: 'Current Assets',
				Rows: [
					{
						RowType: 'Row',
						Cells: [
							{
								Value: 'Accounts Receivable',
								Attributes: [{ Value: '2193c682-087f-4215-a251-a3dd7b94f6b6', Id: 'account' }],
							},
							{ Value: '1008657.64' },
						],
					},
					{
						RowType: 'SummaryRow',
						Cells: [{ Value: 'Total Current Assets' }, { Value: '1008657.64' }],
					},
				],
			},
		],
	};

	test('renders report name and titles', () => {
		render(<BalanceSheet report={mockReport} />);
        expect (screen.getByTestId('report-name')).toHaveTextContent('Balance Sheet');
        expect (screen.getByTestId('report-titles')).toHaveTextContent('Balance Sheet');
        expect (screen.getByTestId('report-titles')).toHaveTextContent('Demo Org');
        expect (screen.getByTestId('report-titles')).toHaveTextContent('As at 22 September 2024');
        expect (screen.getByTestId('report-type')).toHaveTextContent('BalanceSheet');
        expect (screen.getByTestId('report-date')).toHaveTextContent('22 September 2024');
        expect (screen.getByTestId('report-updated')).toHaveTextContent('Updated: 9/22/2024, 11:13:56 AM');
	});


	test('renders table headers', () => {
		render(<BalanceSheet report={mockReport} />);
        expect(screen.getByTestId('report-headers').querySelectorAll('th')).toHaveLength(3);
        expect(screen.getByTestId('report-headers')).toHaveTextContent('22 September 2024');
	});

    test('renders sections', () => {
        render(<BalanceSheet report={mockReport} />);
        expect(screen.getAllByTestId('section-title')).toHaveLength(2);
    });
});
