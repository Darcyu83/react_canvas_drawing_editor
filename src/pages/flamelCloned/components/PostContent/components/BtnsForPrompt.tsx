import { useState } from 'react'
import SVGBtn from '../../../../../components/button/SVGBtn'
import IconBlingBlingSVG from '../../../../../components/icon/IconBlingBlingSVG'
import IconEraserSVG from '../../../../../components/icon/IconEraserSVG'
import IconExchangeSVG from '../../../../../components/icon/IconExchangeSVG'
import { CommFlexRowContainer } from '../../../../../styles/commonStyled'
import { palette } from '../../../../../styles/palette'

interface IProps {}

const btnConfigs = [
  {
    key: 'promptMagic',
    child: <IconBlingBlingSVG />,
    tooltip: 'Prompt Magic',
  },
  { key: 'randomPrompt', child: <IconExchangeSVG />, tooltip: 'Random prompt' },
  { key: 'clear', child: <IconEraserSVG />, tooltip: 'clear' },
] as const
type TBtnKeys = (typeof btnConfigs)[number]['key']

function BtnsForPrompt(props: IProps) {
  const [btnArrActivated, setBtnArrActivated] = useState<TBtnKeys[]>(['clear'])

  const onClick = (_key: TBtnKeys) => {
    setBtnArrActivated((curr) => {
      if (curr.includes(_key)) return curr.filter((key) => !(key === _key))

      return [...curr, _key]
    })
  }
  return (
    <CommFlexRowContainer
      className="border_outlined"
      width={'fit-content'}
      padding={2}
    >
      {btnConfigs.map((config) => {
        return (
          <SVGBtn
            key={config.key}
            onClick={
              config.key !== 'clear' ? () => onClick(config.key) : undefined
            }
            iconColor={
              btnArrActivated.includes(config.key)
                ? 'inherit'
                : palette.borderGreyLight
            }
          >
            {config.child}
          </SVGBtn>
        )
      })}
    </CommFlexRowContainer>
  )
}

export default BtnsForPrompt
