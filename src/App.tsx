import { useReachBottom } from '@/hooks'
import RouterView from "./router"
function App() {
  useReachBottom()
  return (
    <RouterView />
  )
}

export default App
