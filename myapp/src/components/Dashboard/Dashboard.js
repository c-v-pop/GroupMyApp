import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Dashboard() {

    let posts_HTML = "";
    const [posts, setPosts] = useState(); // posts state
    const [isLoading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const createPost = async (e) => {
      e.preventDefault();
      if(title === "" || description === "")
      {
        alert('Insert credentials');
      }
      else
      {
      await axios.post('http://localhost:5000/posts',{
          title: title,
          description: description,
          createdBy: sessionStorage.getItem('userId'),
      }).then((res) => {
        console.log(res)
          if (res.data.errors)
          {
              console.log(res.data.message);
          }
      });
  }}

    useEffect(() => { // useEffect hook
      setTimeout(() => { // simulate a delay

      axios.get("http://localhost:5000/posts")

      .then((res) => {      

        setPosts(res.data);

        setLoading(false);
        
        });

       }, 3000);

      }, []);
    
    if(isLoading){
      return <div>Loading</div>
    }else {
      console.log(posts)
      posts_HTML = posts.map((post, index) => {
     
        console.log(post)
        return (
          <div key={index} className="cover">
            <div>{post.title}</div>
            <div>{post.description}</div>
            <div>{post.createdBy}</div>
          </div>
        )
      })
     return <div>
      <div>{posts_HTML}</div>
      <form onSubmit={ createPost }>
        <div className="cover">
            <h1>Create post</h1>
            <input onChange={ (e) => setTitle(e.target.value) } type="text" placeholder="title" required />
            <input onChange={ (e) => setDescription(e.target.value) } type="text" placeholder="description" required />
            <button className="register-btn">Create</button>
        </div>
        </form>
      </div>
      
    }
    

}
