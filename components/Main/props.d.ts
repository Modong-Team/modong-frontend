export type MainBoardKanbanColumnProps = {
	isStatusEditMode: boolean;
	isOtherStatusEditMode: boolean;
	onClickStatusEdit: () => void;
};

export type MainBoardKanbanCardProps = Omit<MainBoardKanbanColumnProps, 'onClickStatusEdit'> & {
	isDisabled?: boolean;
};
