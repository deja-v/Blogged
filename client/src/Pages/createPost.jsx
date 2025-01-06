import { useState } from 'react'

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = JSON.parse(localStorage.getItem("user")).user
    const response = await fetch('http://localhost:3000',{
        method: "POST",
        body: JSON.stringify({
            title,
            heading: description,
            body
        }),
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    if(response.status === 201){
        alert("Blog Posted successfully")
        setTitle('')
        setDescription('')
        setBody('')
        window.location.href = "/"
    }
    else{
        alert("Blog Post failed")
    }
    
  }

  return (
    <div className="page-container">
      <main className="main-content">
        <div className="container">
          <h1 className="page-title">Create New Blog Post</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Brief Description</label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea
                id="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                rows={10}
                className="form-textarea"
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="submit-button">
                Post
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

