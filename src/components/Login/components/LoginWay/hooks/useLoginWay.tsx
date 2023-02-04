import {useState} from "react";
import {Select, message, type InputProps} from "antd";
import {GithubOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import {type loginByPasswordRes, useLoginByPasswordMutation} from "@/api";
const {Option} = Select;
export const enum LoginMode {
	"code",
	"password",
}
export const useLoginWay = () => {
	const [account, setAccount] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [mode, setMode] = useState<keyof typeof LoginMode>("password");
	const {t} = useTranslation();
	const [trigger] = useLoginByPasswordMutation();
	const changeMode = (mode: keyof typeof LoginMode) => setMode(mode);
	const onAccountChange: InputProps["onChange"] = (e) => setAccount(e.target.value);
	const onPasswordChange: InputProps["onChange"] = (e) => setPassword(e.target.value);
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
	const signInOrLoginByPassword = async () => {
		const res = await trigger({account, password});
		if (Reflect.has(res, "data")) {
			const response = res as {data: loginByPasswordRes};
			if (response.data.success) {
				localStorage.setItem("simple_token", response.data.data);
				location.reload();
			} else {
				message.error(response.data.message);
			}
		}
	};
	return {
		account,
		password,
		mode,
		addonBefore,
		changeMode,
		onAccountChange,
		onPasswordChange,
		loginByOthers,
		authorizeByGithub,
		signInOrLoginByPassword,
	};
};
