import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import Page404 from './pages/404'

export default class Routers extends Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<LandingPage/>} />
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/register' element={<RegisterPage/>} />
                <Route path="*" element={<Page404/>}/>            
            </Routes>
        )
    }
}
