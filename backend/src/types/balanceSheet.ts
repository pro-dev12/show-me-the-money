export interface BalanceSheetReport {
	Status: string;
	Reports: Report[];
}

interface Report {
	ReportID: string;
	ReportName: string;
	ReportType: string;
	ReportTitles: string[];
	ReportDate: string;
	UpdatedDateUTC: string;
	Fields: any[];
	Rows: Row[];
}

interface Row {
	RowType: RowType;
	Cells?: Cell[];
	Title?: string;
	Rows?: Row[];
}

type RowType = 'Header' | 'Section' | 'Row' | 'SummaryRow';

interface Cell {
	Value: string;
	Attributes?: Attribute[];
}

interface Attribute {
	Value: string;
	Id: string;
}
