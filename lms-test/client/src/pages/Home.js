import React from 'react'
import { Route } from 'react-router-dom'
import HomeNav from '../components/home/HomeNav'
import SignUpForm from  '../components/signup/SignUpForm'
import LoginForm from '../components/login/LoginForm'
import ApplyLeave from './ApplyLeave'

function Home() {
  return (
    <div>
        <header>
            <HomeNav/>
        </header>
        <main>
            <Route path='/signup'>
                <SignUpForm/>
            </Route>
            <Route path='/login'>
                <LoginForm/>
            </Route>
            <Route path='/apply-leave'>
                <ApplyLeave/>
            </Route>
        </main>
    </div>
  )
}

export default Home