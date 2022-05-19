import React from 'react'

function Details({details, handleUpVote, handleDownVote}){
    return (
        <div>
            <p>{details.views} Views | Uploaded {details.createdAt}</p>
            <button onClick={handleUpVote}> 👍 {details.upvotes}</button>
            <button onClick={handleDownVote}> 👎 {details.downvotes}</button>
        </div>
    )
}

export default Details;