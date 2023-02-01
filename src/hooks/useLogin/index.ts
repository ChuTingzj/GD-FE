import {useDispatch} from "react-redux";
import type {AppDispatch} from "@/store";
import {changeShowLogin} from "@/store/features";
export const useLogin = () => {
	const dispatch = useDispatch<AppDispatch>();
	const onCancel = () => dispatch(changeShowLogin(false));
	return {
		onCancel,
	};
};
