import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { lazy } from 'react'
import NoutFound from '../pages/error/NoutFound'
import { RouterPaths } from './routerPaths'

interface IProps {}

const MainLayout = lazy(() => import('../layout/MainLayout'))
const FlamelCloned = lazy(() => import('../pages/flamelCloned'))
const PaintEditor = lazy(() => import('../pages/drawing'))

const routerProps: RouteObject[] = [
  {
    path: RouterPaths.ROOT,
    element: <MainLayout />,
    errorElement: <NoutFound />,
    children: [
      { index: true, element: <Navigate to={RouterPaths.CLONE} replace /> },
      { path: RouterPaths.CLONE, element: <FlamelCloned /> },
      { path: RouterPaths.PAINT_EDITOR, element: <PaintEditor /> },
    ],
  },

  {
    path: '*',
    element: <div>로그인페이지 || 없는 주소</div>,
    errorElement: <NoutFound />,
  },
]

const router = createBrowserRouter(routerProps)

function RootRouter(props: IProps) {
  return <RouterProvider router={router} />
}

export default RootRouter
