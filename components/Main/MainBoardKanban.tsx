import styled from 'styled-components';
import Colors from '../../constants/colors';
import FilterButton from '../buttons/FilterButton';
import DropDown from '../dropdowns/DropDown';
import MainBoardKanbanColumn from './MainBoardKanbanColumn';
import { useState } from 'react';

export default function MainBoardKanban() {
	const [isShowTypeFilter, setIsShowTypeFilter] = useState(false);
	const [isShowSortFilter, setIsShowSortFilter] = useState(false);

	const showTypeFilter = () => setIsShowTypeFilter(true);

	const showSortFilter = () => setIsShowSortFilter(true);

	const hideTypeFilter = () => setIsShowTypeFilter(false);

	const hideSortFilter = () => setIsShowSortFilter(false);

	const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

	return (
		<KanbanContainer>
			<section>
				<FilterButton title='모든 지원자' onClick={showTypeFilter} onBlur={hideTypeFilter}>
					{isShowTypeFilter && (
						<DropDown
							option1='모든 지원자'
							option2='평가중'
							option3='탈락'
							onClick1={stopPropagation}
							onClick2={stopPropagation}
							onClick3={stopPropagation}
							customCSS={`bottom:-10.5rem; >div{width:9.2rem;} div:last-of-type{color:${Colors.red500}; &:hover{background-color:${Colors.red100}}}`}
						/>
					)}
				</FilterButton>
				<FilterButton title='가나다 순' onClick={showSortFilter} onBlur={hideSortFilter}>
					{isShowSortFilter && (
						<DropDown
							option1='가나다 순'
							option2='높은 평점 순'
							option3='낮은 평점 순'
							onClick1={stopPropagation}
							onClick2={stopPropagation}
							onClick3={stopPropagation}
							customCSS={`bottom:-10.5rem; >div{width:9.2rem;}`}
						/>
					)}
				</FilterButton>
			</section>
			<section>
				<MainBoardKanbanColumn />
				<MainBoardKanbanColumn />
				<MainBoardKanbanColumn />
				<MainBoardKanbanColumn />
			</section>
		</KanbanContainer>
	);
}

const KanbanContainer = styled.div`
	> section:first-of-type {
		padding: 1.6rem 0;
		display: flex;
		gap: 0.6rem;
	}

	> section:nth-of-type(2) {
		display: flex;
		justify-content: space-between;
		padding-bottom: 3.2rem;
	}
`;
