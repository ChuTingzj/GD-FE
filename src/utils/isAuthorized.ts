export const isAuthorized = () => {
	const flag = JSON.parse(localStorage.getItem("simple_token") ?? "{}");
	const flagKeys = Reflect.ownKeys(flag);
	return flagKeys.length ? true : false;
};
