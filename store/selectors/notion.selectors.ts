import { createSelector } from 'reselect';
import { NotionInitialState } from '../reducers/notion.reducer';

const selectPostsState = (state) => state.notion || NotionInitialState;

export const makeSelectItems = () =>
	createSelector(selectPostsState, (substate) => substate.results);

export const makeSelectLoading = () =>
	createSelector(selectPostsState, (substate) => substate.loading);

export const makeSelectItem = () =>
	createSelector(selectPostsState, (substate) => substate.item);
