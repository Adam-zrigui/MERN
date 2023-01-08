import { useState , SyntheticEvent } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../config/firebase'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/edit'
export default function Form() {
  const dispatch = useDispatch()
 const [user] = useAuthState(auth)
 const [Use , setUse] = useState<string>(user?.displayName as string)
 const [age , setAge] = useState<string>("")
 const [desc , setDesc] = useState<string>("")
 const [email , setEmail] = useState<string>(user?.email as string)
const [skill, setSkills] = useState<string>("")
const [discord , setDis] = useState<string>('');
const [linkedIn , setIn] = useState<string>('');
const [twitter , setTwit] = useState<string>('');
const [github , setGit] = useState<string>('');
const [posted, setPosted] = useState<boolean>(false)
 const sub  = (e : SyntheticEvent) => {
e.preventDefault()

setUse('')
setEmail('')
setAge('')
setUse('')
setSkills('')
setDesc('')
setDis('')
setGit('')
setIn('')
setTwit('')
try {
  axios.post('http://localhost:5500/postdb', {
    username: Use,
    age,
    url: user?.photoURL,
    description: desc,
   skill,
   email,
   discord,
   linkedIn,
   twitter,
   github,

  }).then((res) => {
    alert('user created successfully')
    setPosted(true)
  })

} catch (error) {
  console.error(error)
} 

}
  return (
    <>
  <h1 className='text-center mt-12 font-bold text-2xl'>submit your form here:</h1>
<div className="div">
  <form action="" className="form" onSubmit={sub}>
  <label className="label">username: <br /></label>
    <input className='input' type="text" required defaultValue={user?.displayName as string} onChange={(e) => setUse(e.target.value)}  />
    <br />
  <label className="label">age:<br /></label>
    <input className='input' onChange={(e) => setAge(e.target.value) } min={12} max={100} type="number" required placeholder='69'  />
    <br /><label className="label">skills:<br /></label>
    <input className='input' onChange={(e) => setSkills(e.target.value) } type="text" required placeholder='web dev...'  />
    <br /><label className="label">email:<br /></label>
    <input className='input' onChange={(e) => setEmail(e.target.value) } type="email" defaultValue={email} required placeholder='example@gmail.com'  /> 
    <br /><label className="label">linkedIn:<br /></label>
    <input className='input' onChange={(e) => setIn(e.target.value) } required type="url"  placeholder='https://www.linkedin.com/in/user'  /> 
    <br /><label className="label">learning process:<br /></label>
    <textarea className='input'  onChange={(e) => setDesc(e.target.value) }  required placeholder='1 year since...'  />
    <br/><label className="label">discord (optional):<br /></label>
    <input className='input' onChange={(e) => setDis(e.target.value) } type="url"  placeholder='optional'  /> 
    <br /><label className="label">twitter  (optional):<br /></label>
    <input className='input' onChange={(e) => setTwit(e.target.value) } type="url"  placeholder='optional'  /> 
  <br />
  <label className="label">GitHub (optional):<br /></label>
    <input className='input' onChange={(e) => setGit(e.target.value) } type="url"  placeholder='optional'  /> 
    <br />
{!posted ? <button type='submit' className='button'>post</button> : <> <Link to={'/posts'}><button onClick={() => {setPosted(false)}}  className='done'>continue</button></Link> </>}
  </form>
</div>
    </>
  )
}
