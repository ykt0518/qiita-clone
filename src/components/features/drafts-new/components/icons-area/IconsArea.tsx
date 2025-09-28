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
              { content: <ImageIcon size="sm" color="gray" /> },
              { content: <EmojiIcon size="sm" color="gray" /> },
              { content: <SearchIcon size="sm" color="gray" /> },
              { content: <CheckSheetIcon size="sm" color="gray" /> },
            ]}
          />
          <IconsList
            className="pl-3 flex gap-2 border-l border-gray-500"
            items={[
              { content: <QuestionIcon size="sm" color="gray" /> },
              { content: <LightBulbIcon size="sm" color="gray" /> },
              { content: <MaterialIcon size="sm" color="gray" /> },
            ]}
          />
          <IconsList
            className="pl-3 flex gap-2 border-l border-gray-500"
            items={[{ content: <p>スライドモード</p> }, { content: <p>同時スクロール</p> }]}
          />
        </div>
        <IconsList
          className="flex"
          items={[
            { content: <PencilIcon size="md" color="gray" /> },
            { content: <StopIcon size="md" color="gray" /> },
            { content: <EyeIcon size="md" color="gray" /> },
          ]}
        />
      </div>
    </>
  )
}
