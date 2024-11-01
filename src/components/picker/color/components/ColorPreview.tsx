import { PreviewContainer } from './styles'

interface IProps {
  color?: string
}

function ColorPreview({ color }: IProps) {
  return <PreviewContainer bgColor={color}></PreviewContainer>
}

export default ColorPreview
