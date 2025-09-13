import { SearchIcon } from "@/components/icons"
import type { SearchBoxProps } from "./SearchBoxProps"

export function SearchBox({ placeholder, iconSize, iconColor }: SearchBoxProps) {
  return (
    <form className="mr-4">
      <div className="py-1 px-2 flex items-center gap-2 rounded-md focus-within:ring-2 focus-within:ring-black">
        <SearchIcon size={iconSize} color={iconColor} />
        <input type="text" placeholder={placeholder} className="outline-none" />
      </div>
    </form>
  )
}
