import { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"

export function useDraftsNew() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!title.trim() || !content.trim()) {
      setError("タイトルと本文は必須です。")
      return
    }

    try {
      setLoading(true)
      await addDoc(collection(db, "posts"), {
        title,
        content,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        authorId: "user_123",
      })

      setTitle("")
      setContent("")
    } catch (error) {
      console.error("投稿に失敗しました。", error)
      setError(error instanceof Error ? error.message : "投稿に失敗しました。")
    } finally {
      setLoading(false)
    }
  }

  return {
    title,
    setTitle,
    content,
    setContent,
    handleSubmit,
    loading,
    error,
  }
}
