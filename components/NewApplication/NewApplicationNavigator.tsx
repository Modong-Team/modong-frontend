import styled from 'styled-components';
import Colors from '../../constants/colors';
import { NewApplicationNavigatorProps } from './props';
import { NavigatorElementProps } from './styled';
import { svgMore } from '../../constants/svgs';
import { useState } from 'react';
import { useFormsValue } from '../../contexts/FormsProviders';
import { Styles } from '../../constants/styles';
import DropDown from '../dropdowns/DropDown';

export default function NewApplicationNavigator({
	currentPage,
	onRouteToPage,
	onRemove,
}: NewApplicationNavigatorProps) {
	const [showMoreFor, setShowMoreFor] = useState(-1);
	const forms = useFormsValue();

	const onClickMore = (e: React.MouseEvent, idx: number) => {
		e.stopPropagation();
		setShowMoreFor(idx);
	};
	const onBlur = () => setShowMoreFor(-1);

	const onClickRemove = (e: React.MouseEvent, idx: number) => {
		e.stopPropagation();
		setShowMoreFor(-1);
		onRemove(idx);
	};

	return (
		<S.NavigatorContainer>
			<S.NavigatorElement isCurrent={currentPage === -1} onClick={() => onRouteToPage(-1)}>
				지원자 정보
			</S.NavigatorElement>
			{forms.map((v, i) => (
				<S.NavigatorElement
					isCurrent={currentPage === i}
					key={i}
					onBlur={onBlur}
					onClick={() => onRouteToPage(i)}>
					<span>{v.title}</span>
					<span onClick={(e) => onClickMore(e, i)}>{svgMore}</span>
					{showMoreFor === i && (
						<DropDown
							option1={'삭제하기'}
							option2={'복제하기'}
							onClick1={(e) => onClickRemove(e, i)}
							onClick2={() => alert('미구현된 피쳐입니다.')}
							customCSS={`${Styles.dropDownAlignRightBottom} bottom:-6rem; right:-2rem; div:first-of-type{${Styles.dropDownOptionRed}}`}
						/>
					)}
				</S.NavigatorElement>
			))}
		</S.NavigatorContainer>
	);
}

namespace S {
	export const NavigatorContainer = styled.section`
		${Styles.stickyIndicatorAndNavigator}
		margin-left: 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		grid-column: 3/4;
		grid-row: 2/5;
	`;

	export const NavigatorElement = styled.button<NavigatorElementProps>`
		box-sizing: border-box;
		position: relative;
		background-color: ${(props) => (props.isCurrent ? Colors.white : Colors.gray200)};
		border: 0.1rem solid ${(props) => (props.isCurrent ? Colors.gray200 : Colors.gray300)};
		color: ${(props) => (props.isCurrent ? Colors.gray900 : Colors.gray500)};
		padding: 0rem 1.6rem;
		padding-right: 1rem;
		border-radius: 0.8rem;
		width: 17.4rem;
		height: 4.8rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		span:first-child {
			width: 100%;
			white-space: nowrap;
			max-width: 85%;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		span,
		svg {
			cursor: pointer;
		}

		svg {
			position: relative;
			top: 0.1rem;
		}
	`;
}
