import PickerColor from '../../../../components/picker/color/PickerColor'
import { CommBtn, CommFlexRowContainer } from '../../../../styles/commonStyled'
import { buttonConfigs } from './buttonConfigs'

interface IProps {}

function EditorBtns(props: IProps) {
  return (
    <CommFlexRowContainer style={{}} gap={8}>
      {buttonConfigs.map((config) => {
        if (config.key === 'dropper') return <PickerColor icon={config.icon} />

        return <CommBtn>{config.icon}</CommBtn>
      })}
    </CommFlexRowContainer>
  )
}

export default EditorBtns
