import Typography from "../Typography/Typograpy"
import { SubmitButton } from "./styled"

interface ButtonProps {
  title: string
  onClick?: () => void
  disabled?: boolean
}

export default function Button({ title, disabled, onClick }: ButtonProps) {
  return (
    <SubmitButton onClick={disabled ? () => {} : onClick}>
      <Typography variant="body-r" color="white">
        {title}
      </Typography>
    </SubmitButton>
  )
}
