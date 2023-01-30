import {Carousel, Image, Badge} from "antd";
import {useTranslation} from "react-i18next";
import {HotHeader} from "@/components";
import {CarouselEntity, ArticleEntity} from "@/api";
interface HotContentProps {
	imgList: Array<CarouselEntity>;
	hotContentList: Array<ArticleEntity>;
	hotColorList: Array<string>;
}
export const HotContent: React.FC<HotContentProps> = (props) => {
	const {imgList, hotContentList, hotColorList} = props;
	const {t} = useTranslation();
	return (
		<div className="flex-col mt-5 flex justify-center normal-transition bg-white p-3 dark:color-light dark:bg-dark">
			<HotHeader
				prefix="hotContent"
				onAllClick={() => {}}
				title={t("Main.Article.HotContent.title")}
			/>
			<div className="hotContent-middle normal-bb">
				<Carousel autoplay>
					{Array.isArray(imgList) &&
						imgList.map((item) => (
							<Image key={item.id} width={"100%"} height={150} src={item.img_url} />
						))}
				</Carousel>
			</div>
			<div className="hotContent-bottom py-2 flex flex-col justify-center">
				{Array.isArray(hotContentList) &&
					hotContentList.map((item, index) => (
						<div
							className="flex items-center gap-2 py-2 normal-bb cursor-pointer hover:bg-gray-100 hover:text-black"
							key={item.id}>
							<Badge count={index + 1} showZero color={hotColorList[index]} />
							<div className="text-13">{item.article_title}</div>
						</div>
					))}
			</div>
		</div>
	);
};
