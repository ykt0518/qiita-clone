import { BOTTOM_MENU } from "./BottomMenuItems"

export function BottomMenu() {
  return (
    <div className="mt-6 bg-[#494b4b] py-4 px-6 rounded-lg">
      <p className="text-xl font-bold">エイチームグループ関連のサービス</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {BOTTOM_MENU.map(item => (
          <li key={crypto.randomUUID()} className="pr-2 border-r border-white last:border-r-0">
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
