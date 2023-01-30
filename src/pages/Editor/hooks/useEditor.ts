import {useState} from "react";
export const useEditor = () => {
	const [value, setValue] = useState<string>("Hello,World");
	const onChange = (value: string | undefined) => (value ? setValue(value) : setValue(""));
	return {
		value,
		onChange,
	};
};
