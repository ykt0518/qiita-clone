export type DetailProps = {
  id: string
  title: string
  createdAt: string
  updatedAt?: string
  renderedBody: string
  url: string
  user: {
    id: string
    icon: string
    name: string
  }
}
