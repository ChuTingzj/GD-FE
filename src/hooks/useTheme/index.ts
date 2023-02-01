import {useEffect, useState} from "react";
export const useTheme = () => {
	const [isDark, setDark] = useState<boolean>(localStorage.theme === "dark");
	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add("dark");
			document.documentElement.setAttribute("data-color-mode", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			document.documentElement.setAttribute("data-color-mode", "light");
		}
	}, [isDark]);
	const switchToLight = () => {
		localStorage.theme = "light";
		setDark(false);
	};
	const switchToDark = () => {
		localStorage.theme = "dark";
		setDark(true);
	};
	return {
		isDark,
		switchToDark,
		switchToLight,
	};
};
