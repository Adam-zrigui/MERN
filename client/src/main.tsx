import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persister, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import { userApi } from './redux/api'
import Loading from './components/everyCom/Loading'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
 <BrowserRouter>
   <Provider store={store}>
    <ApiProvider api={userApi}>
     <PersistGate loading={<Loading />} persistor={persister}>
       <App />
      </PersistGate>
    </ApiProvider>
  </Provider>
 </BrowserRouter>
</React.StrictMode>
)
