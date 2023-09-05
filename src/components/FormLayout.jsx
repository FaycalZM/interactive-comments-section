import React from 'react'

const FormLayout = ({ children, user, InputRef, setInputValue, inputValue }) => {

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className='flex tablet:flex-row flex-col w-full justify-between gap-4 bg-white p-6 mt-3 rounded-md'>
      <img
        className='w-10 h-fit tablet:block hidden'
        src={user.image.png}
        alt="avatar_image" />
      <textarea
        placeholder='Add a comment...'
        ref={InputRef}
        onChange={() => setInputValue(InputRef.current.value)}
        value={inputValue}
        className='resize-none font-rubik text-dark-blue border-[1px] border-light-grayish-blue rounded-md flex-1 h-24 py-3 px-6 focus:outline-none focus:border-grayish-blue' />
      <div className='flex justify-between'>
        <img
          className='w-10 h-fit tablet:hidden block'
          src={user.image.png}
          alt="avatar_image" />
        {children}
      </div>

    </form>
  )
}

export default FormLayout