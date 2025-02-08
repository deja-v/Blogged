import { useState } from 'react'

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [body, setBody] = useState('')
  const [files, setFiles] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();

    formData.append("title", title);
    formData.append("heading", description);
    formData.append("body", body);
    formData.append("image", files[0]); 
    const token = JSON.parse(localStorage.getItem("user")).user
    // const response = await fetch('http://localhost:3000/create',{
    //     method: "POST",
    //     body: formData,
    //     headers: {
    //         "Authorization": `Bearer ${token}`,
    //     }
    // })
    const response = await fetch('https://blogged-ujz4.onrender.com/create',{
      method: "POST",
      body: formData,
      headers: {
          "Authorization": `Bearer ${token}`,
      }
  })
    if(response.status === 201){
        alert("Blog Posted successfully")
        setTitle('')
        setDescription('')
        setBody('')
        window.location.href = "http://localhost:5173"
        window.location.href = "https://blogged-nine.vercel.app/"

    }
    else{
        const data = await response.json()
        alert(data.msg)
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
              <label htmlFor="image">Upload Image</label>
                <input type="file" id="image"
                onChange={(e) => setFiles(e.target.files)} />
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

