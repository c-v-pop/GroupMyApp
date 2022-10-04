import React, { useState } from 'react'

const Index = () => {

    const [state, setState] = useState({
        title: "",
        message: "",
    })

    const handleChange = e => {
        setState({
            [e.target.name]: e.target.value
        })
    }

    const createPost = async (e) => {
        e.preventDefault();
        
            console.log('Clicked')
        
    }

  return (

    <div>

    <form id="flex-column" onSubmit={ createPost }>
        <input 
        type="text" 
        name="title"
        value={state.title}
        onChange={handleChange}
        placeholder="insert title" required />
        <textarea  
        name="message"
        onChange={handleChange}
        value={state.message}
        placeholder="What's on your mind ?" required />

        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Index