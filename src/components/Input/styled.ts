import styled from "styled-components"

export const InputContainer = styled.input`
  width: ${({ width }) => width};
  padding: ${({ theme }) => theme.spaces[16]};
  border-radius: ${({ theme }) => theme.spaces[10]};
  font-size: ${({ theme }) => theme.variants["body-r"].size};
  font-weight: ${({ theme }) => theme.variants["body-r"].weight};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  transition: background-color 0.3s;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`
