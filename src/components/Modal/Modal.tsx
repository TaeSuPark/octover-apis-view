import { HStack, VStack } from "../FlexBoxGroup"
import { ModalConatiner, ModalContentContainer } from "./styled"

interface Props {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ children, isOpen, onClose }: Props) => {
  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <ModalConatiner $isOpen={isOpen} onClick={onClose}>
      <ModalContentContainer onClick={onContentClick}>
        <VStack gap={16}>{children}</VStack>
      </ModalContentContainer>
    </ModalConatiner>
  )
}
export default Modal
