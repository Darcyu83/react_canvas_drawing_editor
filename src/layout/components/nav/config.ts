import { RouterPaths } from '../../../router/routerPaths'

export interface INavbarConfig {
  label: string
  path: (typeof RouterPaths)[keyof typeof RouterPaths]
}

export const NavBarConfigs: INavbarConfig[] = [
  { label: '플라멜(클론)', path: RouterPaths.CLONE },
  { label: '그림판', path: RouterPaths.PAINT_EDITOR },
]
