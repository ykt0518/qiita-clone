import { Link } from "react-router"
import type { ArticleCardProps } from "./ArticleCardProps"

export function ArticleCard({ id, title, createdAt, updatedAt, user }: ArticleCardProps) {
  return (
    <>
      <div className="grid grid-cols-[32px_1fr] grid-rows-2 gap-x-2">
        <span className="row-span-2 block w-8 h-8 rounded-full overflow-hidden">
          <img src={user.icon} alt={user.name} width={32} height={32} />
        </span>
        <p className="text-sm">{user.name}</p>
        <p className="text-xs text-[rgba(0,0,0,0.6)]">
          <time dateTime={updatedAt ?? createdAt}>
            {updatedAt
              ? `更新日：${new Date(updatedAt).toLocaleDateString("ja-JP")}`
              : `作成日：${new Date(createdAt).toLocaleDateString("ja-JP")}`}
          </time>
        </p>
      </div>
      <div className="mt-2 ml-10">
        <h3 className="text-xl font-bold">
          <Link to={`/articles/${id}`}>{title}</Link>
        </h3>
      </div>
    </>
  )
}
