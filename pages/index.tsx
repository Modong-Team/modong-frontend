import type { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => {
	return (
		<>
			<StyledTest>Styled-Componets Test</StyledTest>
			<div className='pink-color'>SCSS Variables Test</div>
			<div className='pink-box'>SCSS Mixin Test</div>
		</>
	);
};

const StyledTest = styled.div`
	background-color: lightblue;
`;

export default Home;
