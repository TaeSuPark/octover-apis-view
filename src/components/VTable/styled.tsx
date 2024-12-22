import styled from "styled-components"
import { ColorsType } from "@styles/mainTheme"

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
`

export const TableRow = styled.tr`
  // cursor: pointer;
`
export const TableCellContainer = styled.td<{
  color: ColorsType
  width?: string
  textAlign?: string
}>`
  padding: 8px;
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-top: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-right: 1px solid ${({ theme }) => theme.colors.darkGray};
  width: ${({ width }) => width};
  text-align: ${({ textAlign }) => textAlign};
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`
export const TableHeaderContainer = styled.th<{
  color: ColorsType
  width?: string
}>`
  padding: 8px;
  width: ${({ width }) => width};
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-bottom: 6px solid ${({ theme }) => theme.colors.darkGray};
  border-right: 1px solid ${({ theme }) => theme.colors.darkGray};
`
