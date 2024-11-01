export const waitForImgLoaded = (img: HTMLImageElement | HTMLCanvasElement) => {
  return new Promise<boolean>((res, rej) => {
    img.onload = () => {
      res(true)
    }

    img.onerror = () => {
      rej(false)
    }
  })
}
