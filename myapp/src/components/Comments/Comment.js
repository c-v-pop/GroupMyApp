import { useEffect, useState } from "react";
import axios from "axios";


const Comment = (props) => {
    
    const [comments, setComment] = useState("");
    const [Postcomments, setPostComment] = useState([]);

    const postComment = async (e) => {

      const data = new FormData();

      data.append("comments", comments.comments)
      data.append("createdBy", sessionStorage.getItem('userId'))

      let comment = {
        "comments": comments,
        "createdBy": sessionStorage.getItem('userId'),
        'postId' : props.postId
      }
      await axios.post('http://localhost:5000/comments', 
      comment, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.data.errors)
        {
          console.log(res.data.message);
        }
      });
    }
    useEffect( ()=>{

      axios.get('http://localhost:5000/comments/'+props.postId).then(response=>{
      setPostComment(response.data)
      }).catch(err=> console.log(err))
    },[])
    return (
      <div>
          <ul>
            {Postcomments.map(comment => <li key={comment.id}>{comment.comments}</li>)}
          </ul>
      <form onSubmit={postComment}>
        <input
          type="text"
          placeholder="Write something..."
          className="comment_box"
          value={comments}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  };
  
  export default Comment;