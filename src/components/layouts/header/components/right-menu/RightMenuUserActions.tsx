import { Button } from "@/components/ui/button"
import { BellIcon, MenuIcon, PencilIcon, SettingIcon, TabIcon } from "@/components/icons"
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

export function RightMenuUserActions() {
  return (
    <>
      {/* 通知ボタン */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <span className="py-1 px-2 opacity-80 hover:opacity-100 duration-300 cursor-pointer">
            <BellIcon size="lg" color="black" />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80">
          <div className="flex justify-between py-1 pr-2 pl-4">
            <p className="font-bold">通知</p>
            <p className="text-sm hover:text-gray-900 duration-300">
              <a href="/settings/notifications" className="flex items-center gap-1">
                <SettingIcon size="xs" color="gray" />
                通知設定
              </a>
            </p>
          </div>
          <DropdownMenuSeparator />
          <div className="min-h-[387px] py-6 px-2">
            {/* TODO: 通知処理 */}
            <p className="font-bold text-gray-700 text-center">通知はありません</p>
          </div>
          <DropdownMenuSeparator />
          <p className="py-2 px-4 text-gray-700 font-bold text-center hover:text-gray-900 duration-300">
            <a href="/notifications">通知一覧を見る</a>
          </p>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* メニューボタン */}
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
      {/* 投稿するボタン */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-green-700 hover:bg-green-900 text-white font-bold cursor-pointer">
            投稿する
            <PencilIcon size="xs" color="white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 p-4 space-y-1">
          <DropdownMenuItem asChild className="font-bold cursor-pointer hover:opacity-80 duration-300">
            <a href="/drafts/new">記事を新規作成</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="font-bold cursor-pointer hover:opacity-80 duration-300">
            <a href="/questions/new">質問を新規作成</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="font-bold cursor-pointer hover:opacity-80 duration-300">
            <a href="/drafts">下書き一覧</a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="font-bold cursor-pointer hover:opacity-80 duration-300">
            <a href="/" target="_blank" className="flex items-center" rel="noopener noreferrer">
              記事をGitHubで管理
              <span className="flex-shrink-0">
                <TabIcon size="sm" color="gray" />
              </span>
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
