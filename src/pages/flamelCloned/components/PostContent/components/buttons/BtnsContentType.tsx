import { useState } from 'react'
import { CommFlexRowContainer } from '../../../../../../styles/commonStyled'
import TextBtn from '../../../../../../components/button/TextBtn'

interface IProps {}

const btnConfigs = [
  { key: 'textOnly', label: 'Text only' },
  { key: 'withImage', label: 'With image' },
] as const

type TBtnKeys = (typeof btnConfigs)[number]['key']

function BtnsContentType(props: IProps) {
  const [btnKey, setBtnKey] = useState<TBtnKeys>('textOnly')
  return (
    <CommFlexRowContainer
      gap={'0.5rem'}
      style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {btnConfigs.map((config) => {
        return (
          <TextBtn
            key={config.label}
            label={config.label}
            isSelected={btnKey === config.key}
            onClick={() => {
              setBtnKey(config.key)
            }}
            style={{
              padding: 4,
              width: 150,
              borderRadius: 13,
            }}
          />
        )
      })}
    </CommFlexRowContainer>
  )
}

export default BtnsContentType
