import EditorCanvas from './components/DrawingArea/EditorCanvas'
import EditorBtns from './components/EditorHeader/EditorBtns'
import { CommFlexColContainer, CommText } from '../../styles/commonStyled'
import usePaintEditor from '../../hooks/paintEditor/usePaintEditor'

interface IProps {
  savedCanvasId?: string // 로컬 또는 저장된 내용 불러올때
}

function PaintEditor({ savedCanvasId }: IProps) {
  // const editorCtx = usePaintEditorContext()

  const {
    canvasId,
    editorState, // : { color, toolTypeDrawing, imgData },

    setColorPicked,
    setImgData,
    setToolTypeDrawing,
    saveEditorStatus: _,
    onUndo,
    onRedo,
  } = usePaintEditor({
    canvasId: savedCanvasId,
  })

  return (
    <CommFlexColContainer
      justifyContent="start"
      padding={8}
      height={'100%'}
      gap={8}
    >
      <CommText>canvasId:: {canvasId}</CommText>
      <EditorBtns
        editorState={editorState}
        setColor={setColorPicked}
        setToolTypeDrawing={setToolTypeDrawing}
        onUndo={onUndo}
        onRedo={onRedo}
      />

      <EditorCanvas
        canvasId={canvasId}
        imgData={editorState.imgData}
        strokeColor={editorState.color}
        setImgData={setImgData}
      />
    </CommFlexColContainer>
  )
}

export default PaintEditor
