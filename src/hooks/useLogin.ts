import { postLoginInfo } from "@src/apis/octoverApi"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

export default function useLogin() {
  const [id, setId] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const { mutate, isPending, isError } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => postLoginInfo({ id, password }),
    onSuccess: (data) => {
      setId("")
      setPassword("")
    },
  })

  const handleIdChange = (v: string) => {
    setId(v)
  }

  const handlePasswordChange = (v: string) => {
    setPassword(v)
  }

  return {
    id,
    password,
    loginMutate: mutate,
    handleIdChange,
    handlePasswordChange,
  }
}
