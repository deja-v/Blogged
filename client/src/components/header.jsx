import {Link} from "react-router-dom"
import { useEffect,useState } from "react"
export default function Header() {
  const [user, setUser] = useState(null)
  
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    if(!user) return
    setUser(user)
  },[])

  return (
    <header className="header">
      <div className="container">
        <div className="headerContent">
          {!user && <Link to="/" className="logo">
            Blogged
          </Link>}
          {user && <Link to="/" className="logo">
            Blogged
          </Link>
          
          }
          {!user && 
          <nav>
            <Link to="/login" className="navLink">
              Login
            </Link>
            <Link to="/register" className="navLink">
              Register
            </Link>
          </nav>
         }
            {user && <>
            <span className="welcomeMessage"><strong>Welcome {user.name.split(' ')[0] || "User"}!</strong></span>
            <nav>
            <Link to="/create" className="navLink">
              Create new Post
            </Link>
            <Link to="/login" className="navLink">
              Log Out
            </Link>
          </nav>
          </>
          }

        </div>
      </div>
    </header>
  )
}

