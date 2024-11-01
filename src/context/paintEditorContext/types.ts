export type TEditorToolTypeDrawing = 'pen' | 'eraser' | 'square' | 'circle'

export interface IPaintEditorContextParams {
  colorPicked: string
  toolTypeDrawing: TEditorToolTypeDrawing
  setColorPicked: React.Dispatch<React.SetStateAction<string>>
  setToolTypeDrawing: React.Dispatch<
    React.SetStateAction<TEditorToolTypeDrawing>
  >
}
