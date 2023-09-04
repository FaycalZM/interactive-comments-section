import React from 'react'
import FormLayout from './FormLayout'


const NewCommentForm = ({ user }) => {
  return (
    <FormLayout user={user}>
      <div >
        <button
          className='block bg-moderate-blue text-white py-3 px-6  h-fit rounded-md uppercase text-[14px] hover:opacity-50 transition'
          type="submit">
          send
        </button>
      </div>
    </FormLayout>
  )
}

export default NewCommentForm