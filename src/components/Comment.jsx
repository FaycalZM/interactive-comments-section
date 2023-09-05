import React, { useState } from 'react'
import Counter from './Counter'
import { FaReply, FaTrash, FaEdit } from 'react-icons/fa'
import RepliesList from './RepliesList'
import ReplyForm from './ReplyForm'
import { useComments } from '../context/CommentsProvider'

// the 'id' below is the comment's id
const Comment = ({ id, content, createdAt, score, user, replies }) => {

  const { currentUser, deleteCommentHandler } = useComments();
  
  const [isReplyFormOpened, setIsReplyFormOpened] = useState(false);

  const openReplyForm = () => {
    setIsReplyFormOpened(true);
  }
  const closeReplyForm = () => {
    setIsReplyFormOpened(false);
  }


  return (
    <div className='comment mb-8'>
      <div className='bg-white flex gap-6 bg-opacity-90 p-6 rounded-md mb-2'>
        <Counter
          commentId={id}
          score={score} />
        <div className='comment-content w-full'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
              <img
                className='w-8'
                src={user.image.png}
                alt="avatar_image" />
              <p className='text-dark-blue font-medium'>{user.username} </p>
              <p className='text-grayish-blue font-normal'>{createdAt} </p>
            </div>
            {
              user.username === currentUser.username
                ? <div className='flex gap-6'>
                  <button
                    onClick={() => {
                      deleteCommentHandler(id);
                    }}
                    className='flex items-center gap-2 text-soft-red font-medium hover:text-pale-red transition ease-in'>
                    <FaTrash /> Delete
                  </button>
                  <button className='flex items-center gap-2 text-moderate-blue font-medium hover:text-light-grayish-blue transition ease-in'>
                    <FaEdit /> Edit
                  </button>
                </div>
                : <button
                  onClick={openReplyForm}
                  className='reply-btn flex items-center gap-2 text-moderate-blue font-medium
                 hover:text-light-grayish-blue transition ease-in'>
                  <FaReply /> Reply
                </button>
            }
          </div>
          <p className='mt-4 w-[97.5%] text-grayish-blue opacity-90'>
            {content}
          </p>
        </div>
      </div>
      {
        isReplyFormOpened
          ? <ReplyForm
            closeReplyForm={closeReplyForm}
            replyToUser={user}
            commentId={id} />
          : null
      }


      <RepliesList
        commentId={id}
        replies={replies} />


    </div>

  )
}

export default Comment