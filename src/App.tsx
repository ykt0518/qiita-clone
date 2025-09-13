import "./App.css"
import "./index.css"
import Header from "@/components/header/Header"

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-2xl font-bold text-center">Hello World</p>
      </div>
    </>
  )
}

export default App
