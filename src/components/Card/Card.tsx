import { HStack, VStack } from "../FlexBoxGroup"
import Typography from "../Typography/Typograpy"
import { CardContainer, CardHeader } from "./styled"
import IcBookmark from "@assets/svgs/ic_bookmark.svg"
import IcBookmarkDisable from "@assets/svgs/ic_bookmark_disable.svg"
interface CardProps {
  children: React.ReactNode
  title: string
  marked?: boolean
  width?: string
  height?: string
  onMarking?: () => void
}

export default function Card({
  width,
  height,
  title,
  marked,
  onMarking,
  children,
}: CardProps) {
  return (
    <CardContainer width={width} height={height}>
      <CardHeader>
        <Typography variant="subtitle-m">{title}</Typography>
        <VStack onClick={onMarking ? onMarking : () => {}}>
          {marked ? <IcBookmark /> : <IcBookmarkDisable />}
        </VStack>
      </CardHeader>
      {children}
    </CardContainer>
  )
}
