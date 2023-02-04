import {api} from "./";
/**
 * CreateUserOrLoginByPasswordDto
 */
export interface LoginByPasswordArgs {
	account: string;
	password: string;
}
export interface loginByPasswordRes {
	data: string;
	success: boolean;
	message: string;
}
const authorizeApi = api.injectEndpoints({
	endpoints: (build) => ({
		loginByPassword: build.mutation<loginByPasswordRes, LoginByPasswordArgs>({
			query: (data) => ({
				url: "/authorize/password",
				method: "post",
				body: data,
			}),
		}),
	}),
});
export const {useLoginByPasswordMutation} = authorizeApi;
