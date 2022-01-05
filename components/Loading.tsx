import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: calc(100vh - 200px);
	justify-content: center;
	align-items: center;

	div {
		font-family: monospace;
		text-transform: uppercase;
		font-size: 20px;
	}
`;

function Loading() {
	return (
		<Wrapper>
			<div>Loading...</div>
		</Wrapper>
	);
}

Loading.propTypes = {};

export default Loading;
