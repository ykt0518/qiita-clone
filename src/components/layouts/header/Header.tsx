import { Link, useLocation } from "react-router"
import { SearchBox } from "@/components/blocks"
import type { HeaderProps } from "./HeaderProps"
import { HeaderNavigation } from "./components/header-navigation/HeaderNavigation"
import { COMMON_NAVIGATION, AUTH_NAVIGATION } from "./components/header-navigation/HeaderNavigationItems"
import { RightMenuUserActions } from "./components/right-menu/RightMenuUserActions"
import { RightMenuGuestActions } from "./components/right-menu/RightMenuGuestActions"
import { Button } from "@/components/ui/button"
import { MenuButton } from "./components/dropdown-menu/MenuButton"

export function Header() {
  const location = useLocation()
  const isDraftsNewPage = location.pathname === "/drafts/new"

  return <>{isDraftsNewPage ? <DraftsNewHeader /> : <DefaultHeader isAuthenticated={true} />}</>
}

function DefaultHeader({ isAuthenticated = false }: HeaderProps) {
  const navigation = isAuthenticated ? [...AUTH_NAVIGATION, ...COMMON_NAVIGATION] : COMMON_NAVIGATION

  return (
    <header className="bg-white pt-2 px-10 border-b border-gray-400">
      <div className="flex justify-between items-center">
        <div className="bg-green-500 py-0.5 px-4 rounded-sm">
          <Link to="/" className="text-2xl text-white font-bold">
            Qiita Clone
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <SearchBox placeholder="記事、質問を検索" iconSize="sm" iconColor="gray" />
          {isAuthenticated ? <RightMenuUserActions /> : <RightMenuGuestActions />}
        </div>
      </div>
      <HeaderNavigation links={navigation} />
    </header>
  )
}

function DraftsNewHeader() {
  return (
    <header className="bg-white py-4 px-10 border-b border-gray-400">
      <div className="flex justify-between items-center">
        <div className="bg-green-500 py-0.5 px-4 rounded-sm">
          <Link to="/" className="text-2xl text-white font-bold">
            Qiita Clone
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <p className="">0B / 100MB</p>
          <Button variant="outline">下書き保存</Button>
          <Button variant="default">公開設定へ</Button>
          <MenuButton />
        </div>
      </div>
    </header>
  )
}
