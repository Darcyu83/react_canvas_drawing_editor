import { CSSProperties, useEffect, useRef } from 'react'
import useCanvas from '../../../../hooks/canvas/useCanvas'
import { CommFlexRowContainer } from '../../../../styles/commonStyled'
import { palette } from '../../../../styles/palette'

interface IProps {
  strokeColor?: CSSProperties['color']
  fillColor?: CSSProperties['color']
  canvasId: string
  imgData?: string
  setImgData: React.Dispatch<React.SetStateAction<string | undefined>>
}

function EditorCanvas({
  canvasId,
  strokeColor,
  fillColor,
  imgData,
  setImgData,
}: IProps) {
  const {
    canvasRef,
    getCanvasContext,
    startDrawing,
    stopDrawing,
    drawCanvasWithDataUrl,
    drawCanvasWithImage,
    drawLine,
    drawCircle,
    drawRectangle,
    resetCanvas,
    setStrokeColor,
  } = useCanvas({ strokeColor, fillColor })

  const onHandleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left // Get mouse X relative to canvas
    const y = e.clientY - rect.top // Get mouse Y relative to canvas

    startDrawing(x, y)
    e.preventDefault()
  }

  const onHandleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    drawLine(x, y)
  }

  const onHandleMouseUp = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    setImgData(canvas.toDataURL())
    stopDrawing()
  }

  // 이미지 데이터가 다른경우 캔버스 다시 드로잉
  useEffect(() => {
    const canvas = canvasRef.current
    const currentImgData = canvas?.toDataURL()

    
    const upodateCanvas = async () => {
      if (!!imgData && currentImgData !== imgData) {
        // if (imgData) {
        drawCanvasWithDataUrl(imgData)
      }
    }

    upodateCanvas()
  }, [imgData])

  const imgRef = useRef<HTMLImageElement | null>(null)
  // 초기 이미지 로딩 + 히스토리 1스택
  useEffect(() => {
    const setInitialImage = async () => {
      if (!imgRef.current) return
      const imgData = await drawCanvasWithImage(imgRef.current)
      setImgData(imgData)
    }
    setInitialImage()
  }, [])

  return (
    <CommFlexRowContainer
      id={canvasId}
      height={'100%'}
      style={{ position: 'relative' }}
    >
      {/* 미리보기: 개발용 */}
      {/* <div>
        <CommText>Preview</CommText>
        <img src={imgData} width={100} height={100} />
      </div> */}

      <img
        ref={imgRef}
        src={'/assets/img/sunmu-01.jpeg'}
        style={{ display: 'none' }}
      />
      <canvas
        ref={canvasRef}
        style={{
          border: `1px solid ${palette.darkGrey}`,
          width: '100%',
          height: '100%',
        }}
        onMouseDown={onHandleMouseDown}
        onMouseMove={onHandleMouseMove}
        onMouseUp={onHandleMouseUp}
        onMouseLeave={stopDrawing}
      >
        EditorCanvas
      </canvas>
    </CommFlexRowContainer>
  )
}

export default EditorCanvas
