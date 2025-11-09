import { PencilIcon, TabIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function PostButton() {
  return (
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
  )
}
