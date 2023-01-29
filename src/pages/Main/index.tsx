import {TagBar, ArticleList} from "./components";
import {useTagBar} from "./hooks";
export default function Main() {
	const {tags, onTagItemClick} = useTagBar();

	return (
		<>
			<TagBar tags={tags} onTagItemClick={onTagItemClick as any} />
			<ArticleList />
		</>
	);
}
