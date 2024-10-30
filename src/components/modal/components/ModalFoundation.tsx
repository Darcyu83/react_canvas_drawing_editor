import { ReactNode } from 'react'
import { OverlayContainer } from './styles'
import { CommFlexRowContainer } from '../../../styles/commonStyled'

interface IProps {
  onClose: () => void
  isOpen?: boolean
  children?: ReactNode
}

function ModalFoundation({ isOpen, onClose, children }: IProps) {
  return (
    <OverlayContainer style={{}} isOpen={isOpen} onClick={onClose}>
      <CommFlexRowContainer
        width={'100%'}
        height={'100%'}
        justifyContent="center"
      >
        {children}
      </CommFlexRowContainer>
    </OverlayContainer>
  )
}

export default ModalFoundation
