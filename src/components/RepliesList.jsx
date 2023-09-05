import React from 'react'
import Reply from './Reply'

const RepliesList = ({ replies, commentId }) => {
  return (
    replies.length
      ? <div className='flex justify-end mt-4'>
        <div className='w-[1px] mx-10 bg-light-gray rounded-sm'></div>
        <div className=' w-[85%] flex flex-col gap-4'>
          {
            replies.map((reply) => {
              return <Reply key={reply.id} {...reply} commentId={commentId} />
            })
          }
        </div>
      </div>
      : null
  )
}

export default RepliesList