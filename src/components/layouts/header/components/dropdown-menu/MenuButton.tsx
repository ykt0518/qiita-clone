import { MenuIcon, TabIcon } from "@/components/icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
  DropdownMenuSub,
} from "@/components/ui/dropdown-menu"

export function MenuButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <span className="py-1 px-2 hover:opacity-80 duration-300">
          <MenuIcon size="xl" color="secondary" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 p-4 space-y-1">
        <DropdownMenuItem asChild className="font-bold cursor-pointer hover:opacity-80 duration-300">
          <a href="/drafts/new">マイページ</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="font-bold cursor-pointer hover:opacity-80 duration-300">
          <a href="/questions/new">獲得したバッジ</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="font-bold cursor-pointer hover:opacity-80 duration-300">
          <a href="/drafts">ストックした記事</a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="font-bold cursor-pointer hover:opacity-80 duration-300">
            テーマカラー
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem className="font-bold cursor-pointer hover:opacity-80 duration-300">
                システムのテーマ
              </DropdownMenuItem>
              <DropdownMenuItem className="font-bold cursor-pointer hover:opacity-80 duration-300">
                ライトテーマ
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem asChild className="font-bold cursor-pointer hover:opacity-80 duration-300">
          <a href="/drafts">テーマカラー</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="font-bold cursor-pointer hover:opacity-80 duration-300">
          <a href="/drafts">下書き一覧</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="font-bold cursor-pointer hover:opacity-80 duration-300">
          <a href="/drafts">限定共有記事</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="font-bold cursor-pointer hover:opacity-80 duration-300">
          <a href="/drafts">編集リクエスト</a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="font-bold cursor-pointer hover:opacity-80 duration-300">
          <a href="/drafts">設定</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="font-bold cursor-pointer hover:opacity-80 duration-300">
          <a href="/drafts">ログアウト</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="font-bold cursor-pointer hover:opacity-80 duration-300">
          <a href="/" target="_blank" className="flex items-center" rel="noopener noreferrer">
            Qiita CLI
            <span className="flex-shrink-0">
              <TabIcon size="sm" color="gray" />
            </span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
