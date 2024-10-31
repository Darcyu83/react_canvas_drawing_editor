import { ReactNode } from 'react'
import {
  FaStepBackward,
  FaStepForward,
  FaEyeDropper,
  FaPen,
  FaRegSquare,
  FaEraser,
  FaRegCircle,
  FaSave,
} from 'react-icons/fa'

type TEditorBtnKeys =
  | 'back'
  | 'forward'
  | 'dropper'
  | 'pen'
  | 'eraser'
  | 'square'
  | 'circle'
  | 'save'

interface IEditorBtnConfig {
  key: TEditorBtnKeys
  label: string
  icon: ReactNode
}

export const buttonConfigs: IEditorBtnConfig[] = [
  { key: 'back', label: '뒤로', icon: <FaStepBackward size={24} /> },
  { key: 'forward', label: '앞으로', icon: <FaStepForward size={24} /> },
  { key: 'dropper', label: '스포이드', icon: <FaEyeDropper size={24} /> },
  { key: 'pen', label: '펜', icon: <FaPen size={24} /> },
  { key: 'eraser', label: '지우개', icon: <FaEraser size={24} /> },
  { key: 'square', label: '사각형', icon: <FaRegSquare size={24} /> },
  { key: 'circle', label: '원', icon: <FaRegCircle size={24} /> },
  { key: 'save', label: '저장', icon: <FaSave size={24} /> },
] as const
