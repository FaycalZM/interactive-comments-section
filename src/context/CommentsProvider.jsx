import React, { createContext, useContext, useReducer, useState } from 'react'
import data from '../data/data.json'
import CommentsReducer from '../components/CommentsReducer'

const CommentsContext = createContext();

export const useComments = () => useContext(CommentsContext);

const CommentsProvider = ({ children }) => {

    const [currentUser,] = useState(data.currentUser);
    const [comments, dispatch] = useReducer(CommentsReducer, data.comments);
    const [lastId, setLastId] = useState(4);

    // handlers
    const addCommentHandler = (commentContent, creationTime, createdId, user) => {
        dispatch({
            type: 'added_comment',
            newComment: {
                id: createdId,
                content: commentContent,
                createdAt: creationTime,
                score: 0,
                user: user,
                replies: []
            }
        });
    }

    const deleteCommentHandler = (commentId) => {
        dispatch({
            type: 'deleted_comment',
            id: commentId
        });
    }

    const voteCommentHandler = (commentId, vote) => {
        dispatch({
            type: 'vote_comment',
            commentId: commentId,
            vote: vote
        });
    }

    const addReplyHandler = (commentId, replyContent, creationTime, replyToUser, createdId, currentUser) => {
        dispatch({
            type: 'added_reply',
            commentId: commentId,
            newReply: {
                id: createdId,
                content: replyContent,
                createdAt: creationTime,
                replyingTo: replyToUser,
                score: 0,
                user: currentUser
            }
        })
    }

    const deleteReplyHandler = (commentId, replyId) => {
        dispatch({
            type: 'deleted_reply',
            commentId: commentId,
            replyId: replyId
        })
    }

    const voteReplyHandler = (commentId, replyId, vote) => {
        dispatch({
            type: 'vote_reply',
            commentId: commentId,
            replyId: replyId,
            vote: vote
        });
    }

    const newId = () => {
        let ID = lastId + 1;
        setLastId(prevState => prevState + 1);
        return ID;
    }

    return (
        <CommentsContext.Provider value={{
            comments,
            currentUser,
            addCommentHandler,
            deleteCommentHandler,
            voteCommentHandler,
            addReplyHandler,
            deleteReplyHandler,
            voteReplyHandler,
            newId
        }}>
            {children}
        </CommentsContext.Provider>
    )
}

export default CommentsProvider