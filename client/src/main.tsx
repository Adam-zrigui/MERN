import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persister, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
 <BrowserRouter>
   <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
       <App />
    </PersistGate>
  </Provider>
 </BrowserRouter>
</React.StrictMode>
)
