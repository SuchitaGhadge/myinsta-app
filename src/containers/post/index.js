import React, { useContext, useState } from 'react';
import { Comment } from '../../components';
import CommentInput from '../../components/comment-input';
import { UserContext } from '../../contexts/user';
import { db, storage } from '../../firebase';
import "./style.css"

export default function Post({profileUrl, username, id, photoURL, caption, comments}) {

    const [user, setUser] = useContext(UserContext).user;
    
   const deletePost = () => {
        // delete image from storage
        // 1. get ref to the image file we like to delete  
        var imageRef = storage.refFromURL(photoURL);

        // 2. delete the file
        imageRef
        .delete()
        .then(function() {
            console.log("image deleted")
        })
        .catch(function (error){
            console.log(`Error ${error}`)
        });

        // delete post from firebase store

        db.collection("posts")
        .doc(id)
        .delete()
        .then(function() {
            console.log("post info deleted")
        })
        .catch(function (error){
            console.log(`Error post info  ${error}`)
        });
   }; 
  

    return (
        <div className="post">
            <div className="post__header">
               <div className="post__headerLeft">
               <img className="post__profilePic" src={profileUrl} alt=""  />
               <p style={{marginLeft:"8px"}}>{username}</p>
               </div>
               {user ? ( <button className="post__delete" onClick={deletePost}>Delete</button>) : <div></div>}
            </div>

            <div className="post__center">
                <img className="post__photoUrl" src={photoURL} />

            </div>

            <div>
                <p>
                     <span 
                    style={{fontWeight:"500", marginRight:"4px"}}> 
                    {username} 
                    </span> 
                    {caption}
                </p>
            </div>

            {user ? (<CommentInput comments={comments} id={id} user={username}/>) : <div></div>}
            
            <div>
                {comments ? (comments.map((comment) => (
                    <Comment username={comment.username} 
                    comment={comment.comment} />)
                    )) : (
                        <div></div>
                        )}
            </div>
            
        </div>
    )
}
 