import styled from "styled-components"

export const SubmitButton = styled.button`
  width: 70%;
  padding: 12px 40px;
  font-size: 16px;
  color: #333333;
  background-color: #ffffff;
  border: 1.5px solid #ff6b6b;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f7f7f7;
    transform: scale(1.02);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`

export const CloseButton = styled.button`
  width: 30%;
  font-size: 16px;
  color: #333333;
  background-color: #ffffff;
  border: 1.5px solid #acacac;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #f7f7f7;
    transform: scale(1.02);
  }
`
