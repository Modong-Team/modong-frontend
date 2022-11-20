import styled from 'styled-components';
import Colors from '../../constants/colors';
import { NewApplicationNavigatorProps } from './props';
import { NavigatorElementProps } from './styled';
import { svgVertical } from '../../constants/svgs';
import Fonts from '../../constants/fonts';
import { useState } from 'react';
import { useFormsValue } from '../../contexts/FormsProviders';

export default function NewApplicationNavigator({
	currentPage,
	onRouteToPage,
	onRemove,
}: NewApplicationNavigatorProps) {
	const [showMoreFor, setShowMoreFor] = useState(-1);
	const forms = useFormsValue();

	const onClickMore = (idx: number) => setShowMoreFor(idx);
	const onBlur = () => setShowMoreFor(-1);

	const onClickRemove = (idx: number) => {
		setShowMoreFor(-1);
		onRemove(idx);
	};

	return (
		<NavigatorContainer>
			<NavigatorElement isCurrent={currentPage === -1} onClick={() => onRouteToPage(-1)}>
				지원자 정보
			</NavigatorElement>
			{forms.map((v, i) => (
				<NavigatorElement isCurrent={currentPage === i} key={i} onBlur={onBlur}>
					<span onClick={() => onRouteToPage(i)}>{v.title}</span>
					<span onClick={() => onClickMore(i)}>{svgVertical}</span>
					{showMoreFor === i && (
						<NavigatorMore>
							<div onClick={() => onClickRemove(i)}>삭제하기</div>
							<div>복제하기</div>
						</NavigatorMore>
					)}
				</NavigatorElement>
			))}
		</NavigatorContainer>
	);
}

const NavigatorContainer = styled.section`
	margin-left: 2rem;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	grid-column: 3/4;
	grid-row: 2/5;
`;

const NavigatorElement = styled.button<NavigatorElementProps>`
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

const NavigatorMore = styled.div`
	position: absolute;
	bottom: -5.3rem;
	right: -2.25rem;
	background-color: ${Colors.white};
	z-index: 10;
	border: 0.1rem solid ${Colors.gray200};
	border-radius: 0.4rem;
	box-shadow: 6px 7px 16px rgba(106, 106, 106, 0.17);
	transition: 0.3s ease;

	& {
		div {
			${Fonts.subtitle14semibold}

			&:hover {
				background-color: ${Colors.gray100};
				transition: 0.3s ease;
			}
		}

		div:first-child {
			color: ${Colors.red500};
			padding: 0.7rem 1.6rem 0.4rem 1.6rem;
		}

		div:last-child {
			padding: 0.4rem 1.6rem 0.7rem 1.6rem;
		}
	}
`;
