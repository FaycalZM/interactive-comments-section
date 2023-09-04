import { useState } from 'react'
import './App.css'
import Comment from './components/Comment'
import data from './data/data.json'
import NewCommentForm from './components/NewCommentForm';

const { currentUser, comments } = data;


function App() {

  return (
    <main className='main-page h-full py-16 px-4 font-rubik'>
      <section className='w-[55%] mx-auto h-full'>

        {
          comments.map((comment) => {
            return <Comment {...comment} key={comment.id} />;
          })
        }

        <NewCommentForm user={currentUser} />

      </section>

    </main>
  )
}

export default App
