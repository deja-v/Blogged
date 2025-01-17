import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:3000/user/register', {
    
      method: "POST",
      body: JSON.stringify({
          name,
          email,
          password
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  
  if(response.status === 201){
      alert("Registration successful")
      window.location.href = "http://localhost:5173/login"
  }
  else
      alert("Registration failed")
  
    
  }

  return (
    <div className="pageContainer">
      <main className="mainContent">
        <div className="container">
        <div className="formWrapper">
            <h1 className="formTitle">Register</h1>
            <form onSubmit={handleSubmit} className="formContainer">
              <div className="formGroup">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="formInput"
                />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="formInput"
                />
              </div>
              <div className="formGroup">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="formInput"
                />
              </div>
              <button type="submit" className="submitButton">Register</button>
            </form>
            <p className="formLink">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

