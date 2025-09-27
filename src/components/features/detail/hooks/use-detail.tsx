import { useEffect, useState } from "react"
import type { DetailProps } from "../DetailProps"

// Qiita APIのエンドポイント
const QIITA_API_ITEMS_URL = "https://qiita.com/api/v2/items"

export function useDetail(id: string) {
  // 記事詳細を管理するstate
  const [detail, setDetail] = useState<DetailProps | null>(null)
  // 読み込み中フラグ
  const [loading, setLoading] = useState(true)
  // エラー内容を管理するstate
  const [error, setError] = useState<string | null>(null)

  // マウント時にAPIを呼ぶ
  useEffect(() => {
    // 初期化
    setError(null)
    setDetail(null)
    setLoading(true)

    // 記事IDが無い場合は処理を中断
    if (!id) {
      setLoading(false)
      return
    }

    // 非同期関数で記事詳細を取得
    async function fetchDetail() {
      try {
        // Qiita APIから記事詳細を取得
        const response = await fetch(`${QIITA_API_ITEMS_URL}/${id}`, {
          headers: {
            // アクセストークンをAuthorizationヘッダーに設定（省略可）
            Authorization: `Bearer ${import.meta.env.VITE_QIITA_TOKEN}`,
          },
        })

        // ステータスコードがエラーなら例外を投げる
        if (!response.ok) {
          throw new Error(`Qiita API 取得エラー：${response.status}`)
        }

        // JSONに変換
        const data = await response.json()

        // 必要なプロパティをDetailProps型に整形
        const mapped: DetailProps = {
          id: data.id,
          title: data.title,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
          renderedBody: data.rendered_body,
          url: data.url,
          user: {
            id: data.user.id,
            name: data.user.name,
            icon: data.user.profile_image_url,
          },
        }

        // stateにセット
        setDetail(mapped)
      } catch (e) {
        // エラーをstateに保存
        setError(e instanceof Error ? e.message : "不明なエラー")
      } finally {
        // ローディング完了
        setLoading(false)
      }
    }

    fetchDetail()
  }, [])

  return { detail, loading, error }
}
