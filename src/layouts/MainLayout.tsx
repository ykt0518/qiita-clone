import { Outlet } from "react-router"
import { Header } from "@/components/layouts"
import { Footer } from "@/components/layouts"

export function MainLayout() {
  return (
    <>
      <Header isAuthenticated={true} />
      <main className="min-h-screen py-3 px-4 bg-[#f5f6f6] flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
