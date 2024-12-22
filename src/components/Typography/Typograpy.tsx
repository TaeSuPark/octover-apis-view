import { VariantsType, ColorsType, SpacesType } from "@styles/mainTheme"
import { Span } from "./styled"

interface TypographyProps {
  variant: VariantsType
  color?: ColorsType
  textAlign?: string
  underLine?: boolean
  italic?: boolean
  pl?: SpacesType
  pr?: SpacesType
  ellipsis?: boolean
  noWrap?: boolean
  cursor?: string
  children: React.ReactNode
}

const Typography = ({
  variant,
  color = "black",
  textAlign = "left",
  underLine,
  italic,
  pl,
  pr,
  ellipsis,
  noWrap,
  cursor,
  children,
}: TypographyProps) => {
  return (
    <Span
      $variant={variant}
      $color={color}
      $textAlign={textAlign}
      $underLine={underLine}
      $italic={italic}
      pl={pl}
      pr={pr}
      ellipsis={ellipsis}
      noWrap={noWrap}
      cursor={cursor}
    >
      {children}
    </Span>
  )
}

export default Typography
