import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUp from './Pages/Signup'
import SignIn from './Pages/Signin'
import Customize from './Pages/Customize'
import { userDataContext } from './Context/UserContext'
import Home from './Pages/Home'
import Customize2 from './Pages/Customize2'

function App() {
  const {userData,setUserData}=useContext(userDataContext)
  return (
   <Routes>
     <Route path='/' element={(userData?.assistantImage && userData?.assistantName)? <Home/> :<Navigate to={"/customize"}/>}/>
    <Route path='/signup' element={!userData?<SignUp/>:<Navigate to={"/"}/>}/>
     <Route path='/signin' element={!userData?<SignIn/>:<Navigate to={"/"}/>}/>
      <Route path='/customize' element={userData?<Customize/>:<Navigate to={"/signup"}/>}/>
       <Route path='/customize2' element={userData?<Customize2/>:<Navigate to={"/signup"}/>}/>
   </Routes>
  )
}

export default App