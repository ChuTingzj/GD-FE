import {useState} from "react";
import {Select} from "antd";
import {GithubOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
const {Option} = Select;
export const enum LoginMode {
	"code",
	"password",
}
export const useLoginWay = () => {
	const [mode, setMode] = useState<keyof typeof LoginMode>("password");
	const {t} = useTranslation();
	const changeMode = (mode: keyof typeof LoginMode) => setMode(mode);
	const addonBefore = (
		<Select defaultValue={86}>
			<Option value={86}>
				<div className="flex justify-between items-center gap-1">
					<div>{t("Main.Login.addonBefore.1")}</div>
					<div>+86</div>
				</div>
			</Option>
		</Select>
	);
	const authorizeByGithub = () => {
		location.href = `https://github.com/login/oauth/authorize?client_id=983cf4b3feff31bba087&redirect_uri=http://124.223.56.117:3000/authorize`;
	};
	const loginByOthers = [
		{
			icon: <GithubOutlined />,
			onClick: authorizeByGithub,
		},
	];
	return {
		mode,
		changeMode,
		addonBefore,
		loginByOthers,
		authorizeByGithub,
	};
};
