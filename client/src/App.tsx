import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux/es/exports'
import {Route , Routes } from 'react-router-dom'
import Footer from './components/everyCom/Footer'
import Form from './components/db/Form'
import FourOFour from './components/everyCom/FourOFour'
import Home from './components/Home'
import Nav from './components/everyCom/Nav'
import Posted from './components/db/Posted'
import { auth } from './config/firebase'
function App() {
 const [user] = useAuthState(auth)
  return (
    <>
<Nav />
<Routes>
{user ? <>
<Route path='/' element={<Home />} />
<Route path='/posts' element={<Posted />} />
<Route path='/submit' element={<Form />} />
<Route path='*' element={<FourOFour />} />
</> : <>
<Route path='*' element={<FourOFour />} />
<Route path='/' element={<Home />} />
</>}
</Routes>
<Footer />
   </>
  )
}
export default App
