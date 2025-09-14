import type { HeaderNavigationProps } from "./HeaderNavigationProps"

export const COMMON_NAVIGATION: HeaderNavigationProps[] = [
  { label: "トレンド", to: "/trend", external: false },
  { label: "質問", to: "/questions", external: false },
  { label: "公式イベント", to: "/official-events", external: false },
  { label: "公式コラム", href: "/official-columns", external: true },
  { label: "Organization", to: "/organizations", external: false },
]

export const AUTH_NAVIGATION: HeaderNavigationProps[] = [
  { label: "ホーム", to: "/", external: false },
  { label: "タイムライン", to: "/timeline", external: false },
]
