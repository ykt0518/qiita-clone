export type FooterNavigationProps = {
  title: string
  items: FooterNavigationItemProps[]
}

export type FooterNavigationItemProps = {
  icon?: React.ReactNode
  label: string
  href?: string
  to?: string
  external: boolean
}
