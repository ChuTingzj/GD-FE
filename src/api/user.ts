import {api} from "./base";
export interface UserResponse {
	data: UserEntity | null;
	message: string;
	success: boolean;
}

/**
 * UserEntity
 */
export interface UserEntity {
	account: null | string;
	authorized: boolean;
	authorizedBy: AuthorizedBy;
	authToken: null | string;
	avatar: string;
	id: string;
	isExist: boolean;
	password: null | string;
	user_name: string;
}

export enum AuthorizedBy {
	Github = "Github",
}

const userApi = api.injectEndpoints({
	endpoints: (build) => ({
		getUser: build.query<UserEntity | null, string>({
			query: (id) => `/user/${id}`,
			transformResponse: (response: UserResponse) => response.data,
		}),
	}),
});
export const {useGetUserQuery, useLazyGetUserQuery} = userApi;
