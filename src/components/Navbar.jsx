import React from 'react'
import { Link } from 'react-router-dom'

// Components
import { Search } from './Search'

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className='p-5 border-b flex flex-wrap justify-center sm:justify-between items-center dark:border-gray-700 border-gray-300'>
            <div className='flex justify-between items-center space-x-5 w-screen'>
                <Link to="/">
                    <p className='text-2xl bg-blue-500 font-bold text-white px-2 py-1 rounded dark:bg-gray-500 dark:text-gray-900'>
                        Search On Me 🔎
                    </p>
                </Link>
                <button type='buttton' onClick={() => setDarkTheme(!darkTheme)}
                    className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg'>
                    {darkTheme ? "Light💡" : "Dark 🌙"}
                </button>
            </div>
            <Search />
        </div>
    )
}
