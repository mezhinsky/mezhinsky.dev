import { postConfig } from './posts.props.interfaces';

export enum postsActionTypes {
	LOAD_POSTS = 'LOAD_POSTS',
	LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS',
	LOAD_POSTS_ERROR = 'LOAD_POSTS_ERROR',
	SET_POSTS_PROPS = 'SET_POSTS_PROPS',
}

export type PostAction = LoadPosts | LoadPostsSuccess | LoadPostsError;

export interface LoadPosts {
	type: postsActionTypes.LOAD_POSTS;
}
export interface LoadPostsSuccess {
	type: postsActionTypes.LOAD_POSTS_SUCCESS;
	data: any;
}
export interface LoadPostsError {
	type: postsActionTypes.LOAD_POSTS_ERROR;
	err: Error;
}
