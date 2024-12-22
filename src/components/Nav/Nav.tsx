import { useRouter } from "next/router"
import { HStack, VStack } from "../FlexBoxGroup"
import Typography from "../Typography/Typograpy"
import { HeaderBar } from "./styled"
import { useTokenStore } from "@src/stores/useStores"

interface HeaderProps {
  pageKey: number
}

export default function Nav({ pageKey }: HeaderProps) {
  const router = useRouter()

  const { accessToken, initAccessToken } = useTokenStore((state) => state)

  return (
    <HeaderBar>
      <Typography variant="subtitle-m" color="primary">
        dozn task
      </Typography>

      <HStack gap={32} alignItems="center" pr={64}>
        <VStack
          onClick={() => {
            router.push("/list")
          }}
        >
          <Typography
            variant="body-m"
            color={pageKey === 0 ? "black" : "darkGray"}
            cursor="pointer"
          >
            API 목록
          </Typography>
        </VStack>
        <VStack
          onClick={() => {
            router.push("/history")
          }}
        >
          <Typography
            variant="body-m"
            color={pageKey === 1 ? "black" : "darkGray"}
            cursor="pointer"
          >
            API 사용 내역
          </Typography>
        </VStack>
        <VStack
          onClick={() => {
            initAccessToken()
            router.push("/login")
          }}
        >
          <Typography variant="body-m" color="error" cursor="pointer">
            로그아웃
          </Typography>
        </VStack>
      </HStack>
    </HeaderBar>
  )
}
