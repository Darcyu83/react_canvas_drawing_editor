import PaintEditor from '../../components/editor/PaintEditor'
import PaintEditorContextProvider from '../../context/paintEditorContext/PaintEditorContext'
import { CommFlexRowContainer } from '../../styles/commonStyled'

interface IProps {}

function Drawing(props: IProps) {
  return (
    <PaintEditorContextProvider>

      <CommFlexRowContainer height={'100%'}>
        <PaintEditor />
      </CommFlexRowContainer>
    </PaintEditorContextProvider>
  )
}

export default Drawing
