import { TEditorToolTypeDrawing } from '../../context/paintEditorContext/types'

export interface IEditorState {
  index: number
  color: string
  toolTypeDrawing: TEditorToolTypeDrawing
  imgData?: string
}

export interface IEditorStateHistory {
  past: IEditorState[]
  current: IEditorState | undefined
  future: IEditorState[]
}
