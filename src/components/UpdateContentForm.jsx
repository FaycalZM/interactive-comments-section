import React from 'react'
import { useComments } from '../context/CommentsProvider';

const UpdateContentForm = ({ updateContentRef, setCommentContent, commentContent, setIsEditing, commentId, replyId = null }) => {
  const { editCommentHandler, editReplyHandler } = useComments();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

      }}
      className='mt-4' >
      <textarea
        className='resize-none font-rubik text-dark-blue border-[1px] border-light-grayish-blue rounded-md w-full h-24 py-1 px-2 focus:outline-none focus:border-grayish-blue'
        ref={updateContentRef}
        onChange={() => setCommentContent(updateContentRef.current.value)}
        value={commentContent} />
      <button
        onClick={() => {
          let currentdate = new Date().toLocaleString();
          if (replyId) {
            editReplyHandler(commentId, replyId, commentContent, currentdate);
          }
          else {
            editCommentHandler(commentId, commentContent, currentdate);
          }
          setIsEditing(false);
        }}
        className='bg-moderate-blue float-right text-white mt-3 py-3 px-6 h-fit rounded-md uppercase text-[14px] hover:opacity-50 transition'
        type="submit">
        update
      </button>
    </form>
  )
}

export default UpdateContentForm