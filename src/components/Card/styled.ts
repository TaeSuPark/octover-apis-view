import styled from "styled-components"

export const CardContainer = styled.div<{ width?: string; height?: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
`
