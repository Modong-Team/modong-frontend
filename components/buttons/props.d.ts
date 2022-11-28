import { ChildrenType } from '../../@types/client/base';
import React from 'react';

export interface CustomButtonProps extends ChildrenType {
	onClick?: () => void;
	buttonSize: string;
	buttonType: string;
	isDisabled?: boolean;
	margin?: string;
	isHidden?: boolean;
}

export interface FilterButtonProps extends ChildrenType {
	title: string;
	onClick: () => void;
	onBlur: () => void;
	isActive: boolean;
}

export interface KanbanMoreButtonProps extends ChildrenType {
	isActive: boolean;
	onClick: () => void;
	onBlur: () => void;
	isDisabled?: boolean;
}

export interface CheckboxButtonProps {
	isActive: boolean;
}
