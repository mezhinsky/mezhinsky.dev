import React, { Fragment } from 'react';
import styled from 'styled-components';
import { NotionRenderer, Code } from 'react-notion-x';
import PropTypes from 'prop-types';
// import 'react-notion-x/src/styles.css';
import dynamic from 'next/dynamic';
import Loading from './Loading';
import Typography from './NotionTypography';

import 'prismjs/themes/prism-okaidia.css';

const Pdf = dynamic(() => import('react-notion-x').then((notion): any => notion.Pdf));

const Wrapper = styled.div`
	@media only screen and (min-width: 600px) {
	}

	@media only screen and (min-width: 900px) {
	}
`;

const Content = styled.div`
	width: 100%;
	padding-top: 30px;

	@media only screen and (min-width: 600px) {
		padding-top: 30px;
	}

	@media only screen and (min-width: 900px) {
		padding-top: 0;

	}
`;

const Title = styled.h1`
	font-weight: 700 !important;

	@media only screen and (min-width: 600px) {
	}

	@media only screen and (min-width: 900px) {
	}
`;

const Time = styled.time`
	font-family: monospace;
	font-size: 18px;
	min-width: 170px;
	padding-top: 10px;

	@media only screen and (min-width: 600px) {
	}

	@media only screen and (min-width: 900px) {
	}
`;

const PostItem: React.FunctionComponent<any> = ({ item }) => {
	// let date;
	// if (item.date) {
	// 	date = new Date(item.date);
	// 	date = date.toDateString();
	// } else {
	// 	date = '-';
	// }

	const renderContent = () => {
		if (item) {
			return (
				<Typography>
				<NotionRenderer
					recordMap={item}
					fullPage={true}
					darkMode={false}
					components={{
						pdf: Pdf,
						code: Code,
					}}
				/>
				</Typography>
			);
		} else {
			return <Loading />;
		}
	};

	const contentRender = () => (
		<Fragment>
			<Content>{renderContent()}</Content>
			{/* <Title>{item?.properties?.Title?.title[0]?.plain_text}</Title> */}
			{/* <Time>{date}</Time> */}
			{/* <Content>{item.content}</Content> */}
		</Fragment>
	);

	let content = contentRender();

	return <Wrapper>{content}</Wrapper>;
};

PostItem.propTypes = {
	item: PropTypes.any,
};

export default PostItem;
