import styled from "styled-components"

export const ModalConatiner = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  justify-content: center;
  align-items: center;
`

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20vw;
  min-height: 20vh;
  max-width: 80vw;
  max-height: 85vh;
  overflow-y: auto;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  background-color: ${({ theme }) => theme.colors.tertiary};
  z-index: 101;
  // &::-webkit-scrollbar {
  //   width: 20px;
  // }

  // &::-webkit-scrollbar-track {
  //   background-color: #252525;
  // }

  // &::-webkit-scrollbar-thumb {
  //   // background-color: #777777;
  //   background-color: hsla(0, 0%, 42%, 0.49);
  //   border-radius: 10px;
  //   border: 6px solid #252525;
  // }
`
