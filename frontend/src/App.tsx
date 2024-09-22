import { BalanceSheet } from './components/BalanceSheet';
import { useBalanceSheetReport } from './hooks';

function App() {
	const { report, loading, error } = useBalanceSheetReport();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!report || report.Status !== 'OK') return <div>No report</div>;
	return (
		<div>
			{report.Reports.map((rep) => (
				<BalanceSheet
					key={rep.ReportID}
					report={rep}
				/>
			))}
		</div>
	);
}

export default App;
