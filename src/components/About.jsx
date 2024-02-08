import React from 'react';

function About() {
    return (
        <div className='bg-backgroundColor rounded h-96'>
            <div className='pt-5 px-5'>
                <ul className='flex text-xl bg-navBg text-textColor font-serif space-x-9 justify-center pr-9 py-2 rounded-full font-semibold'>
                    <li className=' cursor-pointer'> <a href='/'> Home </a></li>
                    <li className=' cursor-pointer'> <a href='about'> About </a></li>
                    <li className=' cursor-pointer'><a href='profile'> Profile </a></li>

                </ul>
            </div>

            <div className='text-textColor text-3xl text-left pl-10 pt-10 space-y-2'>
                <p>This is About Page.</p>
                <p>This is Example of CSS Variables in Tailwind CSS.</p>
            </div>
        </div>

    )
}

export default About
