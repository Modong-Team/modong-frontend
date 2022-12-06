import { Dispatch, SetStateAction } from 'react';
import { SectionsType, FormType } from '../../@types/client/data';
import { ChildrenType } from '../../@types/client/base';

type CommonProps = {
	currentPage: number;
	isComplete: boolean;
};

export type NewApplicationLayoutProps = ChildrenType &
	Pick<CommonProps, 'isComplete'> & {
		onSave: () => void;
		onDone: () => void;
	};

export type NewApplicationHeaderProps = Omit<NewApplicationLayoutProps, 'children'>;

export type NewApplicationTitleProps = {
	titleRef: React.RefObject<HTMLInputElement>;
	emptyTitleError: boolean;
	setEmptyTitleError: Dispatch<SetStateAction<boolean>>;
};

export type NewApplicationContentProps = CommonProps & {
	essentials: number[];
	setEssentials: Dispatch<SetStateAction<number[]>>;
};

export type NewApplicationEssentialProps = Omit<NewApplicationContentProps, keyof CommonProps>;

export type NewApplicationButtonProps = Pick<CommonProps, 'currentPage'> & {
	onNext: () => void;
	onPrev: () => void;
};

export type NewApplicationNavigatorProps = Pick<CommonProps, 'currentPage'> & {
	onRouteToPage: (idx: number) => void;
	onRemove: (idx: number) => void;
};

export type NewApplicationDefaultProps = {
	form: FormType;
	formIdx: number;
};

export type NewApplicationIndicatorProps = CommonProps & {};
