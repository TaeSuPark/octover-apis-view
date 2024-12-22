import Nav from "@src/components/Nav/Nav"
import { useTokenStore } from "@src/stores/useStores"
import HistoryView from "@src/views/HistoryView"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function History() {
  const router = useRouter()

  const { accessToken } = useTokenStore((state) => state)

  useEffect(() => {
    if (accessToken === "" || accessToken === null) {
      router.push("/login")
    }
  }, [accessToken])
  return (
    <>
      <Nav pageKey={1} />
      <HistoryView />
    </>
  )
}
