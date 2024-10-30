import IconMaginWantSVG from '../../../../../../components/icon/IconMaginWantSVG'
import {
  CommFlexRowContainer,
  CommText,
} from '../../../../../../styles/commonStyled'
import { palette } from '../../../../../../styles/palette'
import { RoundBadgeContainer } from './styles'

interface IProps {}

function BtnsInputFooter(props: IProps) {
  return (
    <CommFlexRowContainer justifyContent="space-between">
      <RoundBadgeContainer gap={'0.25rem'}>
        <div>◉</div>
        <CommText>No Style</CommText>
      </RoundBadgeContainer>

      <CommFlexRowContainer justifyContent="flex-end" gap={'0.25rem'}>
        <RoundBadgeContainer gap={'0.25rem'} bgColor={palette.lightGrey}>
          <img src="/assets/icon/icon_square.webp" width={16} />
          <CommText>1:1</CommText>
        </RoundBadgeContainer>

        <RoundBadgeContainer
          bgColor={palette.textPrimary}
          justifyContent="center"
          style={{ color: 'white' }}
        >
          <CommText color="transparent">`</CommText>
          <IconMaginWantSVG />
        </RoundBadgeContainer>
      </CommFlexRowContainer>
    </CommFlexRowContainer>
  )
}

export default BtnsInputFooter
