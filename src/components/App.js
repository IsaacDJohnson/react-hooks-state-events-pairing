import React, {useState} from 'react'
import video from "../data/video.js";
import Header from './Header'
import Details from './Details'
import Comments from './Comments'

function App() {
  console.log("Here's your data:", video);

  let comment = video.comments.map((element)=>{
    let users = {
      name: element.user,
      comment: element.comment
    }
    return users
  })

  

  const [comments, setComments] = useState(comment)


  const [details, setDetails] = useState({
    views: video.views,
    createdAt: video.createdAt,
    upvotes: video.upvotes,
    downvotes: video.downvotes,
  })

  function handleUpVote(){
    let upVotes = details.upvotes + 1
    setDetails({
      views: video.views,
      createdAt: video.createdAt,
      upvotes: upVotes,
      downvotes: video.downvotes,
  })
  }
  function handleDownVote(){
    let downVotes = details.downvotes - 1
    setDetails({
      views: video.views,
      createdAt: video.createdAt,
      upvotes: video.upvotes,
      downvotes: downVotes,
    })
  }

  const [isShown, setShown] = useState(true)

  function hideComments(){
    
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header />
      <Details details={details} handleUpVote={handleUpVote} handleDownVote={handleDownVote}/>
      <Comments comments={comments} user={comment.users} hideComments={hideComments}/>
    </div>
  );
}

export default App;
