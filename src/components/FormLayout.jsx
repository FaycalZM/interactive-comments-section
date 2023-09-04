import React from 'react'

const FormLayout = ({ children, user }) => {
  return (
    <form className='flex w-full justify-between gap-4 bg-white p-6 mt-3 rounded-md'>
      <img
        className='w-10 h-fit'
        src={user.image.png}
        alt="avatar_image" />
      <textarea className='resize-none font-rubik text-dark-blue border-[1px] border-light-grayish-blue rounded-md flex-1 h-24 py-3 px-6 focus:outline-none focus:border-grayish-blue' />
      {children}
    </form>
  )
}

export default FormLayout