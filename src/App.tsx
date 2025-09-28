import "./App.css"
import "./index.css"
import { Routes, Route } from "react-router"
import { MainLayout } from "./layouts/MainLayout"
import { Home } from "./components/features/home/Home"
import { Detail } from "./components/features/detail/Detail"
import { Search } from "./components/features/search/Search"

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  )
}

export default App
