import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';

import Link from 'next/link';

const Wrapper = styled.li`
	padding: 20px 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-bottom: 1px rgba(0, 0, 0, 0.25) dotted;

	:hover,
	:focus {
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.1);
	}

	@media only screen and (min-width: 600px) {
	}

	@media only screen and (min-width: 900px) {
	}
`;

const Head = styled.div``;

const Title = styled.h2`
	margin: 0 !important;
	padding: 10px 0;
	font-size: 30px;
	font-weight: bold;
	line-height: 40px !important;
	border: none !important;
	font-weight: 700 !important;
`;

const Description = styled.div`
	margin: 0;
	padding: 0;
	font-weight: 14px;
`;

const TopSection = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;

	@media only screen and (min-width: 600px) {
		flex-direction: row;
		justify-content: space-between;
	}

	a {
		color: inherit !important;
		text-decoration: none !important;
		&:hover {
			text-decoration: none !important;
		}
	}
`;

const Meta = styled.div`
	display: flex;
	flex-direction: column;
`;

const Time = styled.time`
	font-family: monospace;
	font-size: 18px;
	min-width: 170px;
	padding-top: 10px;
`;

const PostItem: React.FunctionComponent<any> = ({ title, date, slug, description }) => {
	let formatedDate;
	if (date) {
		formatedDate = new Date(date);
		formatedDate = formatedDate.toDateString();
	} else {
		formatedDate = '-';
	}

	return (
		<Wrapper>
			<TopSection>
				<Link key={slug} href="/[slug]" as={`/${slug}`}>
					<a>
						<Head>
							<Title>{title}</Title>
							<Description>{description}</Description>
						</Head>
					</a>
				</Link>
				<Meta>
					<Time>{formatedDate}</Time>
				</Meta>
			</TopSection>
		</Wrapper>
	);
};

PostItem.propTypes = {
	title: PropTypes.string,
	date: PropTypes.string,
	slug: PropTypes.string,
	description: PropTypes.string,
};

export default PostItem;
