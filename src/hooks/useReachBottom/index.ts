import {useDispatch} from "react-redux";
import type {AppDispatch} from "@/store";
import {throttle} from "@console1024/utils";
import {changeIsReachBottom} from "@/store/features";
export const useReachBottom = () => {
	const dispatch = useDispatch<AppDispatch>();
	window.addEventListener(
		"scroll",
		throttle(() => {
			// 滚动视口高度(也就是当前元素的真实高度)
			const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
			// 可见区域高度
			const clientHeight =
				window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			// 滚动条顶部到浏览器顶部高度
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			// console.table([clientHeight,scrollTop,scrollHeight],['可见区域高度','滚动条顶部到浏览器顶部高度','滚动视口高度']);
			if (Math.round(clientHeight + scrollTop) >= scrollHeight) {
				dispatch(changeIsReachBottom(true));
				console.log("滚动条触底了");
			} else {
				dispatch(changeIsReachBottom(false));
			}
		})
	);
};
