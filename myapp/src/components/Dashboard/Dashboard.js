import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Comment from '../Comments/Comment';


export default function Dashboard() {
  
  let posts_HTML = "";
  
  const [posts, setPosts] = useState(); // posts state
  const [isLoading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  

  const createPost = async (e) => {

    // e.preventDefault();      

    const files = document.getElementById("files");
    const data = new FormData();

    data.append("file", files.files[0])
    data.append("title", title)
    data.append("description", description)
    data.append("createdBy", sessionStorage.getItem('userId'))

    let post = {
      "title": title,
      "description": description,
      "createdBy": sessionStorage.getItem('userId'),
      "file": data
    }
    console.log(post)
    
    if(title === "" || description === "")
    {
      alert('Insert title');
    }
    else
    {
      await axios.post('http://localhost:5000/posts', 
      data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      
      .then((res) => {
        console.log(res)
        if (res.data.errors)
        {
          console.log(res.data.message);
        }
      });
    }}
    
    useEffect(() => { 
      setTimeout(() => { 
        
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
      
      posts_HTML = posts.map((post, index) => {
        
        return (
          <div id='center-page' key={post.id}>
          <div  className="post-container">
          <div>{post.title}</div>
          <div>{post.description}</div>
          <div>{post.createdBy}</div>
          <div>{post.updatedAt}</div>
          <img src={post.imageurl} />
          <Comment  postId={post.id}/>
          </div>
          </div>
          )
        })
        return <div>
        <div>{posts_HTML}</div>
        <form onSubmit={ createPost }>
        <div className="cover">
        <h1>Create post</h1>
        <input onChange={ (e) => setTitle(e.target.value) } type="text" placeholder="title"  />
        <input onChange={ (e) => setDescription(e.target.value) } type="text" placeholder="description"  />
        <div className="input-group">
        <input id='files' type="file"/>
        </div>
        <button className="register-btn">Create</button>
        </div>
        </form>
        </div>
      }
    }