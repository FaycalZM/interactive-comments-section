import './App.css'
import Comment from './components/Comment'
import NewCommentForm from './components/NewCommentForm';
import { useComments } from './context/CommentsProvider';



function App() {

  const { comments, addCommentHandler, currentUser, newId } = useComments();

  return (
    <main className='main-page h-full py-16 px-4 font-rubik'>
      <section className='w-[45%] mx-auto h-full'>
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
