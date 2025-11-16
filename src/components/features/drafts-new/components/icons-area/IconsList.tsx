import type { IconListProps } from "./IconsListProps"

export function IconsList({ items, className }: IconListProps) {
  return (
    <ul className={className}>
      {items.map(item => (
        <li key={crypto.randomUUID()} className="relative">
          <button
            type="button"
            className={`p-1.5 cursor-pointer rounded-md ${item.isActive ? "bg-[#dff4cf]" : ""} ${item.className ?? ""}`}
            onClick={item.onClick}>
            {item.content}
          </button>
          {item.tooltip && (
            <span className="max-w-[280px] w-max py-1 px-2 rounded-md bg-[#494b4b] text-white text-xs absolute bottom-[calc(100%+4px)] left-1/2 -translate-x-1/2 z-10 hidden">
              {item.tooltip}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
