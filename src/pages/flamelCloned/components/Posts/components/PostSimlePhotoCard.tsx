import { CardContainer } from './styles'

interface IProps {
  info: {
    id: number
    imgUrl: string
  }
}

function PostSimlePhotoCard({ info }: IProps) {
  return (
    <CardContainer style={{}} imgUrl={info.imgUrl}>
      <h1>PostSimlePhotoCard</h1>
    </CardContainer>
  )
}

export default PostSimlePhotoCard
