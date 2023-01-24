import { Suspense } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import { HomeView, ArticleDetailView, MainView } from './routes'
export default function RouterView() {
  return (
    <HashRouter>
      <Suspense>
        <Routes>
          <Route path='/' element={<HomeView />}>
            <Route element={<MainView />} index></Route>
            <Route path='/post/:articleId' element={<ArticleDetailView />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  )
}