import { useState } from "react";
import axios from "axios";

const Comment = () => {
    
    const [comments, setComment] = useState("");
    const [addComment, setAddComment] = useState("");

    const postComment = async (e) => {
      e.preventDefault();    
      let comment = { "comments": comments, "createdBy": sessionStorage.getItem('userId')}
      if(comments === "") {
        alert('Insert Comment')
      }
      else {
        await axios.post('http://localhost:5000/comments', 
        {comment})
        
        .then((res) => {
          console.log(res)
          if (res.data.errors)
          {
            console.log(res.data.message);
          }
        });
      }
    }

    return (
      <form onSubmit={postComment}>
        <textarea
          type="text"
          placeholder="Write something..."
          className="comment_box"
          value={comments}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default Comment;