import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const data = useSelector((state) => state.counter.user)

  console.log(data)

  const navigate = useNavigate()

  const [loginEmail, setLoginEmail] = useState("")
  const [loginEmailError, setLoginEmailError] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [loginPasswordError, setLoginPasswordError] = useState("")
  const [passShow, passBlock] = useState(true)

  const passShowBlock = () => {
    passBlock(!passShow)
  }

  const handleLoginEmail = (e) => {
    setLoginEmail(e.target.value)
    setLoginEmailError("")
  }

  const handleLoginPassword = (e) => {
    setLoginPassword(e.target.value)
    setLoginPasswordError("")
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()

    if (loginEmail !== data.email) {
      setLoginEmailError("Enter Your Correct Email")
    }
    if (loginPassword !== data.password) {
      setLoginPasswordError("Enter Your Correct Password")
    }
    if(loginEmail === data.email && loginPassword === data.password){
      navigate("/welcome")
    }

  }

  return (
    <>
      <h1 className='text-5xl text-center mt-10'>Login Page</h1>
      <form onSubmit={handleLoginSubmit} className='flex items-center gap-5 flex-col mt-20'>

        <ul className='relative'>
          <input onChange={handleLoginEmail} type="email" placeholder='Email' className='w-[300px] border-2 py-2 rounded-xl px-2 outline-none' />
          <p className='absolute top-[-20px] text-red-400'>{loginEmailError}</p>
        </ul>

        <ul className='relative'>
          <input onChange={handleLoginPassword} type={passShow ? "password" : "text"} placeholder='password' className='w-[300px] border-2 py-2 rounded-xl px-2 outline-none' />
          <p className='absolute top-[-20px] text-red-400'>{loginPasswordError}</p>
          {
            passShow ?
            <FaRegEyeSlash onClick={passShowBlock} className='absolute right-4 top-2 text-[25px] cursor-pointer' />
            :
            <FaRegEye onClick={passShowBlock} className='absolute right-4 top-2 text-[25px] cursor-pointer' />
          }
        </ul>

        <button className='w-[200px] border-2 py-2 rounded-2xl hover:bg-black hover:text-white duration-300'>Login</button>
      </form>
    </>
  )
}

export default Login