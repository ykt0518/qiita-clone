import { useEffect, useState } from "react"
import type { DetailProps } from "../DetailProps"

// Qiita APIのURL
const QIITA_API_ITEMS_URL = "https://qiita.com/api/v2/items"

export function useDetail(id: string) {
  const [detail, setDetail] = useState<DetailProps | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    async function fetchDetail() {
      try {
        const response = await fetch(`${QIITA_API_ITEMS_URL}/${id}`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_QIITA_TOKEN}`,
          },
        })

        if (!response.ok) {
          throw new Error(`Qiita API 取得エラー：${response.status}`)
        }

        const data = await response.json()

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

        setDetail(mapped)
      } catch (e) {
        setError(e instanceof Error ? e.message : "不明なエラー")
      } finally {
        setLoading(false)
      }
    }

    fetchDetail()
  }, [id])

  return { detail, loading, error }
}
