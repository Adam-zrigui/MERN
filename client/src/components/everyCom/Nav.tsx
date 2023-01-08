import React from 'react'
import { Link } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { signOut } from 'firebase/auth'
import { provider , auth } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import logo from '../../assets/logo.png'
export default function Nav() {
 const [user] = useAuthState(auth)
  const signIn = async () => {
  await signInWithPopup(auth , provider)
}
const OUT = () => signOut(auth)
  return (
    <div className='h-[11.6vh] items-center flex justify-between bg-gray-400 rounded-md flex-row'>
<div className="flex bg-gray-400">
  <img src={logo} className="object-cover App-logo  w-20 bg-gray-400 " alt="" />
  <h1 className="title text-6xl text-center font-semibold ml-6 text-black bg-gray-400">posted</h1>
</div>
<div className=" bg-gray-400 mr-7 ">
{user ? <>
  <ul className="flex bg-gray-400">
  <Link to='/'><li className="bg-gray-400   hover:cursor-pointer hover:text-blue-500 p-4 text-black font-bold text-2xl">home</li></Link>
<Link to='/submit'>  <li className="bg-gray-400   hover:cursor-pointer hover:text-blue-500 p-4 text-black font-bold text-2xl">apply for jobs</li></Link>
<Link to='/posts'>  <li className="bg-gray-400   hover:cursor-pointer hover:text-blue-500 p-4 text-black font-bold text-2xl">posts</li></Link>
<Link to='/'> <li onClick={OUT}  className="bg-gray-400  hover:cursor-pointer hover:text-blue-500 p-4 text-black font-bold  text-2xl">sign out</li></Link>  
</ul>
</> : <><ul className="flex">
<Link to='/'>  <li className="bg-gray-400 hover:text-7xl hover:cursor-pointer hover:text-blue-500 p-4 text-black font-bold text-2xl" onClick={signIn}>sign in</li></Link>
</ul></>}
</div>
    </div>
  )
}
