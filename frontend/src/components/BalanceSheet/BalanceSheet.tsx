import './BalanceSheet.css';
import { Report } from '../../types/types';
import BalanceSheetRow from '../BalanceSheetRow/BalanceSheetRow';

interface BalanceSheetProps {
	report: Report;
}
export const BalanceSheet = ({ report }: BalanceSheetProps) => {
	const headers = report.Rows.filter((row) => row.RowType === 'Header')?.[0];
	const sections = report.Rows.filter((row) => row.RowType === 'Section');

	return (
		<div className="balance-sheet-report">
			<div className="report">
				<h2 data-testid="report-name">{report.ReportName}</h2>
				<h3 data-testid="report-titles">
					<ul className="titles">
						{report.ReportTitles.map((title, index) => (
							<li key={index}>{title}</li>
						))}
					</ul>
				</h3>
				<p data-testid="report-type">Report Type: {report.ReportType}</p>
				<p data-testid="report-date">Report Date: {report.ReportDate}</p>
				<p data-testid="report-updated">Updated: {new Date(parseInt(report.UpdatedDateUTC.substr(6, 13))).toLocaleString()}</p>
				<table>
					<thead>
						<tr data-testid="report-headers">
							{headers?.Cells?.map((cell, index) => (
								<th key={index}>{cell.Value}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{sections.map((section, index) => (
							<BalanceSheetRow
								key={index}
								row={section}
								colspan={3}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
