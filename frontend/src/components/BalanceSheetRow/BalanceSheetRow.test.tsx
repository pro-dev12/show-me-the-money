import { render, screen } from '@testing-library/react';
import BalanceSheetRow from './BalanceSheetRow';
import { Row } from '../../types/types';

const sectionRow: Row = {
    RowType: 'Section',
    Title: 'Assets',
    Rows: [
        {
            RowType: 'Row',
            Cells: [{ Value: 'Cash' }, { Value: '1000.00' }, { Value: '900.00' }],
        },
        {
            RowType: 'Row',
            Cells: [{ Value: 'Inventory' }, { Value: '500.00' }, { Value: '400.00' }],
        },
    ],
};

const regularRow: Row = {
    RowType: 'Row',
    Cells: [{ Value: 'Total Assets' }, { Value: '1500.00' }, { Value: '1300.00' }],
};

describe('BalanceSheetRow', () => {
    test('renders section title and nested rows', () => {
        render(<BalanceSheetRow row={sectionRow} colspan={3} />);
        expect(screen.getByTestId('section-title')).toHaveTextContent('Assets');
        expect(screen.getByText('Cash')).toBeInTheDocument();
        expect(screen.getByText('1000.00')).toBeInTheDocument();
        expect(screen.getByText('Inventory')).toBeInTheDocument();
        expect(screen.getByText('500.00')).toBeInTheDocument();
    });

    test('renders regular row', () => {
        render(<BalanceSheetRow row={regularRow} colspan={3} />);
        expect(screen.getByTestId('row')).toBeInTheDocument();
        expect(screen.getByText('Total Assets')).toBeInTheDocument();
        expect(screen.getByText('1500.00')).toBeInTheDocument();
    });
});
