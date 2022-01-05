export enum listingsActionTypes {
	LOAD_LISTINGS = 'LOAD_LISTINGS',
	LOAD_LISTINGS_SUCCESS = 'LOAD_LISTINGS_SUCCESS',
	LOAD_LISTINGS_ERROR = 'LOAD_LISTINGS_ERROR',
}

export type Action = LoadListings | LoadListingsSuccess | LoadListingsError;
export interface LoadListings {
	type: listingsActionTypes.LOAD_LISTINGS;
}
export interface LoadListingsSuccess {
	type: listingsActionTypes.LOAD_LISTINGS_SUCCESS;
	data: any;
}
export interface LoadListingsError {
	type: listingsActionTypes.LOAD_LISTINGS_ERROR;
}