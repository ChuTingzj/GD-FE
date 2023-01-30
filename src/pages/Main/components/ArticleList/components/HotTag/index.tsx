import React from "react";
import {Tag} from "antd";
import {useTranslation} from "react-i18next";
import {HotHeader} from "@/components";
import type {CategoryEntity} from "@/api";
interface HotTagProps {
	tagList: Array<CategoryEntity>;
}
export const HotTag: React.FC<HotTagProps> = (props) => {
	const {tagList} = props;
	const {t} = useTranslation();
	return (
		<div className="flex-col flex justify-center normal-transition bg-white p-3 dark:color-light dark:bg-dark">
			<HotHeader prefix="hotTag" title={t("Main.Article.HotTag.title")} onAllClick={() => {}} />
			<div className="hotTag-bottom py-2">
				{Array.isArray(tagList) &&
					tagList.map((item) => (
						<Tag className="m-1 cursor-pointer" key={item.id} color={item.background}>
							{item.cate_name}
						</Tag>
					))}
			</div>
		</div>
	);
};
