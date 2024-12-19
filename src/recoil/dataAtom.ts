import { atom } from "recoil"

export const loginTokenState = atom<string>({
  key: "loginToken",
  default: "",
})
