import { useDraftsNew } from "@/components/features/drafts-new/hooks/use-drafts-new"

export function TitleArea() {
  const { title, setTitle } = useDraftsNew()

  return (
    <>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="タイトルを入力してください"
        className="w-full py-1 px-3 text-2xl font-bold focus:outline-0"
      />
      {/* TODO: タグを追加 */}
    </>
  )
}
