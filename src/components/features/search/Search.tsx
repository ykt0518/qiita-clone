import { ArticleList } from "@/components/blocks"
import { useLocation } from "react-router"
import { useSearch } from "./hooks/use-search"
import { Inner } from "@/components/layouts"

export function Search() {
  const location = useLocation()
  const query = new URLSearchParams(location.search).get("q") || ""
  const { items, loading, error } = useSearch(query)

  if (loading) return <p>読み込み中…</p>
  if (error) return <p>エラーが発生しました：{error}</p>
  if (items.length === 0) {
    return <p>検索結果がありません</p>
  }

  return (
    <Inner width="auto">
      <h2 className="">「{query}」の検索結果</h2>
      <ArticleList items={items} />
    </Inner>
  )
}
