import InputColor from 'react-input-color'
import { IPaintEditorContextParams } from '../../../../context/paintEditorContext/types'
import { PreviewWrapper } from './styles'
import { palette } from '../../../../styles/palette'

interface IProps {
  color?: IPaintEditorContextParams['colorPicked']
  setColorPicked?: IPaintEditorContextParams['setColorPicked']
}

function PickerColor({ color = palette.red, setColorPicked }: IProps) {
  
  return (
    <PreviewWrapper>
      <InputColor
        initialValue={color}
        onChange={(color) => setColorPicked && setColorPicked(color.hex)}
      />
    </PreviewWrapper>
  )
}

export default PickerColor
