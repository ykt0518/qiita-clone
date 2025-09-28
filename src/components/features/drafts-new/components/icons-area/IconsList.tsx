import type { IconListProps } from "./IconsListProps"

export function IconsList({ items, className }: IconListProps) {
  return (
    <ul className={className}>
      {items.map(item => (
        <li key={crypto.randomUUID()}>
          <button type="button" className="p-1.5 cursor-pointer" onClick={item.onClick}>
            {item.content}
          </button>
        </li>
      ))}
    </ul>
  )
}
