import { ChildrenType } from '../../@types/client/base';

export namespace EssentialProps {
	export type EssentialElementProps = ChildrenType & {
		onClick?: () => void;
		isNotEssential?: boolean;
		isFixedEssential?: boolean;
	};
}
