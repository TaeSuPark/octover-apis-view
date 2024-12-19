import { VStack } from "../FlexBoxGroup"
import { InputContainer } from "./styled"

interface InputProps {
  value: string
  type?: string
  palceholder?: string
  width?: string
  onChange: (v: string) => void
}

export default function Input({
  value,
  type = "text",
  palceholder,
  width = "inherit",
  onChange,
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <InputContainer
      type={type}
      value={value}
      width={width}
      onChange={handleChange}
      placeholder={palceholder}
    />
  )
}
