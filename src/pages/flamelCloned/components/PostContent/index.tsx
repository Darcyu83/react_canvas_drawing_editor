import {
  CommFlexColContainer,
  CommFlexRowContainer,
} from '../../../../styles/commonStyled'
import BtnsForInputMode from './components/BtnsForInputMode'
import BtnsForPrompt from './components/BtnsForPrompt'
import PostInput from './components/PostInput'

interface IProps {}

function PostContent(props: IProps) {
  return (
    <CommFlexColContainer gap={20}>
      {/* 버튼's */}
      <CommFlexRowContainer gap={16}>
        <BtnsForPrompt />
        <BtnsForInputMode />
      </CommFlexRowContainer>

      {/* 인풋 */}
      <PostInput />
    </CommFlexColContainer>
  )
}

export default PostContent
