import React from 'react'
import { useComments } from '../context/CommentsProvider'

const DeleteModal = () => {
    const { closeDeleteModal,
        deleteCommentHandler,
        deleteReplyHandler,
        deletedCommentId,
        deletedReplyId = null,
        resetIDs
    } = useComments();
    return (
        <div className='fixed flex justify-center items-center h-full w-[100vw] top-0 left-0 bg-black bg-opacity-50 z-10'>
            <div className='bg-white desktop:w-1/5 tablet:w-1/2 w-[85%] px-4 py-6 rounded-md'>
                <p className='text-xl font-medium text-dark-blue'>Delete comment</p>
                <p className='mt-3 text-grayish-blue text-[15px] '>Are you sure you want to delete this comment? This will remove the comment permanently and can't be undone.</p>
                <div className='flex justify-between text-white font-medium mt-3'>
                    <button
                        onClick={() => {
                            resetIDs();
                            closeDeleteModal();
                        }}
                        className='py-2 px-4 bg-grayish-blue uppercase rounded-md hover:opacity-50 transition'>
                        no, cancel
                    </button>
                    <button
                        onClick={() => {
                            if (deletedReplyId) {
                                deleteReplyHandler(deletedCommentId, deletedReplyId);
                            }
                            else
                                deleteCommentHandler(deletedCommentId);
                            resetIDs();
                            closeDeleteModal();
                        }}
                        className='py-2 px-4 bg-soft-red uppercase  rounded-md hover:opacity-50 transition'>
                        yes, delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal