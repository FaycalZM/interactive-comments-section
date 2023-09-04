import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Counter = ({ score }) => {
    return (
        <div className='w-fit h-fit flex flex-col items-center gap-4 px-3 py-4 rounded-xl bg-very-light-gray'>
            <button className='text-light-grayish-blue text-sm hover:text-moderate-blue transition' >
                <FaPlus />
            </button>
            <p className='text-lg text-moderate-blue font-medium '>{score} </p>
            <button className='text-light-grayish-blue text-sm hover:text-moderate-blue transition'>
                <FaMinus />
            </button>
        </div>
    )
}

export default Counter