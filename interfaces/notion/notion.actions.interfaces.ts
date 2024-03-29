
export enum notionActionTypes {
	LOAD_DATABASE = 'LOAD_DATABASE',
	LOAD_DATABASE_SUCCESS = 'LOAD_DATABASE_SUCCESS',
	LOAD_DATABASE_ERROR = 'LOAD_DATABASE_ERROR',

	LOAD_PAGE = 'LOAD_PAGE',
	LOAD_PAGE_OK = 'LOAD_PAGE_OK',
	LOAD_PAGE_ERR = 'LOAD_PAGE_ERR',

	LOAD_PAGE_BLOCKS = 'LOAD_PAGE_BLOCKS',
	LOAD_PAGE_BLOCKS_OK = 'LOAD_PAGE_BLOCKS_OK',
	LOAD_PAGE_BLOCKS_ERR = 'LOAD_PAGE_BLOCKS_ERR',

	LOAD_TEST = 'LOAD_TEST',
	LOAD_TEST_OK = 'LOAD_TEST_OK',
	LOAD_TEST_ERR = 'LOAD_TEST_ERR'

}

export type NotionAction = LoadTest | LoadTestOK | LoadTestERR | LoadDatabase | LoadDatabaseSuccess | LoadDatabaseError | LoadPage | LoadPageOk | LoadPageErr | LoadPageBlocks | LoadPageBlocksOk | LoadPageBlocksErr


export interface LoadTest {
	type: notionActionTypes.LOAD_TEST;
}
export interface LoadTestOK {
	type: notionActionTypes.LOAD_TEST_OK;
	data: any;
}
export interface LoadTestERR {
	type: notionActionTypes.LOAD_TEST_ERR;
	err: Error;
}


export interface LoadDatabase {
	type: notionActionTypes.LOAD_DATABASE;
}
export interface LoadDatabaseSuccess {
	type: notionActionTypes.LOAD_DATABASE_SUCCESS;
	data: any;
}
export interface LoadDatabaseError {
	type: notionActionTypes.LOAD_DATABASE_ERROR;
	err: Error;
}
export interface LoadPage {
	type: notionActionTypes.LOAD_PAGE;
	slug: string;
}
export interface LoadPageOk {
	type: notionActionTypes.LOAD_PAGE_OK;
	data: any;
}
export interface LoadPageErr {
	type: notionActionTypes.LOAD_PAGE_ERR;
	err: Error;
}
export interface LoadPageBlocks {
	type: notionActionTypes.LOAD_PAGE_BLOCKS;
	id: string;
}
export interface LoadPageBlocksOk {
	type: notionActionTypes.LOAD_PAGE_BLOCKS_OK;
	data: any;
}
export interface LoadPageBlocksErr {
	type: notionActionTypes.LOAD_PAGE_BLOCKS_ERR;
	err: Error;
}