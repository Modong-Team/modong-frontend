import { ChildrenType } from '../../@types/client/base';
import React from 'react';

export interface CustomButtonProps extends ChildrenType {
	onClick?: () => void;
	buttonSize: string;
	buttonType: string;
	isDisabled?: boolean;
	margin?: string;
}

export interface FilterButtonProps extends ChildrenType {
	title: string;
	onClick: () => void;
	onBlur: () => void;
	isActive: boolean;
}
