import { ColorsType } from "@styles/mainTheme"
import { TableHeaderContainer } from "./styled"

interface TableHeaderProps {
  children: React.ReactNode
  color?: ColorsType
  width?: string
}

const TableHeader = ({
  children,
  color = "white",
  width,
}: TableHeaderProps) => {
  return (
    <TableHeaderContainer color={color} width={width}>
      {children}
    </TableHeaderContainer>
  )
}

export default TableHeader
