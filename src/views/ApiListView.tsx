import { Pagination, Skeleton } from "@mui/material"
import { getScrappingApi } from "@src/apis/octoverApi"
import { HStack, VStack } from "@src/components/FlexBoxGroup"
import Modal from "@src/components/Modal/Modal"
import Spinner from "@src/components/Skeleton/Spinner"
import VTable from "@src/components/VTable/VTable"
import useGetApiList from "@src/hooks/useGetApiList"
import { ApiType, getScrappingApiResponse } from "@src/types/apiTypes"
import router from "next/router"
import { useEffect, useState } from "react"
import { useMutation } from "react-query"

// 테이블 컬럼 정의
const columns = [
  {
    key: "apiNm",
    label: "API명",
    ratio: 15,
  },

  {
    key: "apiCd",
    label: "API코드",
    ratio: 8,
  },
  {
    key: "apiDesc",
    label: "API설명",
    ratio: 25,
  },
  {
    key: "mdulCustCd",
    label: "모듈코드",
    ratio: 8,
  },
  {
    key: "mdulNm",
    label: "모듈이름",
    ratio: 10,
  },
  {
    key: "kwrdCd",
    label: "키워드코드",
    ratio: 8,
  },
  {
    key: "kwrdNm",
    label: "키워드이름",
    ratio: 8,
  },
  {
    key: "prvr",
    label: "제공자",
    ratio: 8,
  },
]

// 현재 시간 반환 함수
const getCurrentTime = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

export default function ApiListView() {
  const [pageIdx, setPageIdx] = useState<number>(1)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrpResult, setScrpResult] = useState<any>()
  const [dataKey, setDataKey] = useState<ApiType>()

  // API 목록 조회 훅
  const { isLoading, response } = useGetApiList(pageIdx)

  // 스크래핑 API 호출
  const { mutate, isLoading: mLoading } = useMutation<getScrappingApiResponse>(
    ["scrapping", dataKey?.mdulCustCd, dataKey?.apiCd],
    () =>
      getScrappingApi({
        mdulCustCd: dataKey?.mdulCustCd,
        apiCd: dataKey?.apiCd,
      }),
    {
      onSuccess: (data) => {
        // 결과 저장 및 localStorage에 저장
        setScrpResult(data)
        typeof window !== "undefined" && localStorage.getItem("history")
          ? localStorage.setItem(
              "history",
              JSON.stringify(
                [
                  {
                    ...dataKey,
                    result: JSON.stringify(data),
                    marked: false,
                    time: getCurrentTime(),
                  },
                  ...JSON.parse(localStorage.getItem("history") as string),
                ].sort((a, b) => (a.marked ? -1 : 1 || a.time < b.time ? 1 : 0))
              )
            )
          : localStorage.setItem(
              "history",
              JSON.stringify([
                {
                  ...dataKey,
                  result: JSON.stringify(data),
                  marked: false,
                  time: getCurrentTime(),
                },
              ])
            )

        // 결과 모달 오픈
        setIsOpen(true)
      },
      onError: (e) => {
        router.push("/error")
      },
    }
  )

  const scrpMutate = () => {
    if (mLoading) return
    mutate()
  }

  const handlePageChange = (e: any) => {
    setPageIdx(parseInt(e.target.outerText))
  }

  const handleRowClick = (rowData: ApiType) => {
    setDataKey(rowData)
  }

  useEffect(() => {
    if (!dataKey) {
      return
    }

    if (dataKey.mdulCustCd !== "") {
      scrpMutate()
    }
  }, [dataKey])

  return (
    <VStack bg="tertiary" width="100vw" height="100vh" pt={32}>
      <VStack p="64px" gap={32} height="70vh" justifyContent="space-between">
        {isLoading ? (
          // 로딩 시 보여줄 화면 필요
          <Spinner />
        ) : (
          <>
            <VTable
              columns={[columns]}
              data={response ? response.list : []}
              onRowClick={handleRowClick}
            />
            <HStack gap={16} justifyContent="center">
              <Pagination
                count={response ? response.totalPage : 10}
                color="primary"
                onChange={handlePageChange}
              />
            </HStack>
          </>
        )}
      </VStack>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      >
        <>{JSON.stringify(scrpResult, null, 2)}</>
      </Modal>
    </VStack>
  )
}
