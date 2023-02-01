import {useReachBottom, useTheme} from "@/hooks";
import RouterView from "./router";
function App() {
	useReachBottom();
	useTheme();
	return <RouterView />;
}

export default App;
