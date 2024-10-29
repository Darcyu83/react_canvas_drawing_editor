import NavBarItem from './components/NavBarItem'
import { NavBarConfigs } from './config'
import { NavBarContainer } from './styles'

interface IProps {}

function NavBar(props: IProps) {
  return (
    <NavBarContainer gap={24}>
      {NavBarConfigs.map((config, idx) => {
        return <NavBarItem key={config.label} config={config} />
      })}
    </NavBarContainer>
  )
}

export default NavBar
