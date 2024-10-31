import { CommFlexColContainer } from '../../styles/commonStyled'
import EditorBtns from './components/EditorHeader/EditorBtns'

interface IProps {}

function PaintEditor(props: IProps) {
  return (
    <CommFlexColContainer
      justifyContent="start"
      padding={8}
      height={'100%'}
      checkArea
      style={{}}
    >
      <EditorBtns />
    </CommFlexColContainer>
  )
}

export default PaintEditor
