import { Dispatch, SetStateAction } from 'react';
import { IChildren } from '../../interfaces/children';
import { ISections } from '../../interfaces/sections';

export interface NewApplicationLayoutProps extends IChildren {
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
	section: ISections;
}

export interface NewApplicationEssentialProps {
	essentials: number[];
	setEssentials: Dispatch<SetStateAction<number[]>>;
}

export interface TabElementProps extends IChildren {
	onClickTitle: () => void;
	onClickX: () => void;
	isActive: boolean;
}

export interface EssentialElementProps extends IChildren {
	onClick?: () => void;
	isNotEssential: boolean;
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
	sections: ISections[];
	onRouteToSection: (idx: number) => void;
	onRemove: (idx: number) => void;
}

export interface NewApplicationDefaultProps {
	section: ISections;
}

export interface NewApplicationIndicatorProps {
	currentSection: number;
}
