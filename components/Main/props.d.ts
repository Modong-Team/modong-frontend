export interface MainBoardKanbanColumnProps {
	isStatusEditMode: boolean;
	isOtherStatusEditMode: boolean;
	onClickStatusEdit: () => void;
}

export interface MainBoardKanbanCardProps {
	isStatusEditMode: boolean;
	isOtherStatusEditMode: boolean;
	isDisabled?: boolean;
}
