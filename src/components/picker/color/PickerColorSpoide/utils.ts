export const getPixelColor = (
  mouseX: number,
  mouseY: number,
  canvas: HTMLCanvasElement
) => {
  const context = canvas.getContext('2d')
  if (context) {
    // Capture the screen
    context.clearRect(0, 0, canvas.width, canvas.height) // Clear previous frame
    context.drawImage(
      document.body as unknown as CanvasImageSource,
      0,
      0,
      canvas.width,
      canvas.height
    )

    // Get the pixel color at the mouse position
    const pixel = context.getImageData(mouseX, mouseY, 1, 1).data
    const hexColor = `#${((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2]).toString(16).slice(1)}`
    return hexColor
  }
}
