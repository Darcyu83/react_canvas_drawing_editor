export const waitForImgLoaded = (img: HTMLImageElement | HTMLCanvasElement) => {
  return new Promise<boolean>((res, rej) => {
    if (img instanceof HTMLImageElement && img.complete) {
      res(true)
      return
    }

    img.onload = () => {
      res(true)
    }

    img.onerror = () => {
      rej(false)
    }
  })
}
