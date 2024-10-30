import IconExclamationMarkSVG from '../../../../../components/icon/IconExclamationMarkSVG'
import {
  CommFlexColContainer,
  CommFlexRowContainer,
  CommText,
} from '../../../../../styles/commonStyled'
import BtnsInputFooter from './buttons/BtnsInputFooter'

interface IProps {}

const TEXTAREA_HEIGHT = 100
function PostInput(props: IProps) {
  return (
    <form action="">
      <CommFlexRowContainer
        gap={'1rem'}
        height={'fit-content'}
        justifyContent="space-between"
      >
        <CommFlexRowContainer>←</CommFlexRowContainer>
        <CommFlexColContainer width={'100%'} height={'100%'} gap={'0.25rem'}>
          <CommFlexColContainer
            className="border_outlined"
            padding={4}
            gap={'0.5rem'}
          >
            <textarea
              style={{
                width: '100%',
                height: TEXTAREA_HEIGHT,
              }}
              minLength={10}
            />

            <BtnsInputFooter />
          </CommFlexColContainer>

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
