import { useSuspenseQuery } from '@tanstack/react-query'
import { CommFlexRowContainer } from '../../../../styles/commonStyled'
import PostSimlePhotoCard from './components/PostSimlePhotoCard'
import { getPostList } from '../../../../api/post'

interface IProps {}

function Posts(props: IProps) {
  const { data: postList } = useSuspenseQuery({
    queryKey: ['postList'],
    queryFn: getPostList,
  })
  return (
    <CommFlexRowContainer gap={'1rem'} style={{}}>
      {postList.map((info) => {
        return <PostSimlePhotoCard info={info} />
      })}
    </CommFlexRowContainer>
  )
}

export default Posts
