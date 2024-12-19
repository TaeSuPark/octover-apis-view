import { useCallback } from "react"
import { useRouter } from "next/router"

const useApiErrorHandler = () => {
  const router = useRouter()
  const handleErrors = useCallback((error: any) => {
    const status = error.response.status
    // const message = error.response.data.message
    console.log("error", error)
    router.push("/error")
  }, [])
  return { handleErrors }
}

export default useApiErrorHandler
