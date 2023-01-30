import {Outlet} from "react-router-dom";
import {TopBar} from "@/components";
import {useTopBar} from "@/hooks";
import {MouseEventHandler} from "react";
export default function Home() {
	const {nav, onNavItemClick, dropDownItems, goHome, onMenuItemClick} = useTopBar();
	return (
		<>
			<TopBar
				goHome={goHome}
				dropDownItems={dropDownItems}
				onMenuItemClick={onMenuItemClick}
				nav={nav}
				onNavItemClick={onNavItemClick as any as MouseEventHandler}
			/>
			<Outlet />
		</>
	);
}
