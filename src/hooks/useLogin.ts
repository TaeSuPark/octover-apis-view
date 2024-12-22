import { postLoginInfo } from "@src/apis/octoverApi"
import { useTokenStore } from "@src/stores/useStores"
import { PostLoginResponse } from "@src/types/apiTypes"

import { setCookie } from "cookies-next"
import { useRouter } from "next/router"
import { useState } from "react"
import { useMutation } from "react-query"

export default function useLogin() {
  const router = useRouter()
  const { accessToken, initAccessToken, setAccessToken } = useTokenStore(
    (state) => state
  )
  const [id, setId] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const { mutate, isError, isLoading } = useMutation<PostLoginResponse>(
    ["login"],
    () => postLoginInfo({ id, password }),
    {
      onSuccess: (data) => {
        setId("")
        setPassword("")
        setAccessToken(data.data.accessToken)
        setCookie("accessToken", data.data.accessToken)
        router.push("/list")
      },
      onError: () => {
        setId("")
        setPassword("")
        initAccessToken()
        console.log("login error")
      },
    }
  )

  const handleIdChange = (v: string) => {
    setId(v)
  }

  const handlePasswordChange = (v: string) => {
    setPassword(v)
  }

  const loginMutate = async () => {
    if (isLoading) return
    await mutate()
  }

  return {
    id,
    password,
    loginMutate: loginMutate,
    handleIdChange,
    handlePasswordChange,
  }
}
