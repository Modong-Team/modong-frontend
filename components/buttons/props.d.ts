import { ChildrenType } from '../../@types/client/base';

type CommonProps = ChildrenType & {
	onClick: () => void;
	onBlur: () => void;
	isActive: boolean;
	isDisabled?: boolean;
};

export type CustomButtonProps = Pick<CommonProps, 'onClick' | 'children' | 'isDisabled'> & {
	buttonSize: string;
	buttonType: string;
	margin?: string;
	isHidden?: boolean;
};

export type FilterButtonProps = CommonProps & {
	title: string;
};

export type KanbanMoreButtonProps = CommonProps & {};

export type CheckboxButtonProps = Pick<CommonProps, 'isActive'>;
