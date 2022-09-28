import { all, call, delay, put, take, takeLatest, takeEvery, select } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { loadDatabaseSuccess, loadDatabaseError, loadTestOk } from '../actions/notion/database.actions';
import { loadPageOk, loadPageErr } from '../actions/notion/page.actions';
import { notionActionTypes } from '../../interfaces/notion/notion.actions.interfaces';


function* loadTestSaga() {
	try {
		const { status, data }: AxiosResponse<any[]> = yield call(
			axios.get,
			`https://jsonplaceholder.typicode.com/posts`,
			{
				params: {
					// offset,
					// limit,
				},
			},
		);

		if (status === 200) {
			yield put(loadTestOk(data));
		}
	} catch (err: any) {
		let er = new Error(err);
	}
}



function* loadDatabaseSaga() {
	try {
		const { status, data }: AxiosResponse<any[]> = yield call(
			axios.get,
			`http://localhost:3000/api/v1/notion/pages`,
			{
				params: {
					// offset,
					// limit,
				},
			},
		);

		if (status === 200) {
			yield put(loadDatabaseSuccess(data));
		}
	} catch (err: any) {
		let er = new Error(err);
		yield put(loadDatabaseError(er));
	}
}

function* loadPageSaga(props) {
	try {
		const { status, data }: AxiosResponse<any> = yield call(
			axios.get,
			`http://localhost:3000/api/v1/notion/page/${props.slug}`,
		);

		if (status === 200) {
			yield put(loadPageOk(data));
		}
	} catch (err) {
		let er = new Error()
		yield put(loadPageErr(er));
	}
}


function* notionSaga(): Generator<any> {
	yield all([
		takeLatest(notionActionTypes.LOAD_DATABASE, loadDatabaseSaga),
		takeLatest(notionActionTypes.LOAD_PAGE, loadPageSaga),
		takeLatest(notionActionTypes.LOAD_TEST, loadTestSaga),

	]);
	
}

export default notionSaga;
