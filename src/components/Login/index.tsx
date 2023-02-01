import type {FC} from "react";
import {useSelector} from "react-redux";
import {Modal, Divider, QRCode} from "antd";
import {useTranslation} from "react-i18next";
import {selectGlobal} from "@/store/features";
import {useLogin} from "@/hooks";
import {LoginWay} from "./components";
export const Login: FC = () => {
	const {showLogin} = useSelector(selectGlobal);
	const {t} = useTranslation();
	const {onCancel} = useLogin();
	return (
		<Modal
			centered
			width={650}
			open={showLogin}
			title={t("Main.Login.title")}
			footer={null}
			onCancel={onCancel}
			maskClosable={false}>
			<div className="flex flex-col justify-center">
				<Divider />
				<div className="grid-row-1-col-2-2/1">
					<div className="login-left flex flex-col gap-2 border-r-solid border-gray-100 border-2 p-r-5">
						<LoginWay />
					</div>
					<div className="login-right flex flex-col gap-2">
						<div className="login-right-title">{t("Main.Login.ways.3")}</div>
						<QRCode value="https://ant.design/" />
					</div>
				</div>
			</div>
		</Modal>
	);
};
