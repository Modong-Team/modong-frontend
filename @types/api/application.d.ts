export namespace RequestApplication {
	type Post = {
		title: string;
	};

	type Patch = {
		essentialIds: number[];
	};
}

export namespace ResponseApplication {
	type GetAll = {
		id: number;
		title: string;
		createdAt: string;
	}[];

	type Get = {
		id: number;
		title: string;
		createdAt: string;
		essentials: {
			id: number;
			content: string;
		}[];
	};

	type Post = {
		id: number;
	};

	type Patch = {
		id: number;
		title: string;
		createdAt: string;
	};
}
