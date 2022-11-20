import { Dispatch, SetStateAction } from 'react';
import { SectionsType, FormType } from '../../@types/client/data';
import { ChildrenType } from '../../@types/client/base';

export interface NewApplicationLayoutProps extends ChildrenType {
	onSave: () => void;
	onDone: () => void;
}

export interface NewApplicationHeaderProps {
	onSave: () => void;
	onDone: () => void;
}

export interface NewApplicationTitleProps {
	titleRef: React.RefObject<HTMLInputElement>;
	emptyTitleError: boolean;
	setEmptyTitleError: Dispatch<SetStateAction<boolean>>;
}

export interface NewApplicationContentProps {
	essentials: number[];
	setEssentials: Dispatch<SetStateAction<number[]>>;
	currentPage: number;
}

export interface NewApplicationEssentialProps {
	essentials: number[];
	setEssentials: Dispatch<SetStateAction<number[]>>;
}

export interface TabElementProps extends ChildrenType {
	onClickTitle: () => void;
	onClickX: () => void;
	isActive: boolean;
}

export interface EssentialElementProps extends ChildrenType {
	onClick?: () => void;
	isNotEssential?: boolean;
	isFixedEssential?: boolean;
}

export interface NewApplicationButtonProps {
	currentPage: number;
	onNext: () => void;
	onPrev: () => void;
}

export interface NewApplicationNavigatorProps {
	currentPage: number;
	onRouteToPage: (idx: number) => void;
	onRemove: (idx: number) => void;
}

export interface NewApplicationDefaultProps {
	form: FormType;
	formIdx: number;
}

export interface NewApplicationIndicatorProps {
	currentPage: number;
}
