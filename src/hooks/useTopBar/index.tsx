import type {MenuProps} from "antd";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {PenIcon} from "@/components";
import {exclude_on_click} from "@/utils";
const nav = [
	"Main.TopBar.list.1",
	"Main.TopBar.list.2",
	"Main.TopBar.list.3",
	"Main.TopBar.list.4",
	"Main.TopBar.list.5",
];

export const useTopBar = () => {
	const {t} = useTranslation();
	const navigate = useNavigate();
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
	return {
		nav,
		dropDownItems,
		onNavItemClick,
		onMenuItemClick,
		goHome,
	};
};
