import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post, { User } from './Post'

import { useGetDataQuery } from '../../redux/api';
export default function Posted() {
const  { data } = useGetDataQuery("getdb")
  return (
      <div className="">
        <div className='flex flex-wrap'>
        {data && data.message.map((user: User  , key :number) => {
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
