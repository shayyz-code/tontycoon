import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <main className="flex flex-col items-center gap-5 h-full p-5 overflow-y-scroll">
        <Outlet />
      </main>
      <div>
        <Navbar />
      </div>
    </>
  )
}

export default App
