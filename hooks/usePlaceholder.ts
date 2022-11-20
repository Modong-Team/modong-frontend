import React, { useRef, useState, MutableRefObject } from 'react';
import { useEffect } from 'react';

export default function usePlaceholder(placeholder: string, onChange: React.ChangeEventHandler) {
	const [isEmpty, setIsEmpty] = useState(false);
	const valueRef = useRef() as MutableRefObject<HTMLInputElement>;

	const onFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.slice(0, -1) === placeholder.slice(0, -1)) {
			e.target.value = '';
			onChange(e);
			setIsEmpty(false);
		}
	};

	const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/\s/g, '');
		if (value === '' || e.target.value.slice(0, -1) === placeholder.slice(0, -1)) {
			e.target.value = placeholder;
			onChange(e);
			setIsEmpty(true);
			return;
		}
	};

	useEffect(() => {
		valueRef.current.focus();
		valueRef.current.blur();
	}, []);

	return [isEmpty, valueRef, onFocus, onBlur];
}
