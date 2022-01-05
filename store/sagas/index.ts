import { all } from 'redux-saga/effects';

import NotionSaga from './notion.saga';

function* rootSaga() {
	yield all([NotionSaga()]);
}

export default rootSaga;
