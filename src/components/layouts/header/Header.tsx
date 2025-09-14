import { Link } from "react-router"
import { SearchBox } from "@/components/blocks"
import type { HeaderProps } from "./HeaderProps"
import { HeaderNavigation } from "./components/header-navigation/HeaderNavigation"
import { COMMON_NAVIGATION, AUTH_NAVIGATION } from "./components/header-navigation/HeaderNavigationItems"
import { RightMenuUserActions } from "./components/right-menu/RightMenuUserActions"
import { RightMenuGuestActions } from "./components/right-menu/RightMenuGuestActions"

export function Header({ isAuthenticated = false }: HeaderProps) {
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
