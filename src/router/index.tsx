import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeView, ArticleDetailView, MainView } from './routes'
export default function RouterView() {
  return (
    <BrowserRouter basename='/'>
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