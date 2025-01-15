import {Link} from "react-router-dom"
import { User } from 'lucide-react';
import { useEffect,useState } from "react"
export default function Header() {
  const [user, setUser] = useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown () {
    setIsDropdownOpen(!isDropdownOpen);
  };
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
            {/* <nav>
            <Link to="/myblogs" className="navLink">
              My Blogs
            </Link>
            <Link to="/create" className="navLink">
              Create new Post
            </Link>
            <Link to="/login" className="navLink">
              Log Out
            </Link>
          </nav> */}
          </>
          }
          {
            user && <div style={{ position: 'relative' }}>
            <div className="avatar" onClick={toggleDropdown}>
              <User size={24} />
            </div>
            {isDropdownOpen && (
              <div className="dropdown">
                <div className="dropdown-option"><strong>Welcome {user.name.split(' ')[0] || "User"}!</strong> </div>
                <br />
                <div onClick={toggleDropdown} className="dropdown-option"><Link to="/myblogs" className="dropdownLink">My Blogs </Link></div>
                <div onClick={toggleDropdown} className="dropdown-option"><Link to="/create" className="dropdownLink">Create New Blog</Link></div>
                <div onClick={toggleDropdown} className="dropdown-option"><Link to="/login" className="dropdownLink">Logout</Link></div>
              </div>
            )}
          </div>
          }

        </div>
      </div>
    </header>
  )
}

