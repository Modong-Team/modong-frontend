import styled from 'styled-components';
import Colors from '../../constants/colors';
import NewApplicationHeader from './NewApplicationHeader';
import { NewApplicationLayoutProps } from './props';

export default function NewApplicationLayout({
	children,
	onSave,
	onDone,
	isComplete,
}: NewApplicationLayoutProps) {
	return (
		<S.LayoutContainer>
			<NewApplicationHeader onSave={onSave} onDone={onDone} isComplete={isComplete} />
			<S.MainContainer>{children}</S.MainContainer>
		</S.LayoutContainer>
	);
}

namespace S {
	export const LayoutContainer = styled.div``;

	export const MainContainer = styled.div`
		background-color: ${Colors.background};
		min-height: calc(100vh - 8rem);
		padding: 4rem 0;
	`;
}
