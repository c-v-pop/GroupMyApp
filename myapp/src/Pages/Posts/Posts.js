import React, { useState } from 'react'

const Posts = () => {

    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(()=> {
            setSubmitting(false);
        }, 3000)
        console.log('You submitted the form!')
    }

  return (
    <div>
        {submitting &&
        <div>Posting</div>}
        <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Title</p>
           <input name="name" required/>
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Posts