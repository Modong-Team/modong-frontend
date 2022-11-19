import React from 'react';
import { useState } from 'react';

export default function useInput(initialValue: string) {
	const [text, setText] = useState(initialValue || '');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	return [text, onChange];
}
