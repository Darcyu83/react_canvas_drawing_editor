import { ReactNode, useEffect, useRef, useState } from 'react'
import { CommBtn, CommOverlay } from '../../../../styles/commonStyled'
import { getPixelColor } from './utils'
import { IPaintEditorContextParams } from '../../../../context/paintEditorContext/types'

interface IProps {
  color?: string
  setColor?: IPaintEditorContextParams['setColorPicked']
  icon?: ReactNode
}

function PickerColorSpoide({ icon, color, setColor }: IProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const [isPicking, setIsPicking] = useState<boolean>(false)

  // const [{ x, y }, setXY] = useState({ x: 0, y: 0 })
  // const showMousePosition = (e: MouseEvent) => {
  //   console.log('showMousePosition ', e.clientX, e.clientY)

  //   setXY({ x: e.clientX, y: e.clientY })
  // }

  const onHandleMouseMove = async (e: MouseEvent) => {
    if (!isPicking) return

    console.log('isPicking ', isPicking)

    const canvas = canvasRef.current
    if (canvas) {
      const hexColor = getPixelColor(e.clientX, e.clientY, canvas)
      if (!!hexColor) setColor && setColor(hexColor)
    }
  }

  const onStartPicking = () => {
    setIsPicking(true)
  }

  // Stop picking
  const onStopPicking = () => {
    setIsPicking(false)
  }

  const debounceRef = useRef<number | null>()

  const debounceMouseMove = (e: MouseEvent) => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      console.log('debounceMouseMove')
      onHandleMouseMove(e)
      debounceRef.current = null
    }, 200)
  }
  // mousemove event
  useEffect(() => {
    if (isPicking) {
      document.addEventListener('mousemove', debounceMouseMove)
      // document.addEventListener('mousemove', showMousePosition)
    } else {
      document.removeEventListener('mousemove', debounceMouseMove)
      // document.removeEventListener('mousemove', showMousePosition)
    }

    return () => {
      document.removeEventListener('mousemove', debounceMouseMove)
    }
  }, [isPicking])

  // mouseup event
  useEffect(() => {
    // Stop picking on mouse up
    const onMouseUp = () => onStopPicking()
    window.addEventListener('mouseup', onMouseUp)

    return () => {
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <>
      <CommBtn onClick={onStartPicking}>{icon}</CommBtn>
      {/* <div
        key={'floating'}
        style={{
          width: 10,
          height: 10,
          position: 'absolute',
          backgroundColor: color,
          border: '1px solid white',
          left: x + 1,
          top: y + 1,
        }}
      >
        Picked Color: {color}
        <canvas
          ref={canvasRef}
          // width={1000}
          // height={1000}
          // style={{ display: 'none' }}
        />
      </div> */}
      {isPicking && (
        <CommOverlay
          ref={overlayRef}
          style={{
            // background: 'rgba(0,0,255, 0.1)',
            cursor: 'crosshair',
          }}
          onMouseDown={onStopPicking}
        />
      )}

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </>
  )
}

export default PickerColorSpoide
