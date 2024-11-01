import { useEffect, useRef } from 'react'
import { waitForImgLoaded } from '../../utils/imge'

interface IProps {
  strokeColor?: string
  fillColor?: string
}

function useCanvas({
  strokeColor = 'white',
  fillColor = 'rgba(255,255,255, 0.3)',
}: IProps = {}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const isDrawingRef = useRef(false)
  const startCoords = useRef<{ x: number; y: number } | null>(null)

  // 캔버스 컨텍스트 불러오기
  const getCanvasContext = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    return canvas.getContext('2d', { willReadFrequently: true })
  }

  const drawCanvasWithDataUrl = async (dataUrl: string) => {
    const img = new Image()
    img.src = dataUrl

    const result = await waitForImgLoaded(img)
    console.log('drawCanvasWithDataUrl 0')
    if (!result) {
      throw new Error('Error:: 이미지 로딩중 오류발생:')
    }

    console.log('drawCanvasWithDataUrl 1')
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    console.log('drawCanvasWithDataUrl 3')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  }

  const drawCanvasWithImage = async (imgTag: HTMLImageElement) => {
    const result = await waitForImgLoaded(imgTag)
    if (!result) {
      throw new Error('Error:: 이미지 로딩중 오류발생:')
    }
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(imgTag, 0, 0, canvas.width, canvas.height)

    return canvas?.toDataURL()
  }

  const startDrawing = (x: number, y: number) => {
    console.log('start drawing')
    isDrawingRef.current = true
    startCoords.current = { x, y }
    const context = getCanvasContext()
    if (!context || !isDrawingRef.current || !startCoords.current) return
    context.beginPath()
    context.moveTo(x, y)
    // context.lineTo(x, y)
    drawLine(x, y)

    context.stroke()
  }

  const stopDrawing = () => {
    console.log('stop drawing')
    isDrawingRef.current = false
    startCoords.current = null
  }

  // 라인 드로잉
  const drawLine = (endX: number, endY: number) => {
    const context = getCanvasContext()
    if (!context || !isDrawingRef.current || !startCoords.current) return
    // const { x: startX, y: startY } = startCoords.current

    console.log('drawing line')

    context.strokeStyle = strokeColor
    context.lineTo(endX, endY)
    context.stroke()
  }

  const drawRectangle = (width: number, height: number) => {
    const context = getCanvasContext()
    if (!context || !isDrawingRef.current || !startCoords.current) return
    const { x: startX, y: startY } = startCoords.current
    context.beginPath()
    context.rect(startX, startY, width, height)
    context.fillStyle = fillColor // Example color, adjustable
    context.fill()
    context.strokeStyle = strokeColor
    context.stroke()
  }

  const drawCircle = (endX: number, endY: number) => {
    const context = getCanvasContext()
    if (!context || !isDrawingRef.current || !startCoords.current) return
    const { x: startX, y: startY } = startCoords.current

    const radius = Math.hypot(endX - startX, endY - startY) // Calculate radius
    context.beginPath()
    context.arc(startX, startY, radius, 0, 2 * Math.PI)
    context.strokeStyle = strokeColor
    context.stroke()
  }

  // 초기화
  const resetCanvas = () => {
    const context = getCanvasContext()
    if (context) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    }
  }

  const setStrokeColor = (color: string) => {
    const ctx = getCanvasContext()
    if (!ctx) return
    ctx.strokeStyle = color
  }
  useEffect(() => {
    setStrokeColor(strokeColor)
  }, [strokeColor])

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return
    const parentEl = canvas.parentElement
    const { width, height } = parentEl!.getBoundingClientRect()
    canvas.width = width
    canvas.height = height

    const ctx = getCanvasContext()
    if (!ctx) return
    ctx.lineCap = 'round'
    ctx.strokeStyle = strokeColor
    ctx.lineWidth = 5
  }, [])

  return {
    canvasRef,
    getCanvasContext,
    startDrawing,
    stopDrawing,

    drawCanvasWithDataUrl,
    drawCanvasWithImage,
    drawLine,
    drawRectangle,
    drawCircle,
    resetCanvas,
    setStrokeColor,
  }
}

export default useCanvas
