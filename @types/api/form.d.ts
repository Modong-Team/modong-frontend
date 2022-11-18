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
	type Get = {}[];

	type Post = {
		id: number;
	};

	type Put = {
		id: number;
	};
}
