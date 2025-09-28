import { SearchIcon } from "@/components/icons"
import type { SearchBoxProps } from "./SearchBoxProps"
import { useState } from "react"
import { useNavigate } from "react-router"

export function SearchBox({ placeholder, iconSize, iconColor }: SearchBoxProps) {
  // 検索キーワードを管理するstate
  const [query, setQuery] = useState("")
  // ページ遷移用関数
  const navigate = useNavigate()

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // ブラウザのデフォルト動作を防止
    e.preventDefault()
    // 入力が空文字やスペースだけじゃないかチェック
    // ※trim()は文字列の前後の空白を取り除いた結果、空文字でなければtrue、空文字ならfalseとなる
    if (query.trim()) {
      // /searchページへクエリパラメータを付与して遷移
      navigate(`/search?q=${encodeURIComponent(query)}`)
    }
    // 入力欄をリセット
    setQuery("")
  }

  return (
    <form className="mr-4" onSubmit={handleSubmit}>
      <div className="py-1 px-2 flex items-center gap-2 rounded-md focus-within:ring-2 focus-within:ring-black">
        <SearchIcon size={iconSize} color={iconColor} />
        <input
          type="text"
          placeholder={placeholder}
          className="outline-none"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
    </form>
  )
}
