export namespace RequestForm {
	type Post = {
		applicationId: number;
		title: string;
		questions: {
			type: string;
			content: string;
			options: string[];
		}[];
	};

	type Put = {
		title: string;
		questions: {
			type: string;
			content: string;
			options: string[];
		}[];
	};
}

export namespace ResponseForm {
	export type Get = {}[];

	export type Post = {
		id: number;
	};

	export type Put = {
		id: number;
	};
}
