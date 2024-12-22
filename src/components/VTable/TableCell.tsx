import { ColorsType } from "@styles/mainTheme"
import { TableCellContainer } from "./styled"

interface TableCellProps {
  children: React.ReactNode
  width?: string
  color?: ColorsType
  onClick?: () => void
}

const TableCell = ({
  children,
  width,
  color = "white",
  onClick,
}: TableCellProps) => {
  return (
    <TableCellContainer
      color={color}
      width={width}
      textAlign={"left"}
      onClick={onClick}
    >
      {children}
    </TableCellContainer>
  )
}

export default TableCell
