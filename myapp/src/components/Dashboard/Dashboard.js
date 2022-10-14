import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  
  let posts_HTML = "";
  
  const [posts, setPosts] = useState(); // posts state
  const [isLoading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [comment, setComment] = useState('');
  
  // const FormData = require('form-data');

  const addComment = async (e) => {
    
    e.preventDefault();
    
  }
  
  const createPost = async (e) => {
    
    e.preventDefault();
    
    // let post =  new FormData();
    const files = document.getElementById("files");
    
    // for(let i =0; i < files.files.length; i++) {
    //   post.append("files", files.files[i]);
    // }
    // console.log(files)
    // console.log(post.get("files"))

    let post = {
      "files": JSON.stringify(files.files[0]),
      "title": title,
      "description": description,
      "createdBy": sessionStorage.getItem('userId')
    }
    console.log(files.files[0])

    // post.append("title", title);
    // post.append("description", description);
    // post.append("createdBy", sessionStorage.getItem('userId'));
    
    if(title === "" || description === "")
    {
      alert('Insert credentials');
    }
    else
    {
      console.log()
      await axios.post('http://localhost:5000/posts', 
      {data: post})
        
        .then((res) => {
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
        
        posts_HTML = posts.map((post, index) => {
          
          return (
            <div id='center-page'>
            <div key={index} className="post-container">
              <form onSubmit={ addComment } className="comments-style">
            <div>{post.title}</div>
            <div>{post.description}</div>
            <div>{post.createdBy}</div>
            <input onChange={(e) => setComment(e.target.value)} type="text" placeholder='Add your comment' required/>
            <button className='register-btn'>Comment</button>
            </form>
            </div>
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
          <div className="input-group">
          <input id='files' type="file" multiple/>
          </div>
          <button className="register-btn">Create</button>
          </div>
          </form>
          </div>
          
        }
      }
