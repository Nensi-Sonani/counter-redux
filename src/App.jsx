import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from './redux/Action'

function App() {
  let count=useSelector((count)=>count)
  let dispatch=useDispatch();

  return (
    <>
      <h1>count:{count}</h1>
      <button onClick={()=>dispatch(add())}>ADD</button>
      <button onClick={()=>dispatch(remove())}>REMOVE</button>
    </>
  )
}

export default App
