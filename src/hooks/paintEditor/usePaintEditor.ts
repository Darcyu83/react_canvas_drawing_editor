import { useCallback, useEffect, useState } from 'react'
import paintEditorInstance from './class/PaintEditorSingleton'
import { TEditorToolTypeDrawing } from '../../context/paintEditorContext/types'
import { IEditorState } from './types'

interface IProps {
  canvasId?: string
}

function usePaintEditor({ canvasId }: IProps = {}) {
  const _canvasId = canvasId ?? paintEditorInstance.getCanvasId()
  const currState = paintEditorInstance.getEditorStateByCanvasId(_canvasId)
  const [editorState, setEditorState] = useState(currState)

  const [colorPicked, setColorPicked] = useState<string>(currState.color)
  const [imgData, setImgData] = useState<string | undefined>(currState.imgData)
  const [toolTypeDrawing, setToolTypeDrawing] =
    useState<TEditorToolTypeDrawing>(currState.toolTypeDrawing)

  const saveEditorStatus = useCallback(() => {

    const newState: IEditorState = {
      index: currState.index + 1,
      color: colorPicked,
      toolTypeDrawing,
      imgData,
    }

    setEditorState((prev) => ({ ...prev, ...newState }))
    paintEditorInstance.setEditorStateWithCanvasIdAsKey(_canvasId, newState)
  }, [_canvasId, colorPicked, toolTypeDrawing, imgData])

  const onUndo = useCallback(() => {
    const newState = paintEditorInstance.setHistoryBackward(_canvasId)
    setEditorState(newState)
  }, [_canvasId])

  const onRedo = useCallback(() => {
    const newState = paintEditorInstance.setHistoryforward(_canvasId)
    setEditorState(newState)
  }, [_canvasId])

  // 펜 색상 드로잉 툴 값 변경시 스테이트 변경 + class 데이터 저장
  useEffect(() => {
    saveEditorStatus()
  }, [saveEditorStatus])

  useEffect(() => {
    return () => {}
  }, [])

  return {
    canvasId: _canvasId,
    editorState,
    setColorPicked,
    setImgData,
    setToolTypeDrawing,
    saveEditorStatus,
    onUndo,
    onRedo,
  }
}

export default usePaintEditor
