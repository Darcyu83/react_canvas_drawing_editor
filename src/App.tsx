import { Suspense } from 'react'
import RootRouter from './router/RootRouter'

function App() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <RootRouter />
    </Suspense>
  )
}

export default App
