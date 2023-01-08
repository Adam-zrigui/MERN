import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/store';
import { editSlice, FetchPosts } from '../../redux/edit';
import { store } from '../../redux/store';
import { ThunkActionDispatch, ThunkDispatch } from 'redux-thunk';
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import { AnyAction, AsyncThunkAction } from '@reduxjs/toolkit';
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

export default function Posted() {
const [list , setthat] = useState([]);
useEffect(  () => {
 axios.get("http://localhost:5500/getdb").then((response) => {
  setthat(response.data.message)
 })
}, [])
  return (
      <div className="">
        <div className='flex flex-wrap'>
        {list.map((user: User  , key :number) => {
        return (
   <i key={key}>
   <Post  user={user} />
   </i>
)
 })}               
  </div>
  </div>
  )
}
