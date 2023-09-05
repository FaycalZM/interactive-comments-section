import React, { useState } from 'react'

const FormLayout = ({ children, user, InputRef, setInputValue, inputValue }) => {

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className='flex w-full justify-between gap-4 bg-white p-6 mt-3 rounded-md'>
      <img
        className='w-10 h-fit'
        src={user.image.png}
        alt="avatar_image" />
      <textarea
        ref={InputRef}
        onChange={() => setInputValue(InputRef.current.value)}
        value={inputValue}
        className='resize-none font-rubik text-dark-blue border-[1px] border-light-grayish-blue rounded-md flex-1 h-24 py-3 px-6 focus:outline-none focus:border-grayish-blue' />
      {children}
    </form>
  )
}

export default FormLayout