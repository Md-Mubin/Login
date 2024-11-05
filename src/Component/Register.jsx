import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const Register = () => {

    // ========== All useState Hooks
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [rePasswordError, setRePasswordError] = useState("")
    const [show, setShow] = useState(true)
    const [rePassShow, rePassBlock] = useState(true)

    // for password toggle to show or block
    const showBlock = () => {
        setShow(!show)
    }

    // for Re-password toggle to show or block
    const reShowBlock = () => {
        rePassBlock(!rePassShow)
    }

    // firebase auth
    const auth = getAuth();


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
        if (rePassword !== password) {
            setRePasswordError("Re Enter Password Correctly")
        }

       else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ...
                });

        }
    }


    return (
        <>
            <section className='w-full h-[100vh] bg-gradient-to-r from-sky-200 via-sky-500 to-blue-200 pt-10'>
                <h1 className='text-5xl font-semibold text-center'>Register Form</h1>

                <form onSubmit={handleSubmit} className=' flex items-center gap-5 flex-col mt-40 '>

                    <ul className='relative'>
                        <input onChange={(e) => { setEmail(e.target.value), setEmailError("") }} type="email" placeholder='Your Email' className='w-[500px] border-2 py-5 pl-2 outline-none rounded-xl' />
                        <p className='absolute top-[-20px] text-white'>{emailError}</p>
                    </ul>

                    <ul className='relative'>
                        <input onChange={(e) => { setPassword(e.target.value), setPasswordError("") }} type={show ? "password" : "text"} placeholder='Your Password' className='w-[500px] border-2 py-5 pl-2 outline-none rounded-xl' />
                        <p className='absolute top-[-20px] text-white'>{passwordError}</p>

                        <li onClick={showBlock} className='absolute right-4 top-[18px] text-[30px]'>
                            {
                                show ? <FaRegEyeSlash /> : <FaRegEye />
                            }
                        </li>
                    </ul>

                    <ul className='relative'>
                        <input onChange={(e) => { setRePassword(e.target.value), setRePasswordError("") }} type={rePassShow ? "password" : "text"} placeholder='Re-enter Password' className='w-[500px] border-2 py-5 pl-2 outline-none rounded-xl' />
                        <p className='absolute top-[-20px] text-white'>{rePasswordError}</p>
                        
                        <li onClick={reShowBlock} className='absolute right-4 top-[18px] text-[30px]'>
                            {
                                rePassShow ? <FaRegEyeSlash/> : <FaRegEye/>
                            }
                        </li>
                    </ul>

                    <button className='w-[200px] py-2 rounded-2xl bg-gradient-to-t hover:bg-gradient-to-br hover:ring-2 hover:ring-sky-300 duration-200 text-white '>Register</button>
                </form>
            </section>
        </>
    )
}

export default Register