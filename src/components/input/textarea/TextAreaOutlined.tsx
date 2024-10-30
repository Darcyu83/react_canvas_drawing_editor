import { CSSProperties, ReactNode } from 'react'
import { CommFlexColContainer } from '../../../styles/commonStyled'

interface IProps {
  height?: CSSProperties['height']
  children?: ReactNode
  style?: CSSProperties
  textareaStyle?: CSSProperties
  placeholder?: string
  value?: string
}

const TEXTAREA_HEIGHT = 100
function TextAreaOutlined({
  height = TEXTAREA_HEIGHT,
  children,
  style,
  textareaStyle,
  placeholder = '내용을 입력하세요.',
  value,
}: IProps) {
  return (
    <CommFlexColContainer
      className={'border_outlined'}
      padding={4}
      width={'100%'}
      gap={'0.5rem'}
      style={style}
    >
      <textarea
        value={value}
        placeholder={placeholder}
        style={{
          width: '100%',
          height,

          ...textareaStyle,
        }}
        minLength={10}
      />

      {children}
    </CommFlexColContainer>
  )
}

export default TextAreaOutlined
