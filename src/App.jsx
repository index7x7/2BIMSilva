import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonAlert from './components/ButtonAlert'

function App() {
  const [ count, setCount ] = useState(1)
  const [ texto, setTexto ] = useState("")
  const handleClick = () => {
    setCount(count + 1)
  }
  const handleTexto = (e) => {
    setTexto(e.target.value)
    
  }


  return (
    <>
      
      <div className='card'>
        <input type="text" placeholder='digite aqui' onChange={handleTexto} />
        <button onClick={handleClick}> clique aqui</button>
        {count}
      </div>
    </>
  )
} 

export default App
