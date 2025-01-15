import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const response = await fetch('https://blogged-ujz4.onrender.com/user/login',{
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    });
    const data = await response.json()
		console.log(data)
		if(data.user){
			alert("login successful")
			localStorage.setItem("user",JSON.stringify(data))
			window.location.href = 'https://blogged-nine.vercel.app/create'
		}
		else {
      console.log(response.status)
			alert("please check email or password")
		}
  }

  useEffect(()=>{
    if(localStorage.getItem("user")){
      window.location.reload();
      localStorage.removeItem("user")
    }
    
  },[])

  return (
    <div className="pageContainer">
      <main className="mainContent">
        <div className="container">
            <div className="formWrapper">
                <h1 className="pageTitle">Login</h1>
                <form onSubmit={handleSubmit} className="formContainer">
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
                    <button type="submit" className="submitButton">Login</button>
                </form>
                <p className="formLink">
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </div>
        </div>
      </main>
    </div>
  )
}

