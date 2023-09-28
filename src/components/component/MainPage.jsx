import React from 'react'

import { Outlet } from 'react-router-dom'
import "../css/main.css"
import Appbar from './Appbar'


const MainPage = () => {
    return (
        <div className='main flex'>
            <Appbar />
            <Outlet />

        </div>
    )
}

export default MainPage