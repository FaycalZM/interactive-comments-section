import React, { useEffect, useRef, useState } from 'react'
import FormLayout from './FormLayout'
import { useComments } from '../context/CommentsProvider'

const ReplyForm = ({ replyToUser, closeReplyForm, commentId }) => {

  const { addReplyHandler, currentUser, newId } = useComments();
  const InputRef = useRef();
  const [inputValue, setInputValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(
    () => {
      setIsDisabled(inputValue ? false : true);
    }, [inputValue]
  )
  return (
    <FormLayout
      user={currentUser}
      InputRef={InputRef}
      inputValue={inputValue}
      setInputValue={setInputValue}>

      <div >
        <button
          disabled={isDisabled}
          onClick={() => {
            let currentdate = new Date().toLocaleString();
            let id = newId();
            addReplyHandler(
              commentId,
              inputValue,
              currentdate,
              replyToUser.username,
              id,
              currentUser
            );
            setInputValue('');
            closeReplyForm();
          }}
          className='block bg-moderate-blue text-white py-3 px-6  h-fit rounded-md uppercase text-[14px] hover:opacity-50 transition disabled:opacity-50'
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