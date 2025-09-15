import "./App.css"
import "./index.css"
import { Routes, Route } from "react-router"
import { MainLayout } from "./layouts/MainLayout"
import { Home } from "./components/features/home/Home"
import { DraftsNew } from "./components/features/drafts-new/DraftsNew"

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/drafts/new" element={<DraftsNew />} />
      </Route>
    </Routes>
  )
}

export default App
