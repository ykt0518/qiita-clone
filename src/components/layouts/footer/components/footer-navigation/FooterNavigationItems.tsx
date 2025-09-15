import { XIcon } from "@/components/icons"
import type { FooterNavigationProps } from "./FooterNavigationProps"

export const FOOTER_NAVIGATION: FooterNavigationProps[] = [
  {
    title: "ガイドとヘルプ",
    items: [
      { label: "About", to: "/about", external: false },
      { label: "利用規約", to: "/terms", external: false },
      { label: "プライバシーポリシー", to: "/privacy", external: false },
      { label: "ガイドライン", href: "https://help.qiita.com/ja/articles/qiita-community-guideline", external: true },
      { label: "メディアキット", href: "https://help.qiita.com/ja/articles/others-brand-guideline", external: true },
      {
        label: "ご意見・ご要望",
        href: "https://github.com/increments/qiita-discussions/discussions/116",
        external: true,
      },
      {
        label: "ヘルプ",
        href: "https://help.qiita.com/",
        external: true,
      },
      {
        label: "広告掲載",
        href: "https://business.qiita.com/?utm_source=qiita&utm_medium=referral&utm_content=footer",
        external: true,
      },
    ],
  },
  {
    title: "コンテンツ",
    items: [
      { label: "リリースノート", to: "/release-notes", external: false },
      { label: "公式イベント", to: "/official-events", external: false },
      { label: "コラム", to: "/official-columns", external: false },
      { label: "アドベントカレンダー", to: "/advent-calendar/2024", external: false },
      { label: "Qiita Tech Festa", to: "/tech-festa/2025", external: false },
      { label: "Qiita 表彰プログラム", to: "/qiita-award", external: false },
      { label: "エンジニア白書", to: "/white_papers/2024", external: false },
      { label: "API", to: "/api/v2/docs", external: false },
    ],
  },
  {
    title: "公式アカウント",
    items: [
      {
        icon: <XIcon size="xs" color="white" />,
        label: "Qiita（キータ）公式",
        href: "https://x.com/qiita",
        external: true,
      },
      {
        icon: <XIcon size="xs" color="white" />,
        label: "Qiita マイルストーン",
        href: "https://x.com/qiita_milestone",
        external: true,
      },
      {
        icon: <XIcon size="xs" color="white" />,
        label: "Qiita 人気の投稿",
        href: "https://x.com/qiitapoi",
        external: true,
      },
      { label: "Facebook", href: "https://www.facebook.com/qiita/", external: true },
      { label: "YouTube", href: "https://www.youtube.com/@qiita5366", external: true },
      { label: "ポッドキャスト", href: "https://open.spotify.com/show/4E7yCLeCLeQUsNqM4HXFXA", external: true },
    ],
  },
  {
    title: "Qiita 関連サービス",
    items: [
      { label: "Qiita Team", href: "https://teams.qiita.com/", external: true },
      {
        label: "Qiita Zine",
        href: "https://qiita.com/official-columns/?utm_source=qiita&utm_medium=referral&utm_content=footer",
        external: true,
      },
      { label: "Qiita 公式ショップ", href: "https://suzuri.jp/qiita", external: true },
    ],
  },
  {
    title: "運営",
    items: [
      { label: "運営会社", href: "https://corp.qiita.com/company/", external: true },
      {
        label: "採用情報",
        href: "https://corp.qiita.com/jobs/",
        external: true,
      },
      { label: "Qiita Blog", href: "https://blog.qiita.com/", external: true },
      { label: "ニュースリリース", href: "https://corp.qiita.com/releases/", external: true },
    ],
  },
]
