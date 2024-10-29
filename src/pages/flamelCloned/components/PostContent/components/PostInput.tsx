import IconExclamationMarkSVG from '../../../../../components/icon/IconExclamationMarkSVG'
import {
  CommFlexColContainer,
  CommFlexRowContainer,
  CommText,
} from '../../../../../styles/commonStyled'

interface IProps {}

const TEXTAREA_HEIGHT = 100
function PostInput(props: IProps) {
  return (
    <CommFlexRowContainer
      gap={16}
      height={'fit-content'}
      justifyContent="space-between"
    >
      <CommFlexRowContainer>←</CommFlexRowContainer>
      <CommFlexColContainer width={'100%'} height={'100%'} gap={4}>
        <CommFlexColContainer className="border_outlined" padding={4}>
          <textarea
            style={{
              width: '100%',
              height: TEXTAREA_HEIGHT,
            }}
            minLength={10}
          />

          <CommFlexRowContainer></CommFlexRowContainer>
        </CommFlexColContainer>

        <CommFlexRowContainer justifyContent="flex-end" gap={4}>
          <IconExclamationMarkSVG />
          <CommText fontSize={16}>About</CommText>
        </CommFlexRowContainer>
      </CommFlexColContainer>

      <CommFlexRowContainer>🗑️</CommFlexRowContainer>
    </CommFlexRowContainer>
  )
}

export default PostInput
