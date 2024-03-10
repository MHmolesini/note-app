import React, { useEffect, useState } from 'react'
import { SignUp, Login, Homepage } from './pages'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  const [token, setToken] = useState(false)

  if (token){
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  console.log(token)

  useEffect(() => {
    if (sessionStorage.getItem('token')){
      const data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])

  console.log(token)

  return (
    <div>
      <Routes>
        <Route path={'/signup'} element={<SignUp/>}/>
        <Route path={'/'} element={<Login setToken={setToken}/>}/>
        {token ?
          <Route path={'/homepage'} element={<Homepage token={token}/>}/>
        : ''}
      </Routes>
    </div>
  )
}

export default App