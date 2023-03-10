import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import i18next from "i18next";
import {changeListArgs, selectList, changeEndId, selectGlobal} from "@/store/features";
import type {AppDispatch} from "@/store";
import {hotColorList} from "./mock";
import {
	useGetArticleListMutation,
	useGetCategoryQuery,
	useGetCarouselQuery,
	useGetHotArticleListQuery,
} from "@/api";
import type {ListApiRes, ArticleEntity} from "@/api";
import {exclude_on_click} from "@/utils";
export const enum ELH {
	"推荐",
	"最新",
	"热榜",
}
export const useArticleList = () => {
	const [articleList, setArticleList] = useState<Array<ArticleEntity>>([]);
	const dispatch = useDispatch<AppDispatch>();
	const {listArgs, end_id} = useSelector(selectList);
	const {isReachBottom} = useSelector(selectGlobal);
	const [trigger] = useGetArticleListMutation();
	const {data: tagList} = useGetCategoryQuery();
	const {data: imgList} = useGetCarouselQuery();
	const {data: hotContentList} = useGetHotArticleListQuery();
	useEffect(() => {
		(async () => {
			const res = await trigger(listArgs);
			if (Reflect.has(res, "data")) {
				const list = (res as any as ListApiRes).data;
				setArticleList(list);
				if (list.length) {
					dispatch(changeEndId(list[list.length - 1].id));
				}
			}
		})();
	}, [listArgs]);
	useEffect(() => {
		(async () => {
			if (isReachBottom) {
				const res = await trigger({end_id, ...listArgs});
				if (Reflect.has(res, "data")) {
					const list = (res as any as ListApiRes).data;
					setArticleList((preState) => preState.concat(list));
					if (list.length) {
						dispatch(changeEndId(list[list.length - 1].id));
					}
				}
			}
		})();
	}, [isReachBottom]);
	const onFilterItemClick = (event: MouseEvent) => {
		const classListValue = (event.target as HTMLElement).classList.value;
		const i18nKey = (event.target as HTMLElement).getAttribute("data-key") as string;
		const i18nValue = i18next.getResource("zh", "translation", i18nKey);
		exclude_on_click(event);
		if (classListValue !== "cursor-pointer") return;
		if (i18nValue === "最新") return dispatch(changeListArgs({latest: true}));
		if (i18nValue === "热榜") return dispatch(changeListArgs({hottest: true}));
		return dispatch(changeListArgs({latest: false, hottest: false}));
	};
	return {
		onFilterItemClick,
		articleList,
		hotTag: {
			tagList,
		},
		hotContent: {
			imgList,
			hotContentList,
			hotColorList,
		},
	};
};
