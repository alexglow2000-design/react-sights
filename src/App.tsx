import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

function App() {
  
  return (
    <>
    <BrowserRouter basename="/rostov-on-map">
      <Router/>
    </BrowserRouter>
    </>
  )
}

export default App
