import './App.css'
import Comment from './components/Comment'
import DeleteModal from './components/DeleteModal';
import NewCommentForm from './components/NewCommentForm';
import { useComments } from './context/CommentsProvider';



function App() {

  const { comments, addCommentHandler, currentUser, newId, showDeleteModal } = useComments();

  return (
    <main className='main-page h-full py-16 px-4 font-rubik'>
      {
        showDeleteModal
          ? <DeleteModal />
          : null
      }
      <section className='w-[45%] mx-auto'>
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
