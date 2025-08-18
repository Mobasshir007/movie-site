import React, { useEffect } from 'react'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  const Navigate = useNavigate();
  useEffect(()=>{

    onAuthStateChanged(auth, async (user)=>{
      if(user){
        console.log("Logged In");
        Navigate('/');
      }else{
        console.log("Logged Out");
        Navigate('/login')
      }
    })
  },[])
  return (
    <div>
      <ToastContainer theme='dark'/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='player/:id' element={<Player/>}/>
    </Routes>
    </div>
  )
}

export default App