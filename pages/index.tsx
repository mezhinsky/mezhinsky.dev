import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { NextPage } from 'next';
import Head from 'next/head';

import { END } from 'redux-saga';
import { createStructuredSelector } from 'reselect';
import { loadDatabase, loadTest } from '../store/actions/notion/database.actions';
import { wrapper } from '../store/store';

import BaseLayout from '../components/Layout';

import { makeSelectLoading, makeSelectItems, makeSelectTest } from '../store/selectors/notion.selectors';

import PostList from '../components/PostList';
interface PageProps {
	items: [];
	loading: boolean;
	error: boolean | Error;
	limit: number;
	offset: number;
	test: [],
}


const Blog: NextPage<PageProps, any> = ({ items, test, loading, error, limit, offset }) => {
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
			{JSON.stringify(test)}
			<PostList items={items} loading={loading} slowLoadMore={true} onLoadMore={handleLoadMore} />
		</BaseLayout>
	);
};

export const getServerSideProps: any = wrapper.getServerSideProps((store): any => async ({ query, req, res }: any) => {
	if (!req) {
		store.dispatch(loadDatabase());
		store.dispatch(loadTest());
		return {};
	}
	await store.dispatch(loadDatabase());
	await store.dispatch(loadTest());
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
	test: makeSelectTest(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
