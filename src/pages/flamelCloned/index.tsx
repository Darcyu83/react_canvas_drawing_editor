import { CommFlexColContainer } from '../../styles/commonStyled'
import PostContent from './components/PostContent'
import Posts from './components/Posts'

interface IProps {}

function FlamelCloned(props: IProps) {
  return (
    <CommFlexColContainer padding={4}>
      {/* Post Form and buttons */}
      <PostContent />

      {/* 포스트 리스트 */}
      <Posts />
    </CommFlexColContainer>
  )
}

export default FlamelCloned
