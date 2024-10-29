import { Outlet } from 'react-router-dom'
import { MainLayoutContainer } from './styles'
import NavBar from './components/nav/NavBar'

interface IProps {}

function MainLayout(props: IProps) {
  return (
    <MainLayoutContainer>
      <header style={{ height: 0 }}></header>

      <NavBar />

      <main>
        <Outlet />
      </main>

      <footer style={{ height: 0 }}></footer>
    </MainLayoutContainer>
  )
}

export default MainLayout
