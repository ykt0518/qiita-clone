import { ArticleCard } from "@/components/blocks/article-card/ArticleCard"
import type { ArticleListProps } from "./ArticleListProps"

export function ArticleList({ items }: ArticleListProps) {
  return (
    <ul className="space-y-6">
      {items.map(item => (
        <li key={item.id} className="bg-white pt-4 px-6 rounded-xl">
          <ArticleCard {...item} />
        </li>
      ))}
    </ul>
  )
}
