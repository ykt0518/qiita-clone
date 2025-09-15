export type FooterNavigationProps = {
  title: string
  items: FooterNavigationItemProps[]
}

export type FooterNavigationItemProps = {
  label: string
  href?: string
  to?: string
  external: boolean
}
