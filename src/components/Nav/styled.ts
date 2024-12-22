import styled from "styled-components"

export const HeaderBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0 16px;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`
