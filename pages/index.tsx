import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { NextPage } from 'next';
import Head from 'next/head';

import { END } from 'redux-saga';
import { createStructuredSelector } from 'reselect';
import { loadDatabase } from '../store/actions/notion/database.actions';
import { wrapper } from '../store/store';

import BaseLayout from '../components/Layout';

import { makeSelectLoading, makeSelectItems } from '../store/selectors/notion.selectors';

import PostList from '../components/PostList';
interface PageProps {
	items: [];
	loading: boolean;
	error: boolean | Error;
	limit: number;
	offset: number;
}

const Blog: NextPage<PageProps, any> = ({ items, loading, error, limit, offset }) => {
	const dispatch = useDispatch();

	const handleLoadMore = () => {
		dispatch(loadDatabase());
	};

	useEffect(() => {}, []);

	return (
		<BaseLayout>
			<Head>
				<title>Home @ Mezhinsky.dev</title>
			</Head>
			<PostList items={items} loading={loading} slowLoadMore={true} onLoadMore={handleLoadMore} />
		</BaseLayout>
	);
};

Blog.getInitialProps = wrapper.getInitialPageProps((store) => async ({ query, req, res }) => {
	if (!req) {
		store.dispatch(loadDatabase());
		return {};
	}
	await store.dispatch(loadDatabase());
	store.dispatch(END);
	await store.sagaTask!.toPromise();
	return {};
});

function mapDispatchToProps(dispatch) {
	return {};
}

const mapStateToProps = createStructuredSelector({
	loading: makeSelectLoading(),
	items: makeSelectItems(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
