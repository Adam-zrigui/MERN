import { useAuthState } from 'react-firebase-hooks/auth'
import {Route , Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Form from './components/Form'
import FourOFour from './components/FourOFour'
import Home from './components/Home'
import Nav from './components/Nav'
import Posted from './components/Posted'
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
