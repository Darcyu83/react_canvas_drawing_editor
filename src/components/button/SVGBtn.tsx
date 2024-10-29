import { CSSProperties, ReactNode } from 'react'
import { CommBtn } from '../../styles/commonStyled'

interface IProps {
  children: ReactNode
  iconColor?: CSSProperties['color']
  style?: CSSProperties
  onClick?: () => void
}

function SVGBtn({ children, iconColor, onClick, style }: IProps) {
  return (
    <CommBtn iconColor={iconColor} style={{ ...style }} onClick={onClick}>
      {children}
    </CommBtn>
  )
}

export default SVGBtn
