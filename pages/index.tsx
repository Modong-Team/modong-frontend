import type { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => {
	return (
		<>
			<StyledTest>Styled-Componets Test</StyledTest>
		</>
	);
};

const StyledTest = styled.div`
	background-color: lightblue;
`;

export default Home;
