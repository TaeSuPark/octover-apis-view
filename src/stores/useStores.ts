import { ApiType } from "@src/types/apiTypes"
import { create } from "zustand"

// zustand를 통한 토큰 전역 상태 관리 (api 전송 시에 사용)
export const useTokenStore = create<{
  accessToken: string
  setAccessToken: (accessToken: string) => void
  initAccessToken: () => void
}>((set) => ({
  accessToken: "",
  setAccessToken: (accessToken: string) => set({ accessToken }),
  initAccessToken: () => set({ accessToken: "" }),
}))
