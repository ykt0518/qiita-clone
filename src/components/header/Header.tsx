import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { SearchBox } from "../blocks"

export default function Header() {
  return (
    <header className="bg-white py-2 px-10 border-b border-gray-400">
      <div className="flex justify-between items-center">
        <div className="bg-green-500 py-0.5 px-4 rounded-sm">
          <Link to="/" className="text-2xl text-white font-bold">
            Qiita
          </Link>
        </div>
        <div className="flex items-center gap-2">
          {/* TODO: 検索機能 */}
          <SearchBox placeholder="記事、質問を検索" iconSize="sm" iconColor="gray" />
          <Button asChild variant="outline" className="border border-green-700 hover:opacity-90 duration-300">
            <Link to="/login" className="text-green-700 font-bold hover:text-green-700">
              ログイン
            </Link>
          </Button>
          <Button asChild className="bg-green-700 hover:bg-green-900 duration-300">
            <Link to="/signup" className="text-white font-bold">
              新規登録
            </Link>
          </Button>
        </div>
      </div>
      <nav className="mt-4">
        <ul className="flex items-center">
          <li>
            <Link
              to="/"
              className="relative inline-block py-0.5 px-4 text-gray-500 font-medium hover:text-gray-900 duration-300">
              トレンド
              <span className="block w-full h-0.5 bg-green-950 opacity-0 active:opacity-100"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/questions"
              className="relative inline-block py-0.5 px-4 text-gray-500 font-medium hover:text-gray-900 duration-300">
              質問
              <span className="block w-full h-0.5 bg-green-950 opacity-0 active:opacity-100"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/official-events"
              className="relative inline-block py-0.5 px-4 text-gray-500 font-medium hover:text-gray-900 duration-300">
              公式イベント
              <span className="block w-full h-0.5 bg-green-950 opacity-0 active:opacity-100"></span>
            </Link>
          </li>
          <li>
            <a
              href="/official-columns"
              target="_blank"
              className="relative inline-block py-0.5 px-4 text-gray-500 font-medium hover:text-gray-900 duration-300">
              公式コラム
              <span className="block w-full h-0.5 bg-green-950 opacity-0 active:opacity-100"></span>
            </a>
          </li>
          <li>
            <Link
              to="/organizations"
              className="relative inline-block py-0.5 px-4 text-gray-500 font-medium hover:text-gray-900 duration-300">
              Organization
              <span className="block w-full h-0.5 bg-green-950 opacity-0 active:opacity-100"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
