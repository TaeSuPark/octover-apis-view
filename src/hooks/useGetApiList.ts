import { getApiList } from "@src/apis/octoverApi"
import { ApiType, GetApiListResponse } from "@src/types/apiTypes"
import { useQuery } from "react-query"

export default function useGetApiList(pageIdx: number) {
  const { isLoading, data: response } = useQuery<
    GetApiListResponse,
    Error,
    { list: ApiType[]; totalCount: number; totalPage: number }
  >(["apiList", pageIdx], () => getApiList({ pageIdx: pageIdx }), {
    select: (data) => data.data,
  })

  return { isLoading, response }
}
