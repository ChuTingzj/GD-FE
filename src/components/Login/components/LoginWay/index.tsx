import type {FC} from "react";
import {Input, InputNumber, Button} from "antd";
import {useTranslation} from "react-i18next";
import {useLoginWay} from "./hooks";
export const LoginWay: FC = () => {
	const {t} = useTranslation();
	const {
		account,
		password,
		mode,
		addonBefore,
		loginByOthers,
		changeMode,
		signInOrLoginByPassword,
		onAccountChange,
		onPasswordChange,
	} = useLoginWay();
	return (
		<>
			{mode === "password" ? (
				<>
					<div className="login-left-title">{t("Main.Login.ways.1")}</div>
					<Input
						placeholder={t("Main.Login.inputHint.password.1")}
						value={account}
						onChange={onAccountChange}
					/>
					<Input.Password
						value={password}
						onChange={onPasswordChange}
						addonAfter={
							<Button size="small" type="link">
								{t("Main.Login.ways.4")}
							</Button>
						}
						placeholder={t("Main.Login.inputHint.password.2")}
					/>
					<Button type="primary" onClick={signInOrLoginByPassword}>
						{t("Main.Login.value")}
					</Button>
				</>
			) : (
				<>
					<div className="login-left-title">{t("Main.Login.ways.2")}</div>
					<InputNumber addonBefore={addonBefore} placeholder={t("Main.Login.inputHint.code.1")} />
					<InputNumber
						addonAfter={<Button type="link">{t("Main.Login.inputHint.code.3")}</Button>}
						placeholder={t("Main.Login.inputHint.code.2")}
					/>
					<Button type="primary">{t("Main.Login.value")}</Button>
				</>
			)}
			<div className="login-other flex justify-between items-center">
				<div className="flex items-center">
					<div>{t("Main.Login.ways.5")}：</div>
					{loginByOthers.map((item, index) => (
						<div key={index} className="cursor-pointer" onClick={item.onClick}>
							{item.icon}
						</div>
					))}
				</div>
				<div
					className="cursor-pointer"
					onClick={() => changeMode(mode === "code" ? "password" : "code")}>
					{mode === "password" ? t("Main.Login.ways.2") : t("Main.Login.ways.1")}
				</div>
			</div>
		</>
	);
};
