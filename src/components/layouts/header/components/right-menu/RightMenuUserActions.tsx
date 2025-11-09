import { MenuButton } from "../dropdown-menu/MenuButton"
import { PostButton } from "../dropdown-menu/PostButton"
import { NotificationButton } from "../dropdown-menu/NotificationButton"

export function RightMenuUserActions() {
  return (
    <>
      {/* 通知ボタン */}
      <NotificationButton />
      {/* メニューボタン */}
      <MenuButton />
      {/* 投稿するボタン */}
      <PostButton />
    </>
  )
}
