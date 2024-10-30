import { NavLink } from 'react-router-dom'
import { INavbarConfig } from '../config'
import { palette } from '../../../../styles/palette'

interface IProps {
  config: INavbarConfig
}

function NavBarItem({ config }: IProps) {
  return (
    <NavLink
      viewTransition
      to={config.path}
      style={({ isActive, isPending, isTransitioning }) => {
        return {
          padding: '2px 4px 4px',
          fontSize: 20,
          fontWeight: isActive ? 'bold' : undefined,
          color: isActive ? palette.textPrimary : undefined,
          borderBottom: `2px solid ${isActive ? palette.textPrimary : 'transparent'}`,
        }
      }}
    >
      {config.label}
    </NavLink>
  )
}

export default NavBarItem
