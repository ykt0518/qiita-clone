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
          <ul className="pl-3 flex gap-2 border-l border-gray-500">
            <li>
              <button type="button" className="p-1 cursor-pointer">
                <ImageIcon size="sm" color="gray" />
              </button>
            </li>
            <li>
              <button type="button" className="p-1 cursor-pointer">
                <EmojiIcon size="sm" color="gray" />
              </button>
            </li>
            <li>
              <button type="button" className="p-1 cursor-pointer">
                <SearchIcon size="sm" color="gray" />
              </button>
            </li>
            <li>
              <button type="button" className="p-1 cursor-pointer">
                <CheckSheetIcon size="sm" color="gray" />
              </button>
            </li>
          </ul>
          <ul className="pl-3 flex gap-2 border-l border-gray-500">
            <li>
              <button type="button" className="p-1 cursor-pointer">
                <QuestionIcon size="sm" color="gray" />
              </button>
            </li>
            <li>
              <button type="button" className="p-1 cursor-pointer">
                <LightBulbIcon size="sm" color="gray" />
              </button>
            </li>
            <li>
              <button type="button" className="p-1 cursor-pointer">
                <MaterialIcon size="sm" color="gray" />
              </button>
            </li>
          </ul>
          <ul className="pl-3 flex gap-2 border-l border-gray-500">
            <li>スライドモード</li>
            <li>同時スクロール</li>
          </ul>
        </div>
        <ul className="flex">
          <li>
            <button type="button" className="p-1.5 cursor-pointer">
              <PencilIcon size="md" color="gray" />
            </button>
          </li>
          <li>
            <button type="button" className="p-1.5 cursor-pointer">
              <StopIcon size="md" color="gray" />
            </button>
          </li>
          <li>
            <button type="button" className="p-1.5 cursor-pointer">
              <EyeIcon size="md" color="gray" />
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}
