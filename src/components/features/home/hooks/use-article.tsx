import type { ArticleCardProps } from "@/components/blocks"
import { useEffect, useState } from "react"

// Qiita APIのURL
const QIITA_API_ITEMS_URL = "https://qiita.com/api/v2/items"

// 1ページあたり表示件数のデフォルトは20件
export function useArticle(perPage: number = 20) {
  // 記事の配列を管理するstate
  const [items, setItems] = useState<ArticleCardProps[]>([])
  // 読み込み中かどうかを管理するstate
  const [loading, setLoading] = useState(true)
  // エラー情報を管理するstate
  const [error, setError] = useState<string | null>(null)

  // コンポーネントがマウントされた時、またはperPageが変わった時にAPIを呼ぶ
  useEffect(() => {
    // 非同期関数でAPI呼び出し
    async function fetchArticles() {
      try {
        // Qiita APIを呼び出す
        const response = await fetch(`${QIITA_API_ITEMS_URL}?page=1&per_page=${perPage}`, {
          headers: {
            // アクセストークンをAuthorizationヘッダーに設定
            Authorization: `Bearer ${import.meta.env.VITE_QIITA_TOKEN}`,
          },
        })

        // レスポンスが失敗（ステータスコードが200系以外）の場合はエラーを投げる
        if (!response.ok) {
          throw new Error(`Qiita API 取得エラー：${response.status}`)
        }

        // JSONをパース
        const data = await response.json()

        // APIのレスポンスをArticleCardProps型に変換
        const mapped: ArticleCardProps[] = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          createdAt: item.created_at,
          updatedAt: item.updated_at,
          url: item.url,
          user: {
            id: item.user.id,
            name: item.user.name,
            icon: item.user.profile_image_url,
          },
        }))

        // stateにセットしてコンポーネントを再レンダリング
        setItems(mapped)
      } catch (e) {
        // エラー発生時はerror stateにセット
        setError(e instanceof Error ? e.message : "不明なエラー")
      } finally {
        // 成功・失敗に関わらずloadingをfalseに
        setLoading(false)
      }
    }

    // fetchArticlesを呼び出す
    fetchArticles()
  }, [perPage])

  return { items, loading, error }
}
