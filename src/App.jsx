import { useReducer, useState } from 'react'
import './App.css'
import Comment from './components/Comment'
import data from './data/data.json'
import NewCommentForm from './components/NewCommentForm';
import CommentsReducer from './components/CommentsReducer'


function App() {

  const [currentUser,] = useState(data.currentUser);
  const [comments, dispatch] = useReducer(CommentsReducer, data.comments);
  const [lastId, setLastId] = useState(4);

  const addCommentHandler = (createdContent, creationTime, createdId, user) => {
    dispatch({
      type: 'added_comment',
      newComment: {
        id: createdId,
        content: createdContent,
        createdAt: creationTime,
        score: 0,
        user: user,
        replies: []
      }
    });
  }

  const newId = () => {
    let ID = lastId + 1;
    setLastId(prevState => prevState + 1);
    return ID;
  }

  return (
    <main className='main-page h-full py-16 px-4 font-rubik'>
      <section className='w-[55%] mx-auto h-full'>

        {
          comments.map((comment) => {
            return <Comment {...comment} key={comment.id} />;
          })
        }

        <NewCommentForm user={currentUser} onAddComment={addCommentHandler} newId={newId} />

      </section>

    </main>
  )
}

export default App
