import { BellIcon, SettingIcon } from "@/components/icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export function NotificationButton() {
  return (
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
  )
}
