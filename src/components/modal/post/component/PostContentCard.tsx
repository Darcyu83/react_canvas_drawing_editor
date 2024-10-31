import { IPostListItem } from '../../../../api/post/types'
import {
  CommFlexColContainer,
  CommFlexRowContainer,
  CommText,
} from '../../../../styles/commonStyled'
import { palette } from '../../../../styles/palette'
import BadgeGrayTransparent from '../../../badge/BadgeGrayTransparent'
import TextAreaOutlined from '../../../input/textarea/TextAreaOutlined'
import {
  MdAttachFile,
  MdDashboard,
  MdRefresh,
  MdOutlineMode,
  MdCircle,
  MdOutlineFileDownload,
  MdContentCopy,
  MdAttachMoney,
} from 'react-icons/md'
import { FaRegClone } from 'react-icons/fa'

interface IProps {
  postInfo: IPostListItem | undefined
}

function PostContentCard({ postInfo }: IProps) {
  return (
    <>
      <CommFlexColContainer
        padding={`8px 8px 0`}
        justifyContent="flex-start"
        gap={8}
      >
        {/* 상단 버튼 */}
        <CommFlexRowContainer gap={8}>
          <BadgeGrayTransparent>
            <CommFlexRowContainer gap={4}>
              <MdCircle size={24} fill="black" />
              <CommText>No Style</CommText>
            </CommFlexRowContainer>
          </BadgeGrayTransparent>

          <BadgeGrayTransparent>
            <MdAttachFile size={24} />
          </BadgeGrayTransparent>
        </CommFlexRowContainer>

        {/* textarea */}
        <CommFlexRowContainer>
          <TextAreaOutlined
            value={postInfo?.content}
            style={{
              borderWidth: 0,
              aspectRatio: '1/1',
              justifyContent: 'flex-start',
            }}
            textareaStyle={{
              opacity: 0.8,
              background: palette.textBg,
              minHeight: 200,
              color: palette.textActiveWhite,
            }}
          >
            <CommFlexRowContainer justifyContent="flex-end" gap={4}>
              <BadgeGrayTransparent>
                <MdDashboard size={24} />
              </BadgeGrayTransparent>

              <BadgeGrayTransparent>
                <MdRefresh size={24} />
              </BadgeGrayTransparent>
            </CommFlexRowContainer>
          </TextAreaOutlined>
        </CommFlexRowContainer>
      </CommFlexColContainer>
      {/* 하단 버튼's */}
      <CommFlexRowContainer
        padding={`8px 8px`}
        justifyContent="space-evenly"
        gap={8}
      >
        <BadgeGrayTransparent>
          <CommFlexRowContainer
            padding={'2px 10px'}
            gap={4}
            style={{ height: 24 }}
          >
            <MdOutlineMode size={24} />
            <CommText>Edit</CommText>
          </CommFlexRowContainer>
        </BadgeGrayTransparent>

        <BadgeGrayTransparent>
          <CommFlexRowContainer
            padding={'2px 10px'}
            gap={4}
            style={{ height: 24 }}
          >
            <MdOutlineFileDownload size={24} />
            <CommText>Download</CommText>
          </CommFlexRowContainer>
        </BadgeGrayTransparent>

        <BadgeGrayTransparent style={{ background: palette.textPrimary }}>
          <CommFlexRowContainer
            padding={'2px 10px'}
            gap={4}
            style={{ height: 24 }}
          >
            <FaRegClone size={24} />
            <MdContentCopy size={24} />
            <CommText>Copy image</CommText>
          </CommFlexRowContainer>
        </BadgeGrayTransparent>

        <BadgeGrayTransparent>
          <MdAttachMoney size={24} />
        </BadgeGrayTransparent>
      </CommFlexRowContainer>
    </>
  )
}

export default PostContentCard
