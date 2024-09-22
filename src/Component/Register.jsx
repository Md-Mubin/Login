import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerForm } from '../Slices/MainSlices'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const Register = () => {
    
    const [email          , setEmail]           = useState("")
    const [emailError     , setEmailError]      = useState("")
    const [password       , setPassword]        = useState("")
    const [passwordError  , setPasswordError]   = useState("")
    const [rePassword     , setRePassword]      = useState("")
    const [rePasswordError, setRePasswordError] = useState("")
    const [show           , block]              = useState(true)
    const [rePassShow     , rePassBlock]        = useState(true)

    const showBlock =()=>{
        block(!show)
    }

    const reShowBlock = ()=>{
        rePassBlock(!rePassShow)
    }

    const naviget = useNavigate()

    const dispatch = useDispatch()

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailError("")
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordError("")
    }

    const handleRePassword = (e) => {
        setRePassword(e.target.value)
        setRePasswordError("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email) {
            setEmailError("Enter Your Email")
        }

        if (!password) {
            setPasswordError("Enter Your Password")
        }

        if (!rePassword) {
            setRePasswordError("Re Enter Password")
        }

        if (password != rePassword) {
            setRePasswordError("Re Enter Password Correctly")
        }
        else {
            if (email != "", password != "") {
                naviget("/login")
                dispatch(registerForm({ email, password }))
            }
        }

    }


    return (
        <>
            <h1 className='text-5xl text-center mt-10'>Register Page</h1>

            <form onSubmit={handleSubmit} className=' flex items-center gap-5 flex-col mt-20'>

                <ul className='relative'>
                    <input onChange={handleEmail} type="email" placeholder='Your Email ' className='w-[300px] border-2 py-2 pl-2' />
                    <p className='absolute top-[-20px] text-red-400'>{emailError}</p>
                </ul>

                <ul className='relative'>
                    <input onChange={handlePassword} type={show? "password" : "text"} placeholder='Your Password' className='w-[300px] border-2 py-2 pl-2' />
                    <p className='absolute top-[-20px] text-red-400'>{passwordError}</p>
                    {
                        show?
                        <FaRegEye onClick={showBlock} className='absolute right-4 top-2 text-[25px] cursor-pointer'/>
                        :
                        <FaRegEyeSlash onClick={showBlock} className='absolute right-4 top-2 text-[25px] cursor-pointer'/>
                    }
                </ul>

                <ul className='relative'>
                    <input onChange={handleRePassword} type={rePassShow? "password" : "text"} placeholder='Re-enter Password' className='w-[300px] border-2 py-2 pl-2' />
                    <p className='absolute top-[-20px] text-red-400'>{rePasswordError}</p>
                    {
                        rePassShow?
                        <FaRegEye onClick={reShowBlock} className='absolute right-4 top-2 text-[25px] cursor-pointer'/>
                        :
                        <FaRegEyeSlash onClick={reShowBlock} className='absolute right-4 top-2 text-[25px] cursor-pointer'/>
                    }
                </ul>

                <button className='w-[200px] border-2 py-2 rounded-2xl hover:bg-black hover:text-white duration-300'>Register</button>
            </form>
        </>
    )
}

export default Register