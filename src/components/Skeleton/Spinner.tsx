import styled from "styled-components"

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const SpinnerIcon = styled.div`
  width: 24px;
  height: 24px;
  border: 10px solid #5a5c61;
  border-top: 10px solid #1f2124;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerIcon />
    </SpinnerContainer>
  )
}
export default Spinner
