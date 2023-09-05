import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useComments } from '../context/CommentsProvider'

const Counter = ({ score, commentId, replyId = null }) => {

    const { voteCommentHandler, voteReplyHandler } = useComments();

    return (
        <div className='w-fit h-fit flex tablet:flex-col flex-row items-center gap-4 px-3 tablet:py-4 py-2 rounded-xl bg-very-light-gray'>
            <button
                onClick={() => {
                    if (!replyId)
                        voteCommentHandler(commentId, 1);
                    else
                        voteReplyHandler(commentId, replyId, 1);
                }}
                className='text-light-grayish-blue text-sm hover:text-moderate-blue transition' >
                <FaPlus />
            </button>
            <p className='text-lg text-moderate-blue font-medium '>{score} </p>
            <button
                onClick={() => {
                    if (!replyId)
                        voteCommentHandler(commentId, -1);
                    else
                        voteReplyHandler(commentId, replyId, -1);
                }}
                className='text-light-grayish-blue text-sm hover:text-moderate-blue transition'>
                <FaMinus />
            </button>
        </div>
    )
}

export default Counter