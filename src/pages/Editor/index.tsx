import MDEditor from "@uiw/react-md-editor";
import {Input, Button} from "antd";
import {useTranslation} from "react-i18next";
import {useEditor} from "./hooks";
export default function Editor() {
	const {value, onChange} = useEditor();
	const {t} = useTranslation();
	return (
		<div className="p-3">
			<div className="normal-flex p-2">
				<Input className="text-2xl" bordered={false} placeholder={t("Editor.placeholder")} />
				<div className="normal-flex gap-2">
					<Button type="primary">{t("Editor.action.1")}</Button>
					<Button>{t("Editor.action.2")}</Button>
				</div>
			</div>
			<MDEditor value={value} onChange={onChange}></MDEditor>
		</div>
	);
}
