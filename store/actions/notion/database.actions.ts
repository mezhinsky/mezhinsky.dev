import { notionActionTypes } from '../../../interfaces/notion/notion.actions.interfaces';
import * as actionIs from '../../../interfaces/notion/notion.actions.interfaces';

export function loadDatabase(): actionIs.LoadDatabase {
	return { type: notionActionTypes.LOAD_DATABASE };
}

export function loadDatabaseSuccess(data: any): actionIs.LoadDatabaseSuccess {
	return {
		type: notionActionTypes.LOAD_DATABASE_SUCCESS,
		data,
	};
}

export function loadDatabaseError(err: Error): actionIs.LoadDatabaseError {
	return {
		type: notionActionTypes.LOAD_DATABASE_ERROR,
		err,
	};
}
