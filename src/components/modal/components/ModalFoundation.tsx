import { ReactNode } from 'react'
import { ContentInvisibleContainer, OverlayContainer } from './styles'

interface IProps {
  onClose: () => void
  isOpen?: boolean
  children?: ReactNode
}

function ModalFoundation({ isOpen, onClose, children }: IProps) {
  return (
    <OverlayContainer style={{}} isOpen={isOpen} onClick={onClose}>
      <ContentInvisibleContainer isOpen={isOpen}>
        {children}
      </ContentInvisibleContainer>
    </OverlayContainer>
  )
}

export default ModalFoundation
