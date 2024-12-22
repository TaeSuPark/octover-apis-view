import Nav from "@src/components/Nav/Nav"
import { useTokenStore } from "@src/stores/useStores"
import ApiListView from "@src/views/ApiListView"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function List() {
  const router = useRouter()

  const { accessToken } = useTokenStore((state) => state)

  useEffect(() => {
    if (accessToken === "" || accessToken === null) {
      router.push("/login")
    }
  }, [accessToken])

  return (
    <>
      <Nav pageKey={0} />
      <ApiListView />
    </>
  )
}
