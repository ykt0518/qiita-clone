import { BottomMenu } from "./components/bottom-menu/BottomMenu"
import { FooterNavigation } from "./components/footer-navigation/FooterNavigation"

export function Footer() {
  return (
    <footer className="bg-[#3a3c3c] py-12 px-8 text-white">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-3xl text-white font-bold">
              <a href="/">Qiita Clone</a>
            </p>
            <p className="text-sm">How developers code is here.</p>
          </div>
          <small className="text-xs">© 2011-2025 Qiita Inc.</small>
        </div>
        <FooterNavigation />
      </div>
      <BottomMenu />
    </footer>
  )
}
