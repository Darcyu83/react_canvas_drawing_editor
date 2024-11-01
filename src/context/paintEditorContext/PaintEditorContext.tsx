import { createContext, ReactNode, useContext, useMemo, useState } from 'react'
import { IPaintEditorContextParams, TEditorToolTypeDrawing } from './types'

interface IProps {
  children: ReactNode
}

const PaintEditorContext = createContext<IPaintEditorContextParams | null>(null)

export const usePaintEditorContext = () => useContext(PaintEditorContext)

// props drilling 방지 대비
function PaintEditorContextProvider({ children }: IProps) {
  const [colorPicked, setColorPicked] = useState<string>()
  const [toolTypeDrawing, setToolTypeDrawing] =
    useState<TEditorToolTypeDrawing>()

  const value = useMemo<IPaintEditorContextParams>(() => {
    const value =
      // : IPaintEditorContextParams
      {
        colorPicked,
        toolTypeDrawing,
        setColorPicked,
        setToolTypeDrawing,
      } as IPaintEditorContextParams
    return value
  }, [colorPicked, toolTypeDrawing])

  return (
    <PaintEditorContext.Provider value={value}>
      {children}
    </PaintEditorContext.Provider>
  )
}

export default PaintEditorContextProvider
