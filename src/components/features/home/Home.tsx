import { ArticleList } from "./components/article-list"
import { useArticle } from "./hooks/use-article"

export function Home() {
  const { items, loading, error } = useArticle(20)

  if (loading) return <div>読み込み中…</div>
  if (error) return <div>エラー：{error}</div>

  return (
    <>
      <h2 className="font-bold">記事一覧</h2>
      <ArticleList items={items} />
    </>
  )
}
