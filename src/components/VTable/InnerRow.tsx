import { TableRow } from "./styled"
import Typography from "../Typography/Typograpy"
import TableCell from "./TableCell"
import { HStack } from "../FlexBoxGroup"

export interface KeyLabelType {
  key: string
  label: string
  ratio?: number
}

interface InnerRowProps {
  columns: KeyLabelType[]
  rowData: any
  onRowClick?: (row: any) => void
}

const InnerRow = ({ columns, rowData, onRowClick }: InnerRowProps) => {
  return (
    <TableRow onClick={() => {}}>
      {columns.map((column, idx) => (
        <TableCell key={column.key}>
          <HStack gap={12}>
            <Typography variant="body-r">
              {(rowData as any)[column.key]}
            </Typography>
          </HStack>
        </TableCell>
      ))}
      <TableCell
        onClick={() => {
          onRowClick && onRowClick(rowData)
        }}
      >
        <HStack gap={12} justifyContent="center">
          <Typography variant="body-r" underLine>
            호출하기
          </Typography>
        </HStack>
      </TableCell>
    </TableRow>
  )
}

export default InnerRow
