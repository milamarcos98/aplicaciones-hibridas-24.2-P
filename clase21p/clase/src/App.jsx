import React, {Suspense} from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import { About, Admin, Contact, Dashboard, Home, Navbar, Settings, UserProfile } from './components'
// npm i react-router-dom
import {AnimatePresence} from "framer-motion"

function NotFound(){
  return <h2>404: Page Not Found!</h2>
}

// lazy loading

function App() {

  // https://www.framer.com/motion/

  return (
    <>
    <Navbar/>
    <Suspense fallback={<div>Loading...</div>}>
    <AnimatePresence mode='wait'>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/user/:id' element={ <UserProfile/> } />
        <Route path='/admin' element={ <Admin/> } >
          <Route path='dashboard' element={ <Dashboard/> } />
          <Route path='settings' element={ <Settings/> } />
        </Route>
        <Route path='/contact' element={ <Contact/> } />
        {/* default - 404 */}
        <Route path='*' element={ <NotFound/> } />
      </Routes>
    </AnimatePresence>
    </Suspense>
    </>
  )
}

export default App
