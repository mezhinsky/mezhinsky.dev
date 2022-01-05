import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { NextPage } from 'next';

import { END } from 'redux-saga';

import { createStructuredSelector } from 'reselect';
import { loadPage } from '../store/actions/notion/page.actions';

import BaseLayout from '../components/Layout';

import { makeSelectLoading, makeSelectItem } from '../store/selectors/notion.selectors';

import PostDetail from '../components/PostDetail';

import { wrapper } from '../store/store';

interface PageProps {
	page: any;
	loading: boolean;
}

const Blog: NextPage<PageProps, any> = ({ page, loading }) => {
	return (
		<BaseLayout>
			<Head>
				<title>Page @ Mezhinsky.dev</title>
			</Head>
			<PostDetail item={page} />
		</BaseLayout>
	);
};

Blog.getInitialProps = wrapper.getInitialPageProps((store) => async ({ query, req, res }) => {
	let { slug } = query;
	if (!req) {
		store.dispatch(loadPage(String(slug)));
		return {};
	}
	await store.dispatch(loadPage(String(slug)));
	store.dispatch(END);
	await store.sagaTask!.toPromise();
	return {};
});

function mapDispatchToProps(dispatch) {
	return {};
}

const mapStateToProps = createStructuredSelector({
	loading: makeSelectLoading(),
	page: makeSelectItem(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
