import { Dispatch, SetStateAction } from 'react';
import { IChildren } from '../../interfaces/children';

export interface NewApplicationLayoutProps extends IChildren {
	onDone: () => void;
}

export interface NewApplicationHeaderProps {
	onDone: () => void;
}

export interface NewApplicationTitleProps {
	titleRef: React.RefObject<HTMLInputElement>;
}

export interface NewApplicationContentProps {
	essentials: number[];
	setEssentials: Dispatch<SetStateAction<number[]>>;
}

export interface NewApplicationEssentialProps extends NewApplicationContentProps {}

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
