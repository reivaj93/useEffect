import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <>
      <h1>Example of Component Cycles with UseEffect</h1>
      {showCounter && <Counter/>}
      <button onClick={()=> setShowCounter(!showCounter)}>
      {showCounter ? 'Hide' : "Show"} Counter
      </button>
    </>
  )
}

export default App
