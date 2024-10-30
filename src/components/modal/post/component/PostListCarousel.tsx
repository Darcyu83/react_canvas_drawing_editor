import { CommFlexRowContainer, CommText } from '../../../../styles/commonStyled'
import PostSimlePhotoCard from '../../../../pages/flamelCloned/components/Posts/components/PostSimlePhotoCard'
import { palette } from '../../../../styles/palette'
import { IPostListItem } from '../../../../api/post/types'

interface IProps {
  postInfoIdx: number | undefined
  selectedPostId: number | undefined
  setPostId: React.Dispatch<React.SetStateAction<number | undefined>>
  postList: IPostListItem[] | undefined
}

function PostListCarousel({
  postInfoIdx,
  selectedPostId,
  postList,
  setPostId,
}: IProps) {
  const onSetPostIdWithArrow = (direction: 'left' | 'right') => {
    if (!postList) return
    if (typeof postInfoIdx !== 'number') return

    let idx = postInfoIdx
    if (direction === 'left') {
      idx = postInfoIdx - 1 < 0 ? postList.length - 1 : postInfoIdx - 1
    }

    if (direction === 'right') {
      idx = postInfoIdx + 1 > postList.length - 1 ? 0 : postInfoIdx + 1
    }

    setPostId(postList[idx].id)
  }
  return (
    <CommFlexRowContainer width="100%" gap={'4px'} style={{}}>
      <CommText
        onClick={() => onSetPostIdWithArrow('left')}
        fontSize={35}
        color={palette.textPrimary}
        style={{ cursor: 'pointer' }}
      >
        ◀︎
      </CommText>
      {postList?.map((info) => {
        return (
          <PostSimlePhotoCard
            postInfo={info}
            onClick={setPostId}
            isSelected={info.id === selectedPostId}
          />
        )
      })}

      <CommText
        onClick={() => onSetPostIdWithArrow('right')}
        fontSize={35}
        color={palette.textPrimary}
        style={{ cursor: 'pointer' }}
      >
        ▶︎
      </CommText>
    </CommFlexRowContainer>
  )
}

export default PostListCarousel
