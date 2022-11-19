import { Dispatch, SetStateAction } from 'react';
import { SectionsType, FormType } from '../../@types/client/data';
import { ChildrenType } from '../../@types/client/base';

export interface NewApplicationLayoutProps extends ChildrenType {
	onDone: () => void;
}

export interface NewApplicationHeaderProps {
	onDone: () => void;
}

export interface NewApplicationTitleProps {
	titleRef: React.RefObject<HTMLInputElement>;
	emptyTitleError: boolean;
}

export interface NewApplicationContentProps {
	essentials: number[];
	setEssentials: Dispatch<SetStateAction<number[]>>;
	currentSection?: number;
	section: SectionsType;
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
	currentSection: number;
	sectionsLength: number;
	onNext: () => void;
	onPrev: () => void;
}

export interface NewApplicationNavigatorProps {
	currentSection: number;
	sections: SectionsType[];
	onRouteToSection: (idx: number) => void;
	onRemove: (idx: number) => void;
}

export interface NewApplicationDefaultProps {
	form: FormType;
	formIdx: number;
}

export interface NewApplicationIndicatorProps {
	currentSection: number;
}
