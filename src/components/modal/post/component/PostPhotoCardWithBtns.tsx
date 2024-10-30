import { CommFlexRowContainer, CommText } from '../../../../styles/commonStyled'
import BadgeGrayTransparent from '../../../badge/BadgeGrayTransparent'
import IconBookmarkSVG from '../../../icon/IconBookmarkSVG'
import IconMagnifyingGlassSVG from '../../../icon/IconMagnifyingGlassSVG'
import IconThumbsDownSVG from '../../../icon/IconThumbsDownSVG'
import IconThumbsUpSVG from '../../../icon/IconThumbsUpSVG'
import { CardContainer } from './styles'

interface IProps {
  imgUrl?: string
}

function PostPhotoCard({ imgUrl }: IProps) {
  return (
    <CardContainer imgUrl={imgUrl}>
      {/* 상단 버튼's */}
      <CommFlexRowContainer justifyContent="space-between" padding={8}>
        <CommFlexRowContainer gap={4}>
          <BadgeGrayTransparent>
            <IconThumbsUpSVG />
          </BadgeGrayTransparent>

          <BadgeGrayTransparent>
            <IconThumbsDownSVG />
          </BadgeGrayTransparent>
        </CommFlexRowContainer>

        <CommFlexRowContainer>
          <BadgeGrayTransparent>
            <IconBookmarkSVG />
          </BadgeGrayTransparent>
        </CommFlexRowContainer>
      </CommFlexRowContainer>

      {/* 하단 버튼's */}
      <CommFlexRowContainer justifyContent="space-between" padding={8}>
        <BadgeGrayTransparent>
          <CommFlexRowContainer>
            <IconMagnifyingGlassSVG />
            <CommText>View Image</CommText>
          </CommFlexRowContainer>
        </BadgeGrayTransparent>
      </CommFlexRowContainer>
    </CardContainer>
  )
}

export default PostPhotoCard
