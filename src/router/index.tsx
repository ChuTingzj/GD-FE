import {Suspense} from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Spin} from "antd";
import {HomeView, ArticleDetailView, MainView, EditorView} from "./routes";
export default function RouterView() {
	return (
		<BrowserRouter>
			<Suspense
				fallback={
					<div className="normal-flex h-screen">
						<Spin size="large" />
					</div>
				}>
				<Routes>
					<Route path={"/"} element={<HomeView />}>
						<Route index element={<MainView />}></Route>
						<Route path="post/:articleId" element={<ArticleDetailView />}></Route>
					</Route>
					<Route path={"/editor"} element={<EditorView />}></Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}
