import {Login} from "@/components";
import {TagBar, ArticleList} from "./components";
import {useTagBar} from "./hooks";
export default function Main() {
	const {tags, onTagItemClick} = useTagBar();
	return (
		<>
			<Login />
			<TagBar tags={tags} onTagItemClick={onTagItemClick as any} />
			<ArticleList />
		</>
	);
}
