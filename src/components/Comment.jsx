import React, { useRef, useState } from 'react'
import Counter from './Counter'
import { FaReply, FaTrash, FaEdit } from 'react-icons/fa'
import RepliesList from './RepliesList'
import ReplyForm from './ReplyForm'
import { useComments } from '../context/CommentsProvider'
import UpdateContentForm from './UpdateContentForm'

// the 'id' below is the comment's id
const Comment = ({ id, content, createdAt, score, user, replies }) => {

  const { currentUser, setDeletedCommentId, openDeleteModal } = useComments();
  const [commentContent, setCommentContent] = useState(content);
  const updateContentRef = useRef();
  const [isEditing, setIsEditing] = useState(false);
  const [isReplyFormOpened, setIsReplyFormOpened] = useState(false);


  const openReplyForm = () => {
    setIsReplyFormOpened(true);
  }
  const closeReplyForm = () => {
    setIsReplyFormOpened(false);
  }


  return (
    <div className='comment mb-8'>
      <div className='bg-white flex tablet:flex-row flex-col-reverse gap-6 bg-opacity-90 p-6 rounded-md mb-2'>
        <div className='tablet:block flex justify-between items-center'>
          <Counter
            commentId={id}
            score={score} />
          {
            user.username === currentUser.username
              ? <div className='tablet:hidden flex gap-6'>
                <button
                  onClick={() => {
                    setDeletedCommentId(id);
                    openDeleteModal();
                  }}
                  className='flex items-center gap-2 text-soft-red font-medium hover:text-pale-red transition ease-in'>
                  <FaTrash /> Delete
                </button>
                <button
                  onClick={() => {
                    setIsEditing(true);
                  }}
                  className='flex items-center gap-2 text-moderate-blue font-medium hover:text-light-grayish-blue transition ease-in'>
                  <FaEdit /> Edit
                </button>
              </div>
              : <button
                onClick={openReplyForm}
                className='reply-btn tablet:hidden flex items-center gap-2 text-moderate-blue font-medium
                 hover:text-light-grayish-blue transition ease-in'>
                <FaReply /> Reply
              </button>
          }
        </div>
        <div className='comment-content w-full'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-3'>
              <img
                className='w-8'
                src={user.image.png}
                alt="avatar_image" />
              <p className='text-dark-blue font-medium'>{user.username} </p>
              {
                user.username === currentUser.username
                  ? <p className='bg-moderate-blue text-white px-1 rounded-sm'>you</p>
                  : null
              }
              <p className='text-grayish-blue font-normal'>{createdAt} </p>
            </div>
            {
              user.username === currentUser.username
                ? <div className='tablet:flex hidden gap-6'>
                  <button
                    onClick={() => {
                      setDeletedCommentId(id);
                      openDeleteModal();
                    }}
                    className='flex items-center gap-2 text-soft-red font-medium hover:text-pale-red transition ease-in'>
                    <FaTrash /> Delete
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(true);
                    }}
                    className='flex items-center gap-2 text-moderate-blue font-medium hover:text-light-grayish-blue transition ease-in'>
                    <FaEdit /> Edit
                  </button>
                </div>
                : <button
                  onClick={openReplyForm}
                  className='reply-btn tablet:flex hidden items-center gap-2 text-moderate-blue font-medium
                 hover:text-light-grayish-blue transition ease-in'>
                  <FaReply /> Reply
                </button>
            }
          </div>

          {
            isEditing
              ? <UpdateContentForm
                updateContentRef={updateContentRef}
                commentContent={commentContent}
                setCommentContent={setCommentContent}
                setIsEditing={setIsEditing}
                commentId={id}
              />
              : <p
                className='mt-4 w-[97.5%] text-grayish-blue opacity-90'>
                {content}
              </p>
          }

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