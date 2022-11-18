export interface EssentialsType {
	1: string;
	2: string;
	3: string;
	4: string;
	5: string;
	6: string;
	7: string;
	8: string;
	[keys: number]: string;
}

export interface SectionsType {
	title: string;
}

export type QuestionType = {
	type: string;
	content: string;
	options: string[];
};
