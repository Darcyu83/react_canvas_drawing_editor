import { useState } from 'react'
import TextBtn from '../../../../../components/button/TextBtn'
import { CommFlexRowContainer } from '../../../../../styles/commonStyled'

interface IProps {}

const btnConfigs = [
  { key: 'textOnly', label: 'Text only' },
  { key: 'withImage', label: 'With image' },
] as const

type TBtnKeys = (typeof btnConfigs)[number]['key']

function BtnsForInputMode(props: IProps) {
  const [btnKey, setBtnKey] = useState<TBtnKeys>('textOnly')
  return (
    <CommFlexRowContainer
      gap={8}
      style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {btnConfigs.map((config) => {
        return (
          <TextBtn
            label={config.label}
            isSelected={btnKey === config.key}
            onClick={() => {
              setBtnKey(config.key)
            }}
            style={{
              padding: 4,
              width: 150,
              borderRadius: 12,
            }}
          />
        )
      })}
    </CommFlexRowContainer>
  )
}

export default BtnsForInputMode
