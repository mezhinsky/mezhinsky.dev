import { HYDRATE } from 'next-redux-wrapper';
import { NotionAction, notionActionTypes } from '../../interfaces/notion/notion.actions.interfaces';
interface State {
	results: any;
	count: any;
	next_cursor: number | null;
	has_more: number;
	loading: boolean;
	error: boolean | Error;
	first_load: boolean;
	test: any;

	item: any;
}

export const NotionInitialState: State = {
	results: null,
	count: 0,
	next_cursor: null,
	has_more: 0,
	loading: false,
	error: false,
	first_load: true,

	item: null,

	test: null,
};

const NotionReducer = (
	state = NotionInitialState,
	action: NotionAction | { type: typeof HYDRATE; payload: any },
): State => {
	switch (action.type) {
		case HYDRATE:
			return { ...state, ...action.payload.notion }
			

			case notionActionTypes.LOAD_TEST_OK:
				return {
					...state,
					...{
						test: action.data,
					},
				};

		case notionActionTypes.LOAD_DATABASE:
			return {
				...state,
				...{
					loading: true,
				},
			};
		case notionActionTypes.LOAD_DATABASE_SUCCESS:
			return {
				...state,
				...{
					results: action.data.results,
					count: action.data.results.length,
					has_more: action.data.has_more,
					next_cursor: action.data.next_cursor,
					loading: false,
					first_load: false,
				},
			};

		case notionActionTypes.LOAD_DATABASE_ERROR:
			return {
				...state,
				...{
					loading: false,
					error: true,
				},
			};

		case notionActionTypes.LOAD_PAGE:
			return {
				...state,
				...{
					item: null,
					first_load: false,
				},
			};

		case notionActionTypes.LOAD_PAGE_OK:
			return {
				...state,
				...{
					item: action.data,
					first_load: false,
				},
			};

		default:
			return state;
	}
};

export default NotionReducer;
