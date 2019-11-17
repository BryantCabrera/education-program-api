export interface IProgram {
	school: string;
	programName: string;
	degreeType: string;
	delivery: string;
	annualTuition: number;
	location: string;
}

export interface IProgramsGetResponse {
	status: number;
	data: IProgram[];
}
