import { applyMiddleware, createStore, Middleware, StoreEnhancer, Store } from 'redux';
import { createWrapper, MakeStore, Context } from 'next-redux-wrapper';
import createSagaMiddleware, {Task} from 'redux-saga';

import { AppState } from '../interfaces';
import rootSaga from './sagas';
import rootReducer from './reducers';

export interface SagaStore extends Store {
	sagaTask?: Task;
}

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
	if (process.env.NODE_ENV !== 'production') {
		const { composeWithDevTools } = require('redux-devtools-extension');
		return composeWithDevTools(applyMiddleware(...middleware));
	}
	return applyMiddleware(...middleware);
};

export const makeStore: MakeStore<any> = (context: Context) => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
	store.sagaTask = sagaMiddleware.run(rootSaga);
	return store;
};

export const wrapper = createWrapper<Store<AppState>>(makeStore, { debug: false });
