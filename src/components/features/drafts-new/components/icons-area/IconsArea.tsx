import {
  CheckSheetIcon,
  EmojiIcon,
  EyeIcon,
  ImageIcon,
  LightBulbIcon,
  MaterialIcon,
  PencilIcon,
  QuestionIcon,
  SearchIcon,
  StopIcon,
} from "@/components/icons"
import { IconsList } from "./IconsList"
import { Switch } from "@/components/ui/switch"

export function IconsArea() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <p className="">
            <button type="button" className="py-1 px-1.5 text-lg font-bold border-b-2 border-green-800 cursor-pointer">
              本文
            </button>
          </p>
          <IconsList
            className="pl-3 flex gap-2 border-l border-gray-500"
            items={[
              { content: <ImageIcon size="sm" color="gray" />, tooltip: "画像を挿入する" },
              { content: <EmojiIcon size="sm" color="gray" />, tooltip: "絵文字を挿入する" },
              { content: <SearchIcon size="sm" color="gray" />, tooltip: "テキストエリア内を検索" },
              { content: <CheckSheetIcon size="sm" color="gray" />, tooltip: "文章修正提案機能の設定" },
            ]}
          />
          <IconsList
            className="pl-3 flex gap-2 border-l border-gray-500"
            items={[
              { content: <QuestionIcon size="sm" color="gray" />, tooltip: "Markdown記法チートシート" },
              { content: <LightBulbIcon size="sm" color="gray" />, tooltip: "良い記事を書くには" },
              { content: <MaterialIcon size="sm" color="gray" />, tooltip: "Qiitaで埋め込み可能なコンテンツ一覧" },
            ]}
          />
          <IconsList
            className="pl-3 flex gap-2 border-l border-gray-500"
            items={[
              {
                content: (
                  <div className="flex items-center gap-0.5">
                    <Switch />
                    <p>スライドモード</p>
                  </div>
                ),
              },
              {
                content: (
                  <div className="flex items-center gap-0.5">
                    <Switch />
                    <p>同時スクロール</p>
                  </div>
                ),
              },
            ]}
          />
        </div>
        <IconsList
          className="flex gap-1"
          items={[
            { content: <PencilIcon size="md" color="gray" />, tooltip: "エディタのみ" },
            { content: <StopIcon size="md" color="gray" />, tooltip: "エディタとプレビュー" },
            { content: <EyeIcon size="md" color="gray" />, tooltip: "エディタとプレビューが表示されています" },
          ]}
        />
      </div>
    </>
  )
}
