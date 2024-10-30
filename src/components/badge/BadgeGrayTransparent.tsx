import { CSSProperties, ReactNode } from 'react'
import { BadgeWrapper } from './styles'

interface IProps {
  style?: CSSProperties
  children: ReactNode
}

function BadgeGrayTransparent({ style, children }: IProps) {
  return (
    <BadgeWrapper className="hover_icon" style={style}>
      {children}
    </BadgeWrapper>
  )
}

export default BadgeGrayTransparent
