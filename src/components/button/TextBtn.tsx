import { CSSProperties } from 'react'
import { CommBtn } from '../../styles/commonStyled'

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
      {label}
    </CommBtn>
  )
}

export default TextBtn
