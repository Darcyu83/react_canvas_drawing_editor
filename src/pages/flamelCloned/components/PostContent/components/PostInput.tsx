import IconExclamationMarkSVG from '../../../../../components/icon/IconExclamationMarkSVG'
import TextAreaOutlined from '../../../../../components/input/textarea/TextAreaOutlined'
import {
  CommFlexColContainer,
  CommFlexRowContainer,
  CommText,
} from '../../../../../styles/commonStyled'
import BtnsInputFooter from './buttons/BtnsInputFooter'

interface IProps {}

function PostInput({}: IProps) {
  return (
    <form action="">
      <CommFlexRowContainer
        gap={'1rem'}
        height={'fit-content'}
        justifyContent="space-between"
      >
        <CommFlexRowContainer>←</CommFlexRowContainer>
        <CommFlexColContainer width={'100%'} height={'100%'} gap={'0.25rem'}>
          <TextAreaOutlined>
            <BtnsInputFooter />
          </TextAreaOutlined>

          <CommFlexRowContainer justifyContent="flex-end" gap={'0.25rem'}>
            <IconExclamationMarkSVG />
            <CommText fontSize={16}>About</CommText>
          </CommFlexRowContainer>
        </CommFlexColContainer>

        <CommFlexRowContainer>🗑️</CommFlexRowContainer>
      </CommFlexRowContainer>
    </form>
  )
}

export default PostInput
