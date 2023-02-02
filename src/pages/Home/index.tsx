import {MouseEventHandler} from "react";
import {Outlet} from "react-router-dom";
import {TopBar} from "@/components";
import {useTopBar} from "@/hooks";
export default function Home() {
	const {nav, userInfo, onNavItemClick, dropDownItems, goHome, onMenuItemClick, onAvatarClick} =
		useTopBar();
	return (
		<>
			<TopBar
				userInfo={userInfo}
				goHome={goHome}
				dropDownItems={dropDownItems}
				onMenuItemClick={onMenuItemClick}
				nav={nav}
				onNavItemClick={onNavItemClick as any as MouseEventHandler}
				onAvatarClick={onAvatarClick}
			/>
			<Outlet />
		</>
	);
}
