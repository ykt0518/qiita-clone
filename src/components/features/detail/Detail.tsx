import { useParams } from "react-router"
import { useDetail } from "./hooks/use-detail"

export function Detail() {
  const { id } = useParams<{ id: string }>()
  const { detail, loading, error } = useDetail(id ?? "")

  if (!id) return <p>記事IDが指定されていません</p>
  if (loading) return <p>読み込み中…</p>
  if (error) return <p>エラー：{error}</p>
  if (!detail) return <p>記事が見つかりません</p>

  return (
    <section className="bg-white py-8 px-14 rounded-xl">
      <div className="flex">
        <span className="block w-8 h-8 rounded-full overflow-hidden">
          <img src={detail.user.icon} alt={detail.user.name} width={32} height={32} />
        </span>
        <p className="font-bold">{detail.user.name}</p>
      </div>
      <h2 className="mt-2 text-xl font-bold">{detail.title}</h2>
      <p className="mt-2 text-xs text-[rgba(0,0,0,0.6)]">
        <time dateTime={detail.updatedAt ?? detail.createdAt}>
          {detail.updatedAt
            ? `更新日：${new Date(detail.updatedAt).toLocaleDateString("ja-JP")}`
            : `作成日：${new Date(detail.createdAt).toLocaleDateString("ja-JP")}`}
        </time>
      </p>
      <div className="mt-12" dangerouslySetInnerHTML={{ __html: detail.renderedBody }} />
    </section>
  )
}
