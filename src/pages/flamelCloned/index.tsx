import { Suspense } from 'react'
import { CommFlexColContainer, CommText } from '../../styles/commonStyled'
import PostContentForm from './components/PostContent'
import Posts from './components/Posts'
import { palette } from '../../styles/palette'

interface IProps {}

function FlamelCloned(props: IProps) {
  return (
    <CommFlexColContainer padding={4}>
      {/* Post Form and buttons */}
      <PostContentForm />

      {/* 포스트 리스트 */}
      <CommFlexColContainer style={{ minHeight: 100 }}>
        <Suspense
          fallback={
            <CommText fontSize={20} color={palette.textActiveWhite}>
              Loading data...(1sec)
            </CommText>
          }
        >
          <Posts />
        </Suspense>
      </CommFlexColContainer>
    </CommFlexColContainer>
  )
}

export default FlamelCloned
