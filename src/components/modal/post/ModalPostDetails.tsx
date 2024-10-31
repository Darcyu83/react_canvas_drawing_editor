import { useQuery } from '@tanstack/react-query'
import ModalFoundation from '../components/ModalFoundation'
import PostPhotoCard from './component/PostPhotoCardWithBtns'
import { getPostList } from '../../../api/post'
import { useMemo, useState } from 'react'
import PostListCarousel from './component/PostListCarousel'
import PostContentCard from './component/PostContentCard'
import { PostDetailsCardContainer } from './styles'
import {
  CommFlexColContainer,
  CommFlexRowContainer,
} from '../../../styles/commonStyled'
import BadgeGrayTransparent from '../../badge/BadgeGrayTransparent'
import { MdClose } from 'react-icons/md'
interface IProps {
  selectedPostIdToOpen?: number
  isOpen?: boolean
  onClose: () => void
}

function ModalPostDetails({ selectedPostIdToOpen, isOpen, onClose }: IProps) {
  const [selectedInternalPostId, setSelectedInternalPostId] = useState<number>()

  const { data: postList } = useQuery({
    queryKey: ['postList'],
    queryFn: getPostList,
  })

  const selectedPostId = selectedInternalPostId || selectedPostIdToOpen
  const { postInfo, postInfoIdx } = useMemo(() => {
    if (!postList || !selectedPostId)
      return { postInfo: undefined, postInfoIdx: undefined }

    const postInfoIdx = postList.findIndex((info) => info.id === selectedPostId)
    return { postInfo: postList[postInfoIdx], postInfoIdx }
  }, [postList, selectedPostId])

  const onCloseModal = () => {
    setSelectedInternalPostId(undefined)

    onClose()
  }
  return (
    <ModalFoundation isOpen={isOpen} onClose={onCloseModal}>
      {/* 닫기버튼 */}
      <div
        onClick={onCloseModal}
        style={{ position: 'absolute', right: 10, top: 10 }}
      >
        <BadgeGrayTransparent>
          <MdClose size={24} />
        </BadgeGrayTransparent>
      </div>

      <CommFlexRowContainer
        padding={'2rem'}
        height={'100%'}
        width={'100%'}
        gap={'1rem'}
        style={{ maxWidth: 900 }}
      >
        {/* 메인사진 + 사진 리스트 */}
        <PostDetailsCardContainer onClick={(e) => e.stopPropagation()}>
          <CommFlexColContainer
            width={'100%'}
            gap={16}
            justifyContent="space-between"
            style={{ aspectRatio: '3/4' }}
          >
            <PostPhotoCard imgUrl={postInfo?.imgUrl} />
            <PostListCarousel
              postList={postList}
              postInfoIdx={postInfoIdx}
              selectedPostId={selectedPostId}
              setPostId={setSelectedInternalPostId}
            />
          </CommFlexColContainer>
        </PostDetailsCardContainer>

        {/* 게시글 관련 */}
        <PostDetailsCardContainer onClick={(e) => e.stopPropagation()}>
          <CommFlexColContainer
            width={'100%'}
            height="100%"
            className="border_outlined"
            justifyContent="space-between"
            style={{ aspectRatio: '3/4' }}
          >
            <PostContentCard postInfo={postInfo} />
          </CommFlexColContainer>
        </PostDetailsCardContainer>
      </CommFlexRowContainer>
    </ModalFoundation>
  )
}

export default ModalPostDetails
