import React from 'react'

const CommentsReducer = (comments, action) => {
  switch (action.type) {
    case 'added_comment': {
      return [
        ...comments,
        action.newComment
      ];
    }
    case 'edited_comment': {
      return comments.map(comment => {
        if (comment.id === action.id) {
          return {
            ...comment,
            content: action.newContent,
            createdAt: action.updateTime
          }
        }
        else
          return comment;
      });
    }
    case 'deleted_comment': {
      return comments.filter(comment => comment.id !== action.id);
    }
    case 'vote_comment': {
      return comments.map(comment => {
        if (comment.id === action.id) {
          return {
            ...comment,
            score: comment.score + vote
          }
        }
        else
          return comment;
      });
    }
    case 'added_reply': {
      return comments.map(comment => {
        if (comment.id === action.commentId) {
          return {
            ...comment,
            replies: [...comment.replies, action.newReply]
          }
        }
        else
          return comment;
      });
    }
    case 'edited_reply': {
      return comments.map(comment => {
        if (comment.id === action.commentId) {
          comment.replies.map(reply => {
            if (reply.id === action.replyId) {
              return {
                ...reply,
                content: action.newContent,
                createdAt: action.updateTime
              };
            }
            else
              return reply;
          });
        }
        else
          return comment;
      });
    }
    case 'deleted_reply': {
      return comments.map(comment => {
        if (comment.id === action.commentId) {
          return {
            ...comment,
            replies: comment.replies.filter(reply => reply.id !== action.replyId)
          };
        }
        else
          return comment;
      });
    }
    case 'vote_reply': {
      return comments.map(comment => {
        if (comment.id === action.commentId) {
          return {
            ...comment,
            replies: replies.map(reply => {
              if (reply.id === action.replyId) {
                return {
                  ...reply,
                  score: reply.score + vote
                };
              }
              else
                return reply;
            })
          }
        }
        else
          return comment;
      });
    }
  }
}

export default CommentsReducer