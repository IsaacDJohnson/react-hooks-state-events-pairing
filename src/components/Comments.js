import React from 'react'

function Comments({comments, hideComments, user}){
    console.log(comments)
    let firstUser = comments[0]
    let secondUser = comments[1]
    return (
        <div>
            <button onClick={hideComments}>Hide Comments</button>
            <h1>{comments.length} Comments</h1>           
                <h4>{firstUser.name}</h4>
                <p>{firstUser.comment}</p>          
                <h4>{secondUser.name}</h4>
                <p>{secondUser.comment}</p>          
        </div>
    )
}

export default Comments;