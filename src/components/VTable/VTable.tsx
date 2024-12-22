import { TableContainer, TableRow } from "./styled"
import TableHeader from "./TableHeader"
import Typography from "../Typography/Typograpy"
import InnerRow, { KeyLabelType } from "./InnerRow"
import { VStack } from "../FlexBoxGroup"

interface VTableProps<T> {
  columns: KeyLabelType[][]
  data: T[]
  onRowClick?: (row: T) => void
}

// 테이블 컴포넌트 작성
// 어떤 타입의 데이터를 받아도 해당 데이터의 키값으로 컬럼을 지정하기 위해 제네릭타입 사용
// 공통으로 테이블을 사용하기 위해 API 동작은 바깥으로 빼놓음
const VTable = <T extends object>({
  columns,
  data,
  onRowClick,
}: VTableProps<T>) => {
  return (
    <VStack gap={32}>
      <TableContainer>
        <thead>
          <TableRow>
            {columns[0].map((column) => (
              <TableHeader key={column.key} width={`${column.ratio}%`}>
                <Typography variant="body-b">{column.label}</Typography>
              </TableHeader>
            ))}
            <TableHeader width={`${10}%`}>
              <></>
            </TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <InnerRow
              key={index}
              columns={columns[0]}
              rowData={row}
              onRowClick={onRowClick}
            />
          ))}
        </tbody>
      </TableContainer>
    </VStack>
  )
}

export default VTable
