import { notionActionTypes } from '../../../interfaces/notion/notion.actions.interfaces';
import * as actionIs from '../../../interfaces/notion/notion.actions.interfaces';

export function loadPage(slug: string): actionIs.LoadPage {
	return { type: notionActionTypes.LOAD_PAGE, slug };
}

export function loadPageOk(data: any): actionIs.LoadPageOk {
	return {
		type: notionActionTypes.LOAD_PAGE_OK,
		data,
	};
}

export function loadPageErr(err: Error): actionIs.LoadPageErr {
	return {
		type: notionActionTypes.LOAD_PAGE_ERR,
		err,
	};
}
