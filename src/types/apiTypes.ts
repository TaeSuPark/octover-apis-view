// Api 관련 타입 정리
export type PostLoginResponse = {
  errYn: string
  code: string
  msg: string
  data: { accessToken: string }
}

export type ApiType = {
  admUserId: string
  apiCd: string
  apiCdUid: string
  apiDesc: string
  apiLogStus: number
  apiNm: string
  changeAble: string
  cmnCdLginType: string
  cmnCdLginTypeNm: string
  kwrdCd: string
  kwrdNm: string
  mdulCustCd: string
  mdulNm: string
  prvr: string
  userApiStus: string
}

export type GetApiListResponse = {
  errYn: string
  code: string
  msg: string
  data: {
    list: ApiType[]
    totalCount: number
    totalPage: number
  }
}

export type getScrappingApiResponse = {
  errYn: string
  code: string
  msg: string
  data: any
}
