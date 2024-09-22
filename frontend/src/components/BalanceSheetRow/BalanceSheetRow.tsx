import { Row } from '../../types/types';

interface BalanceSheetRowProps {
	row: Row;
	colspan: number;
}

const BalanceSheetRow = ({ row, colspan }: BalanceSheetRowProps) => {
	if (row.RowType === 'Section') {
		return (
			<>
				<tr
					className="section"
					data-testid="row"
				>
					<td
						colSpan={colspan}
						data-testid="section-title"
					>
						<strong>{row.Title}</strong>
					</td>
				</tr>
				{row.Rows &&
					row.Rows.map((subRow, index) => (
						<BalanceSheetRow
							key={index}
							row={subRow}
							colspan={colspan}
						/>
					))}
			</>
		);
	} else if (row.RowType === 'SummaryRow') {
		return (
			<tr data-testid="row">
				{row.Cells?.map((cell, index) => (
					<td key={index}>
						<strong>{cell.Value}</strong>
					</td>
				))}
			</tr>
		);
	} else {
		return (
			<tr data-testid="row">
				{row.Cells?.map((cell, index) => (
					<td key={index}>{cell.Value}</td>
				))}
			</tr>
		);
	}
};

export default BalanceSheetRow;
