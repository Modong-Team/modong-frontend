import styled from 'styled-components';
import Colors from '../../constants/colors';
import { svgChecked, svgUnChecked, svgCheckedBlue } from '../../constants/svgs';
import { Essentials } from '../../models/essentials';
import { EssentialElementWrapperProps } from './styledTypes';
import { EssentialElementProps, NewApplicationEssentialProps } from './propsTypes';
import Fonts from '../../constants/fonts';

export default function NewApplicationEssential({
	essentials,
	setEssentials,
}: NewApplicationEssentialProps) {
	const essentialsList = Object.keys(Essentials).map((v) => Number(v));

	const setIsEssential = (element: number) => {
		if ([1, 2, 3].includes(element)) return;
		if (essentials.includes(element)) setEssentials(essentials.filter((v) => v !== element));
		else setEssentials([...essentials, element]);
	};

	return (
		<>
			<h2>지원자 정보</h2>
			<EssentialContainer>
				<Description>아래 3가지 항목은 지원자들에게 기본적으로 제출받는 항목입니다.</Description>
				{essentialsList.slice(0, 3).map((v, i) => {
					return (
						<EssentialElement
							key={i}
							onClick={() => setIsEssential(v)}
							isNotEssential={!essentials.includes(v)}
							isFixedEssential={true}>
							{Essentials[v]}
						</EssentialElement>
					);
				})}
				<Description>지원자에게 추가로 제출받을 항목을 선택해 주세요.</Description>
				{essentialsList.slice(3).map((v, i) => {
					return (
						<EssentialElement
							key={i}
							onClick={() => setIsEssential(v)}
							isNotEssential={!essentials.includes(v)}>
							{Essentials[v]}
						</EssentialElement>
					);
				})}
			</EssentialContainer>
		</>
	);
}

const EssentialElement = ({
	children,
	onClick,
	isNotEssential,
	isFixedEssential,
}: EssentialElementProps) => {
	return (
		<EssentialElementWrapper
			onClick={onClick}
			isNotEssential={isNotEssential}
			isFixedEssential={isFixedEssential}>
			{
				<span>
					{!isFixedEssential ? (isNotEssential ? svgUnChecked : svgCheckedBlue) : svgChecked}
				</span>
			}
			{children}
		</EssentialElementWrapper>
	);
};

const EssentialContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const EssentialElementWrapper = styled.div<EssentialElementWrapperProps>`
	${Fonts.subtitle16semibold}
	height: 4.8rem;
	padding: 0 2.15rem;
	border-radius: 0.8rem;
	border: 0.1rem solid ${Colors.gray200};
	color: ${Colors.gray900};
	display: flex;
	align-items: center;
	gap: 1.15rem;
	cursor: ${(props) => (!props.isFixedEssential ? 'pointer' : '')};
	margin-bottom: 1rem;
	transition: 0.3s ease;

	& {
		> span {
			display: flex;
		}
		:last-child {
			margin-bottom: 0;
		}
	}

	&:hover {
		background-color: ${(props) => (!props.isFixedEssential ? Colors.gray100 : '')};
		border-color: ${(props) => (!props.isFixedEssential ? Colors.gray300 : '')};
		transition: 0.3s ease;

		> span svg path:first-child {
			fill: ${(props) => props.isNotEssential && Colors.gray300};
			transition: 0.3s ease;
		}
	}
`;

const Description = styled.p`
	margin-bottom: 0.8rem;

	&:nth-of-type(2) {
		margin-top: 1.4rem;
	}
`;
