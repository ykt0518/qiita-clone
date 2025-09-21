import { Outlet } from "react-router"
import { Header } from "@/components/layouts"
import { Footer } from "@/components/layouts"

export function MainLayout() {
  return (
    <>
      <Header isAuthenticated={true} />
      <main className="max-w-[1640px] min-h-screen py-3 px-4 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
