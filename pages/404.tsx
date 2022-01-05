import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseLayout from '../components/Layout';

const Wrapper = styled.div`
	width: 100%;
	height: calc(60vh);
	display: flex;
	justify-content: center;
	align-items: center;
	span {
		font-size: 64px;
		font-weight: 600;
	}
`;

const Index = () => {
	return (
		<BaseLayout>
			<Head>
				<title>404 @ Mezhinsky.dev</title>
			</Head>
			<Wrapper>
				<span>404</span>
			</Wrapper>
		</BaseLayout>
	);
};

Index.propTypes = {
	posts: PropTypes.any,
};

export default Index;
