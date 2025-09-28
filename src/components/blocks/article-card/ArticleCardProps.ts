export type ArticleCardProps = {
  id: string
  title: string
  createdAt: string
  updatedAt?: string
  user: UserProps
}

export type UserProps = {
  id: string
  name: string
  icon: string
}
