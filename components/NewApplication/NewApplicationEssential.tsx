import styled from 'styled-components';
import Colors from '../../constants/colors';
import { svgCircleMinus, svgCirclePlus } from '../../constants/svgs';
import { Essentials } from '../../models/essentials';
import { EssentialElementWrapperProps } from './styledTypes';
import { EssentialElementProps, NewApplicationEssentialProps } from './propsTypes';

export default function NewApplicationEssential({
	essentials,
	setEssentials,
}: NewApplicationEssentialProps) {
	const essentialsList = [1, 2, 3, 4, 5, 6];

	const setIsEssential = (element: number) => {
		if (essentials.includes(element)) setEssentials(essentials.filter((v) => v !== element));
		else setEssentials([...essentials, element]);
	};

	return (
		<>
			<h2>지원자 모집에 필요한 정보를 선택해주세요</h2>
			<p>
				지원자의 인적사항을 모집하기 위한 페이지예요.
				<br />
				동아리 모집에 관련이 없는 섹션은 해제해주세요.
			</p>
			<EssentialContainer>
				{essentialsList.map((v, i) => {
					return (
						<EssentialElement
							key={i}
							onClick={() => setIsEssential(v)}
							isNotEssential={!essentials.includes(v)}
							isFixedEssential={v === 1}>
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
}: EssentialElementProps) => (
	<EssentialElementWrapper isNotEssential={isNotEssential}>
		{children}
		{!isFixedEssential && (
			<span onClick={onClick}>{isNotEssential ? svgCirclePlus : svgCircleMinus}</span>
		)}
	</EssentialElementWrapper>
);

const EssentialContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

const EssentialElementWrapper = styled.div<EssentialElementWrapperProps>`
	font-weight: 700;
	font-size: 1.8rem;
	background-color: ${(props) =>
		props.isNotEssential ? Colors.background04 : Colors.background02};
	height: 6.4rem;
	padding-left: 2rem;
	padding-right: 2.12rem;
	border-radius: 0.8rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	& {
		> span {
			display: flex;
		}
	}
`;
