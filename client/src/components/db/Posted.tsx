import Post, { User } from './Post'
import { useGetDataQuery } from '../../redux/api';
import Loading from '../everyCom/Loading';
export default function Posted() {
const  { data , isLoading } = useGetDataQuery("getdb")
if (isLoading) {
return <Loading />;
}  
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
