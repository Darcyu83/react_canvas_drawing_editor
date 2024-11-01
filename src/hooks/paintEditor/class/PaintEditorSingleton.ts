import { palette } from '../../../styles/palette'
import { IEditorState, IEditorStateHistory } from '../types'

export const initialStateOfIEditorState: IEditorState = {
  index: 0,
  color: palette.red,
  toolTypeDrawing: 'pen',
  imgData: undefined,
}

const initialStateOfIEditorStateHis: IEditorStateHistory = {
  past: [],
  current: undefined,
  future: [],
}

class PaintEditorSingleton {
  private static instance: PaintEditorSingleton | null = null

  private canvasIds: Set<number> = new Set()
  private editorStatesHistory: Map<string, IEditorStateHistory> = new Map()

  private constructor() {}

  public static getInstance(): PaintEditorSingleton {
    if (!PaintEditorSingleton.instance) {
      PaintEditorSingleton.instance = new PaintEditorSingleton()
    }
    return PaintEditorSingleton.instance
  }

  // 캔버스 아이디 : e.g. canvas_{number}
  public getCanvasId(): string {
    return `canvas_${this.canvasIds.size < 1 ? 0 : this.canvasIds.size - 1}`
  }

  // 현재 스테이트 반환
  public getEditorStateByCanvasId(canvasId: string): IEditorState {
    return (
      this.editorStatesHistory.get(canvasId)?.current ??
      initialStateOfIEditorState
    )
  }

  // 새로운 스테이트
  public setEditorStateWithCanvasIdAsKey(
    canvasId: string,
    newState: IEditorState
  ): void {
    const prevHistory = this.editorStatesHistory.get(canvasId)

    console.log('history ==== ', newState, prevHistory)

    const history: IEditorStateHistory = {
      ...(prevHistory ? prevHistory : initialStateOfIEditorStateHis),
    }

    if (history.current) history.past.push(history.current)
    history.current = newState
    history.future = [] // 새로운 입력값있으면 앞으로 가기 히스토리 초기화
    this.editorStatesHistory.set(canvasId, history)
  }

  // 뒤로가기
  public setHistoryBackward(canvasId: string) {
    const history = this.editorStatesHistory.get(canvasId)
    if (!history || history.past.length < 1 || !history.current)
      return initialStateOfIEditorState
    history.future.push(history.current)
    history.current = history.past.pop()
    this.editorStatesHistory.set(canvasId, history)

    console.log(
      'class setHistoryBackward',
      this.getEditorStateByCanvasId(canvasId)
    )
    return this.getEditorStateByCanvasId(canvasId)
  }

  // 앞으로 가기
  public setHistoryforward(canvasId: string) {
    const history = this.editorStatesHistory.get(canvasId)
    if (!history || history.future.length < 1 || !history.current)
      return initialStateOfIEditorState
    history.past.push(history.current)
    history.current = history.future.pop()
    this.editorStatesHistory.set(canvasId, history)

    console.log(
      'class setHistoryforward',
      this.getEditorStateByCanvasId(canvasId)
    )
    return this.getEditorStateByCanvasId(canvasId)
  }

  // 에디터 결과물 저장됨 or 새로만들기
  public setEditDone(canvasId: string) {
    if (!this.editorStatesHistory.get(canvasId)) return
    this.editorStatesHistory.delete(canvasId)
  }
}

const paintEditorInstance = PaintEditorSingleton.getInstance()

export default paintEditorInstance
