/**
 * 스타일 값 변환
 * React.CSSPropertis(스트링 or 넘버)
 * @param value string | number | undefined
 * @return  string -> string
 * @return  number -> "{number}px"
 * @return  undefined -> undefined
 */
export const getStylePxStrValue = (value: string | number | undefined) => {
  if (!value) return undefined
  if (typeof value === 'string') return value
  return `${value}px`
}
