import { combineReducers } from 'redux';
import NotionReducer from './notion.reducer';

const Reducers = combineReducers({
	notion: NotionReducer,
});
export default Reducers;
