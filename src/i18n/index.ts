import {initReactI18next} from "react-i18next";
import i18next from "i18next";
import En from "./config/en.json";
import Zh from "./config/zh-cn.json";

export const enum Ei18n {
	en,
	zh,
}
export const resources = {
	en: {
		translation: En,
	},
	zh: {
		translation: Zh,
	},
};
const lng = localStorage.getItem("lng");
i18next.use(initReactI18next).init({
	lng: lng ? lng : "en",
	debug: true,
	resources,
});
