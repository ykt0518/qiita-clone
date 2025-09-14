import { Button } from "@/components/ui/button"
import { Link } from "react-router"

export function RightMenuGuestActions() {
  return (
    <>
      <Button asChild variant="outline" className="border border-green-700 hover:opacity-90 duration-300">
        <Link to="/login" className="text-green-700 font-bold hover:text-green-700">
          ログイン
        </Link>
      </Button>
      <Button asChild className="bg-green-700 hover:bg-green-900 duration-300">
        <Link to="/signup" className="text-white font-bold">
          新規登録
        </Link>
      </Button>
    </>
  )
}
