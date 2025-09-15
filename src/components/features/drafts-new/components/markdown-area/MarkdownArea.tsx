import { TabIcon } from "@/components/icons"
import { MARKDOWN_AREA } from "./MarkdownAreaItems"

export function MarkdownArea() {
  return (
    <>
      <div className="space-y-6">
        {MARKDOWN_AREA.map(item => (
          <div key={crypto.randomUUID()}>
            <p className="text-lg text-gray-600 font-bold">
              {item.title}
              <span className="inline-block ml-1 text-sm font-normal">
                <a
                  href={item.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex gap-2 items-center text-blue-700 hover:text-gray-700 duration-300">
                  {item.linkLabel}
                  <span className="flex-shrink-0">
                    <TabIcon size="sm" color="secondary" />
                  </span>
                </a>
              </span>
            </p>
            {item.children}
          </div>
        ))}
      </div>
    </>
  )
}
