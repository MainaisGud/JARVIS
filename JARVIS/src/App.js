import React, { Fragment, useState } from 'react'
import Home from '../src/Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'

const App = () => {
  const [state, updateState] = useState([1, 0])
  const handleClick = value => {
    updateState([value[0], value[1]])
    console.log(value)
  }
  return (
    <Fragment>
      <Home></Home>
    </Fragment>
  )
}

export default App
