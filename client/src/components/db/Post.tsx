import axios from 'axios';
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineClose } from 'react-icons/ai';
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../config/firebase';
import { deletePost } from '../../redux/edit';
import { selectUser } from '../../redux/store';
interface User {
    username: string;
    age: number;
    email: string;
    skill: string;
    description: string;
    url:string;
    _id: object;
    discord: string;
    twitter: string;
    linkedIn: string;
    github: string;
    uid: number;
  }
export default function Post({user}: {user: User}) {
    const [addictionState, setAddictionState] = useState<any>({});
    const [fire] = useAuthState(auth); 
    const [up , setUp] = useState(false)
    const [namer , SetNamer] = useState("");
    const dispatch = useDispatch()
const [Edit, setEdit] = useState(user);
    const submission  = useSelector(selectUser)
    console.log(submission);
    const DelReq = (id: object) => {
        axios.delete(`http://localhost:5500/deletedb/${id}`)
      }
      const UpName = (id : any) => {
        axios.put("http://localhost:5500/updatedb", {
          id,
         namer,
        })
      }
  return (
    <>
{ !up ?  <div className="flex">
    <div className="flex justify-start items-start my-6 mx-20 flex-col rounded-lg h-[500px]  w-[27rem] bg-slate-700">
     <div className="h-21 w-[100%] flex justify-center">
       <img src={user.url} alt="error wait" className='border-4 border-slate-600 object-cover ml-5 mb-3  rounded-[50%] w-16 mt-4' />
       </div>
{ fire?.photoURL == user.url &&    <div className=" w-full h-5  relative bottom-20">
{ !addictionState[JSON.stringify(user._id)] ?      <FiMoreVertical className='mr-3 relative left-96'  onClick={() => setAddictionState({...addictionState, [JSON.stringify(user._id)]: true})}  />    : <>
<AiOutlineClose className='mr-3 text-2xl relative left-96'  onClick={() => setAddictionState({...addictionState, [JSON.stringify(user._id)]: false})} />
<div className="bg-black  w-28  bottom-5 rounded-lg  relative left-[105%]">
<button className='w-full my-4 text-blue-400 hover:text-white hover:bg-blue-400 rounded-lg font-bold' onClick={() => UpName(user._id)}>Update username</button>
<button className='w-full my-4 text-blue-400 hover:text-white hover:bg-blue-400 rounded-lg font-bold'>Update Age</button>
<button className='w-full my-4 text-blue-400 hover:text-white hover:bg-blue-400 rounded-lg font-bold'>Update Email</button>
<button className='w-full my-4 text-blue-400 hover:text-white hover:bg-blue-400 rounded-lg font-bold'>Update Skill</button>
<button className='w-full my-4 text-blue-400 hover:text-white hover:bg-blue-400 rounded-lg font-bold'>Update description</button>
<button className='w-full my-4 text-red-500 hover:text-white hover:bg-red-500 rounded-lg font-bold' onClick={() => {
DelReq(user._id)}}>delete post</button>
</div>
</>   }
 </div>
}
        <h1 className="text-3xl w-[100%] text-center text-blue-400 font-extrabold  mt-3 mb-3">{user.username}</h1>
        <p className='w-[100%] text-center font-bold text-white text-lg mb-2'>Age: {user.age}</p>
      <hr  />
      <p className='text-[#141535] w-full text-center font-bold text-lg relative mb-5 mt-4'>email: {user.email}</p> 
<hr className='mb-3'/>
   { !user.discord && !user.twitter && !user.github ?  
       <div className="flex  flex-wrap w-[100%]"> 
   <h4 className='text-lg border-2 border-sky-400 bg-slate-900 text-center rounded-md w-[95%] ml-3 mb-6 font-semibold'>{user.skill}</h4>
     </div> :
     <div className="">
        <h4 className='text-lg border-2 border-sky-400 bg-slate-900 text-center rounded-md w-36 ml-3 mb-3 font-semibold'>{user.skill}</h4>
         <div className="flex  flex-wrap h-3 relative bottom-8 left-40">
           {user.discord && <>
           <a className='text-2xl relative bottom-7 left-5 mx-3 group' title='discord' href={user.discord} target="_blank">
           <p className='relative bottom-2 w-16 text-center right-5 text-sm bg-black scale-0 group-hover:scale-100  rounded-md'>discord</p>
           <FaDiscord />
           </a></>}
           {user.discord && <>
           <a className=' text-center text-2xl relative bottom-7 left-5 mx-3 group' title='twitter' href={user.twitter} target="_blank">
           <p className='relative bottom-2 w-16 text-center right-5 scale-0 group-hover:scale-100 text-sm bg-black  rounded-md'>twitter</p>
           <FaTwitter  />
           </a></>}   {user.discord && <>
           <a className='text-2xl relative bottom-7 left-5  mx-3 group' title='github' href={user.github} target="_blank">
           <p className='relative bottom-2 w-16 text-center right-5 text-sm bg-black scale-0 group-hover:scale-100 rounded-md'>github</p>
           <FaGithub />
           </a></>}
         </div>
   </div>}
         <p className='text-sm bg-slate-800 h-24 border-2 border-red-400  rounded-md w-[95%] ml-2.5 font-medium'>{user.description}</p>
         <a href={user.linkedIn} className='flex justify-center w-[100%]'>
      <button className='flex justify-center items-center h-8 mt-3 w-[95%] rounded-md  text-1xl  focus:bg-red-900 hover:bg-red-700 bg-red-500'>
    <FaLinkedin className='mt-1.5 mr-2'/>
        hire me!
        </button>   
        </a>
    </div>
    </div>: <>
    a</>}
    </>
    )
    }