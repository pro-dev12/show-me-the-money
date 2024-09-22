import { useEffect, useState } from "react";
import { BalanceSheetReport } from "../types/types";
import { fetchBalanceSheet } from "../services/balanceSheet";

export const useBalanceSheetReport = () => {
	const [report, setReport] = useState<BalanceSheetReport | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchBalanceSheet();
				setReport(data);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return { report, loading, error };
};
