import axios from "axios"
import { getCookies } from "cookies-next/client"

export const postLoginInfo = async ({
  id,
  password,
}: {
  id: string
  password: string
}) => {
  const response = await axios({
    method: "POST",
    url: "/admin/api/recruit/login-check",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: {
      admUserId: id,
      userPw: password,
    },
  })

  return response.data
}

export const getApiList = async ({ pageIdx }: { pageIdx: number }) => {
  const cookies = getCookies()

  const response = await axios({
    method: "GET",
    url: "/admin/api/user/api/list",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${
        (cookies as { accessToken: string }).accessToken
      }`,
    },
    withCredentials: true,
    params: {
      pageSize: 10,
      pageIdx,
    },
  })

  return response.data
}

export const getScrappingApi = async ({
  mdulCustCd,
  apiCd,
}: {
  mdulCustCd?: string
  apiCd?: string
}) => {
  if (mdulCustCd === undefined || apiCd === undefined) {
    return
  }

  const cookies = getCookies()

  const response = await axios({
    method: "GET",
    url: "/admin/api/recruit/scrp-recruit",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${
        (cookies as { accessToken: string }).accessToken
      }`,
    },
    withCredentials: true,
    params: {
      mdulCustCd,
      apiCd,
    },
  })

  return response.data
}
