import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import Nav from './Nav'


function About() {

    const {theme,setTheme} = useContext(UserContext)
    
    return (
        
            <div className={theme ? 'bg-dBackgroundColor rounded h-96' : 'bg-lBackgroundColor rounded h-96'}>
            <Nav />

            <div className={theme ? 'text-textColor text-3xl text-left pl-10 pt-10 space-y-2' : 'text-black text-3xl text-left pl-10 pt-10 space-y-2'}>
                <p>This is About Page.</p>
                <p>This is Example of CSS Variables in Tailwind CSS.</p>
            </div>
        </div>

    )
}

export default About
