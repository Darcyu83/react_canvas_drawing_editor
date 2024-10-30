import { ReactNode } from 'react'
import { CardContainer } from './styles'
import { IPostListItem } from '../../../../../api/post/types'

interface IProps {
  onClick: React.Dispatch<React.SetStateAction<number | undefined>>
  children?: ReactNode
  postInfo: IPostListItem
  isSelected?: boolean
}

function PostSimlePhotoCard({
  postInfo,
  children,
  onClick,
  isSelected,
}: IProps) {
  return (
    <CardContainer
      style={{}}
      isSelected={isSelected}
      imgUrl={postInfo.imgUrl}
      onClick={() => {
        onClick(postInfo.id)
      }}
    >
      {children}
    </CardContainer>
  )
}

export default PostSimlePhotoCard
