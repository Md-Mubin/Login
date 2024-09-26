import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const data = useSelector((state) => state.counter.user)

  const navigate = useNavigate()

  const [loginEmail,          setLoginEmail]          = useState("")
  const [loginEmailError,     setLoginEmailError]     = useState("")
  const [loginPassword,       setLoginPassword]       = useState("")
  const [loginPasswordError,  setLoginPasswordError]  = useState("")
  const [passShow,            passBlock]              = useState(true)

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
    if (loginEmail === data.email && loginPassword === data.password) {
      navigate("/welcome")
      toast.success('Login Successful', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });
    }

  }


  return (
    <>
      <section className='w-full h-[100vh] bg-gradient-to-r from-sky-200 via-sky-500 to-blue-200 pt-10'>
        <h1 className='text-5xl font-semibold text-center'>Login Form</h1>
        <form onSubmit={handleLoginSubmit} className='flex items-center gap-5 flex-col mt-20'>

          <ul className='relative'>
            <input onChange={handleLoginEmail} type="email" placeholder='Email' className='w-[300px] border-2 py-2 rounded-xl px-2 outline-none' />
            <p className='absolute top-[-20px] text-white'>{loginEmailError}</p>
          </ul>

          <ul className='relative'>
            <input onChange={handleLoginPassword} type={passShow ? "password" : "text"} placeholder='password' className='w-[300px] border-2 py-2 rounded-xl px-2 outline-none' />
            <p className='absolute top-[-20px] text-white'>{loginPasswordError}</p>
            {
              passShow ?
                <FaRegEyeSlash onClick={passShowBlock} className='absolute right-4 top-2 text-[25px] cursor-pointer' />
                :
                <FaRegEye onClick={passShowBlock} className='absolute right-4 top-2 text-[25px] cursor-pointer' />
            }
          </ul>

          <button className='w-[200px] py-2 rounded-2xl bg-gradient-to-t hover:bg-gradient-to-br hover:ring-2 hover:ring-sky-300 duration-200 text-white '>Login</button>
          </form>
      </section>
    </>
  )
}

export default Login