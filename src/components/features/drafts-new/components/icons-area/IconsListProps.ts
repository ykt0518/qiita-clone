export type IconItem = {
  content: React.ReactNode
  onClick?: () => void
}

export type IconListProps = {
  className?: string
  items: IconItem[]
}
