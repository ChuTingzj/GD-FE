import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeView } from './routes'
export default function RouterView() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path='/' element={<HomeView />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}