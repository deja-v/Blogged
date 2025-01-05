import {Link} from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="headerContent">
          <Link to="/" className="logo">
            Blogged
          </Link>
          <nav>
            <Link to="/login" className="navLink">
              Login
            </Link>
            <Link to="/register" className="navLink">
              Register
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

