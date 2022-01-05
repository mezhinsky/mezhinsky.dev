import { notionActionTypes } from '../../../interfaces/notion/notion.actions.interfaces';
import * as actionIs from '../../../interfaces/notion/notion.actions.interfaces';

export function loadPageBlocks(id: string): actionIs.LoadPageBlocks {
	return { type: notionActionTypes.LOAD_PAGE_BLOCKS, id };
}

export function loadPageBlocksOk(data: any): actionIs.LoadPageBlocksOk {
	return {
		type: notionActionTypes.LOAD_PAGE_BLOCKS_OK,
		data,
	};
}

export function loadPageBlocksErr(err: Error): actionIs.LoadPageBlocksErr {
	return {
		type: notionActionTypes.LOAD_PAGE_BLOCKS_ERR,
		err,
	};
}
