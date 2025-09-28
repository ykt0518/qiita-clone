import { ArticleCard } from "@/components/blocks"
import type { ArticleListProps } from "./ArticleListProps"

export function ArticleList({ items }: ArticleListProps) {
  return (
    <ul className="mt-2 space-y-6">
      {items.map(item => (
        <li key={item.id} className="bg-white py-4 px-6 rounded-xl">
          <ArticleCard {...item} />
        </li>
      ))}
    </ul>
  )
}
