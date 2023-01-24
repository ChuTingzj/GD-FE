import { Suspense } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomeView, ArticleDetailView, MainView } from './routes'
export default function RouterView() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path='/' element={<HomeView />}>
            <Route element={<MainView />} index></Route>
            <Route path='/post/:articleId' element={<ArticleDetailView />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}