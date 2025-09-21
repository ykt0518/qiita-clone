import "./App.css"
import "./index.css"
import { Routes, Route } from "react-router"
import { MainLayout } from "./layouts/MainLayout"
import { Home } from "./components/features/home/Home"

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
