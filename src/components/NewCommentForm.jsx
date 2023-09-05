import React, { useEffect, useRef, useState } from 'react'
import FormLayout from './FormLayout'


const NewCommentForm = ({ user, onAddComment, newId }) => {
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
      user={user}
      InputRef={InputRef}
      inputValue={inputValue}
      setInputValue={setInputValue}>
      <div >
        <button
          onClick={() => {
            let currentdate = new Date().toLocaleString();
            let id = newId();
            onAddComment(
              inputValue,
              currentdate,
              id,
              user
            );
            setInputValue('');
          }}
          disabled={isDisabled}
          className='block bg-moderate-blue text-white py-3 px-6 h-fit rounded-md uppercase text-[14px] hover:opacity-50 transition disabled:opacity-50'
          type="submit">
          send
        </button>
      </div>
    </FormLayout>
  )
}

export default NewCommentForm