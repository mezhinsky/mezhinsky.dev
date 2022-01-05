import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Post from './PostItem';
import Err from './Error';
import Loading from './Loading';

const Wrapper = styled.div`
	padding-bottom: 30px;
	@media only screen and (min-width: 600px) {
	}

	@media only screen and (min-width: 900px) {
	}
`;

const Plist = styled.ul`
	list-style: none;
	margin: 0 !important;
	padding: 0 !important;

	@media only screen and (min-width: 600px) {
	}

	@media only screen and (min-width: 900px) {
	}
`;

const PostList: React.FunctionComponent<any> = ({ items, loading, error }) => {
	let content = <div />;

	const List = () => (
		<Plist>
			{items.map(function (item: any) {
				return <Post key={item?.properties?.Slug?.rich_text[0]?.text?.content} title={item?.properties?.Title?.title[0]?.text?.content} date={item?.properties?.Date?.date?.start} slug={item?.properties?.Slug?.rich_text[0]?.text?.content} description={item?.properties?.Description?.rich_text[0]?.text?.content} />;
			})}
		</Plist>
	);

	if (!loading && !error) {
		if (items && items.length) {
			content = List();
		} else {
			content = <div>EMTY</div>;
		}
	}

	if (loading) {
		content = <Loading />;
	}

	if (error) {
		content = <Err />;
	}

	return <Wrapper>{content}</Wrapper>;
};

PostList.propTypes = {
	items: PropTypes.any,
	loading: PropTypes.bool,
	error: PropTypes.bool,
};

export default PostList;
