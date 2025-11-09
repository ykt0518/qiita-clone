import { useDraftsNew } from "@/components/features/drafts-new/hooks/use-drafts-new"

export function TextArea() {
  const { content, setContent } = useDraftsNew()

  return (
    <div className="mt-2 h-full">
      <textarea
        name="main-text"
        id="main-text"
        value={content}
        onChange={e => setContent(e.target.value)}
        className="w-full h-full focus:outline-0"
        placeholder="エンジニアに関わる知識をMarkdown記法で書いて共有しよう"
      />
    </div>
  )
}
