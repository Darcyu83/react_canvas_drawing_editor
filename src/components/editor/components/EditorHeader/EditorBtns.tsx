import {
  IPaintEditorContextParams,
  TEditorToolTypeDrawing,
} from '../../../../context/paintEditorContext/types'
import { IEditorState } from '../../../../hooks/paintEditor/types'
import { CommBtn, CommFlexRowContainer } from '../../../../styles/commonStyled'
import PickerColor from '../../../picker/color/PickerColor/PickerColor'
import PickerColorSpoide from '../../../picker/color/PickerColorSpoide/PickerColorSpoide'
import { buttonConfigs } from './buttonConfigs'

interface IProps {
  editorState: IEditorState
  setColor: IPaintEditorContextParams['setColorPicked']
  setToolTypeDrawing: React.Dispatch<
    React.SetStateAction<TEditorToolTypeDrawing>
  >
  onUndo: () => void
  onRedo: () => void
}

function EditorBtns({
  editorState: { color, toolTypeDrawing },
  setColor,
  setToolTypeDrawing,
  onUndo,
  onRedo,
}: IProps) {
  return (
    <CommFlexRowContainer style={{}} gap={8}>
      {buttonConfigs.map((config) => {
        if (config.key === 'colorPicker')
          return (
            <PickerColor
              key={config.key}
              color={color}
              setColorPicked={setColor}
            />
          )

        if (config.key === 'spoide') {
          return (
            <PickerColorSpoide
              key={config.key}
              icon={config.icon}
              color={color}
              setColor={setColor}
            />
          )
        }

        if (
          config.key === 'pen' ||
          config.key === 'eraser' ||
          config.key === 'square' ||
          config.key === 'circle'
        ) {
          return (
            <CommBtn
              key={config.key}
              isSelected={toolTypeDrawing === config.key}
              onClick={() => {
                setToolTypeDrawing(config.key as TEditorToolTypeDrawing) //?? why?? 일단 supress
              }}
            >
              {config.icon}
            </CommBtn>
          )
        }
        return (
          <CommBtn
            key={config.key}
            onClick={() => {
              if (config.key === 'back') onUndo()
              if (config.key === 'forward') onRedo()
            }}
          >
            {config.icon}
          </CommBtn>
        )
      })}
    </CommFlexRowContainer>
  )
}

export default EditorBtns
