export type IconItem = {
  content: React.ReactNode
  onClick?: () => void
  tooltip?: string
  isActive?: boolean
  className?: string
}

export type IconListProps = {
  className?: string
  items: IconItem[]
}
