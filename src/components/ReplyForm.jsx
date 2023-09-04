import React from 'react'
import FormLayout from './FormLayout'

const ReplyForm = ({ user, closeReplyForm }) => {
  return (
    <FormLayout user={user}>
      <div >
        <button
          className='block bg-moderate-blue text-white py-3 px-6  h-fit rounded-md uppercase text-[14px] hover:opacity-50 transition'
          type="submit">
          reply
        </button>
        <button
          onClick={closeReplyForm}
          className='block bg-soft-red text-white py-3 px-6 mt-2 h-fit rounded-md uppercase text-[14px] hover:opacity-50 transition'>
          cancel
        </button>
      </div>
    </FormLayout>

  )
}

export default ReplyForm