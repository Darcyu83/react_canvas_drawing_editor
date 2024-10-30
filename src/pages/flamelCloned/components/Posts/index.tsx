import { useSuspenseQuery } from '@tanstack/react-query'
import { CommFlexRowContainer } from '../../../../styles/commonStyled'
import PostSimlePhotoCard from './components/PostSimlePhotoCard'
import { getPostList } from '../../../../api/post'
import { useState } from 'react'
import ModalPostDetails from '../../../../components/modal/post/ModalPostDetails'

interface IProps {}

function Posts(props: IProps) {
  const { data: postList } = useSuspenseQuery({
    queryKey: ['postList'],
    queryFn: getPostList,
  })

  const [selectedPostId, setSelectedPostId] = useState<number>()

  const onCloseModal = () => {
    setSelectedPostId(undefined)
  }
  return (
    <CommFlexRowContainer gap={'1rem'} style={{}}>
      {postList.map((info) => {
        return (
          <PostSimlePhotoCard postInfo={info} onClick={setSelectedPostId} />
        )
      })}

      {/* 모달 */}
      <ModalPostDetails
        isOpen={!!selectedPostId}
        selectedPostIdToOpen={selectedPostId}
        onClose={onCloseModal}
      />
    </CommFlexRowContainer>
  )
}

export default Posts
