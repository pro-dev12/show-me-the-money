export interface BalanceSheetReport {
	Status: string;
	Reports: Report[];
}

export interface Report {
	ReportID: string;
	ReportName: string;
	ReportType: string;
	ReportTitles: string[];
	ReportDate: string;
	UpdatedDateUTC: string;
	Fields: any[];
	Rows: Row[];
}

export interface Row {
	RowType: RowType;
	Cells?: Cell[];
	Title?: string;
	Rows?: Row[];
}

export type RowType = 'Header' | 'Section' | 'Row' | 'SummaryRow';

export interface Cell {
	Value: string;
	Attributes?: Attribute[];
}

export interface Attribute {
	Value: string;
	Id: string;
}
