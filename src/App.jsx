import './App.css'
import useRouteElement from './useRouteElement'

function App() {
  const element = useRouteElement()
  return (
    <div className='bg-white'>
      {element}
    </div>
  )
}

export default App
