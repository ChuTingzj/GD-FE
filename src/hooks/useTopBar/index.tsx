import type {MenuProps} from "antd";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";
import {PenIcon} from "@/components";
import {useGetUserQuery} from "@/api";
import type {AppDispatch} from "@/store";
import {changeShowLogin} from "@/store/features";
import {exclude_on_click, isAuthorized} from "@/utils";
const nav = [
	"Main.TopBar.list.1",
	"Main.TopBar.list.2",
	"Main.TopBar.list.3",
	"Main.TopBar.list.4",
	"Main.TopBar.list.5",
];

export const useTopBar = () => {
	const id = localStorage.getItem("simple_token") ?? "";
	const {t} = useTranslation();
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const {data: userInfo} = useGetUserQuery(id);
	const dropDownItems: MenuProps["items"] = [
		{
			label: t("Main.TopBar.DropDownMenu.menu.1"),
			key: "1",
			icon: <PenIcon />,
		},
	];
	const onMenuItemClick: MenuProps["onClick"] = ({key}) => {
		if (key === "1") return navigate("/editor");
	};
	const onNavItemClick = (event: MouseEvent) => {
		exclude_on_click(event);
	};
	const goHome = () => navigate("/");
	const onAvatarClick = () => {
		if (isAuthorized()) {
			navigate("/userDetail");
		} else {
			dispatch(changeShowLogin(true));
		}
	};
	return {
		nav,
		userInfo,
		dropDownItems,
		onNavItemClick,
		onMenuItemClick,
		onAvatarClick,
		goHome,
	};
};
