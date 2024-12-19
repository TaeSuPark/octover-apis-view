import axios from "axios"

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
