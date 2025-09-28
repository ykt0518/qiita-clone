import { IconsArea } from "./components/icons-area/IconsArea"
import { MarkdownArea } from "./components/markdown-area/MarkdownArea"
import { TextArea } from "./components/text-area/TextArea"
import { TitleArea } from "./components/title-area/TitleArea"

export function DraftsNew() {
  return (
    <>
      <form action="">
        <TitleArea />
        <IconsArea />
        <div className="flex">
          <div className="w-1/2 p-4 pl-0">
            <TextArea />
          </div>
          <div className="w-1/2 p-4 border-l border-gray-300">
            <MarkdownArea />
          </div>
        </div>
      </form>
    </>
  )
}
