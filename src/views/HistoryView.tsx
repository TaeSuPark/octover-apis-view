import { HStack, VStack } from "@components/FlexBoxGroup"
import Typography from "@src/components/Typography/Typograpy"
import Card from "@src/components/Card/Card"
import { use, useEffect, useState } from "react"
import { ApiType } from "@src/types/apiTypes"
import IcArrowDown from "@assets/svgs/ic_arrow_down.svg"
import IcArrowUp from "@assets/svgs/ic_arrow_up.svg"

export default function HistoryView() {
  const [history, setHistory] = useState<
    (ApiType & { marked: boolean; result: string; time: string })[]
  >([])

  // bookmark 아이콘 클릭 시 해당 history의 marked를 변경, 정렬
  const handleMarking = (idx: number) => {
    const newHistory = [...history]
    newHistory[idx].marked = !newHistory[idx].marked
    setHistory(
      newHistory.sort((a, b) => (a.marked ? -1 : 1 || a.time < b.time ? 1 : 0))
    )
    localStorage.setItem("history", JSON.stringify(newHistory))
  }

  // 현재 동작하지 않음 (원인 파악 필요)
  const orderHistory = (current: "asc" | "des") => {
    const newHistory = [...history]
    if (current === "asc") {
      console.log("asc")
      setHistory(
        newHistory.sort((a, b) =>
          a.marked ? -1 : 1 || a.time < b.time ? 1 : 0
        )
      )
    }
    if (current === "des") {
      console.log("des")
      setHistory(
        newHistory.sort((a, b) =>
          a.marked ? -1 : 1 || a.time > b.time ? 1 : 0
        )
      )
    }
    localStorage.setItem("history", JSON.stringify(newHistory))
  }

  // localStorage에 저장된 history를 불러와서 history state에 저장
  useEffect(() => {
    setHistory(
      JSON.parse(
        localStorage.getItem("history")
          ? (localStorage.getItem("history") as string)
          : "[]"
      )
    )
  }, [])

  return (
    <VStack bg="tertiary" width="100vw" height="100vh">
      <VStack p="64px" gap={16}>
        <HStack gap={8}>
          <Typography variant="body-m">정렬하기</Typography>
          <HStack>
            <VStack onClick={() => orderHistory("asc")}>
              <IcArrowUp />
            </VStack>
            <VStack onClick={() => orderHistory("des")}>
              <IcArrowDown />
            </VStack>
          </HStack>
        </HStack>
        {history.map((data, idx) => (
          <Card
            width="90vw"
            height="max-content"
            title={data.mdulNm}
            key={idx}
            onMarking={() => handleMarking(idx)}
            marked={data.marked}
          >
            <VStack p="12px" gap={8}>
              <HStack gap={8} justifyContent="space-between">
                <Typography variant="body-m">호출시간</Typography>
                <Typography variant="body-r">{data.time}</Typography>
              </HStack>
              <HStack gap={8} justifyContent="space-between">
                <Typography variant="body-m">API 코드</Typography>
                <Typography variant="body-r">{data.apiCd}</Typography>
              </HStack>
              <HStack gap={8} justifyContent="space-between">
                <Typography variant="body-m">모듈 코드</Typography>
                <Typography variant="body-r">{data.mdulCustCd}</Typography>
              </HStack>
              <HStack gap={8} justifyContent="space-between">
                <Typography variant="body-m">모듈 이름</Typography>
                <Typography variant="body-r">{data.mdulNm}</Typography>
              </HStack>
            </VStack>
          </Card>
        ))}
      </VStack>
    </VStack>
  )
}
