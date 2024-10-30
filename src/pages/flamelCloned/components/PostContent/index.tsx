import {
  CommFlexColContainer,
  CommFlexRowContainer,
} from '../../../../styles/commonStyled'

import BtnsPromptSupport from './components/buttons/BtnsPromptSupport'
import BtnsContentType from './components/buttons/BtnsContentType'
import PostInput from './components/PostInput'

interface IProps {}

function PostContentForm(props: IProps) {
  return (
    <CommFlexColContainer gap={'1.2rem'}>
      {/* 버튼's */}
      <CommFlexRowContainer gap={'1rem'}>
        <BtnsPromptSupport />
        <BtnsContentType />
      </CommFlexRowContainer>

      {/* 인풋 */}
      <PostInput />
    </CommFlexColContainer>
  )
}

export default PostContentForm
