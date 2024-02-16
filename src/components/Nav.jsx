import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Nav() {

    const {theme,setTheme} = useContext(UserContext)
    
    function changeTheme(){
        setTheme(!theme);
    }

    return (
        <div className='pt-5 px-5'>
            <ul className='flex text-xl bg-blue-900 text-textColor font-serif space-x-9 justify-center pr-9 py-2 rounded-full font-semibold'>
                <li className=' cursor-pointer'> <a href='/'> Home </a></li>
                <li className=' cursor-pointer'> <a href='about'> About </a></li>
                <li className=' cursor-pointer'><a href='profile'> Profile </a></li>
                <li>Light Theme <input type="checkbox" onChange={changeTheme} /></li>

            </ul>
        </div>
    )
}

export default Nav
