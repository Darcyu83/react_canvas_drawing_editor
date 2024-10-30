import { CSSProperties } from 'react'
import { CommBtn, CommText } from '../../styles/commonStyled'

interface IProps {
  label: string
  isSelected?: boolean
  onClick?: () => void
  style?: CSSProperties
}

function TextBtn({ label, onClick, style, isSelected }: IProps) {
  return (
    <CommBtn
      className={`border_outlined`}
      onClick={onClick}
      isSelected={isSelected}
      style={{ ...style }}
    >
      <CommText fontSize={18}>{label}</CommText>
    </CommBtn>
  )
}

export default TextBtn
