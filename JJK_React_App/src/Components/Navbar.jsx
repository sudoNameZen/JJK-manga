import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="nav-container">
            <div className="logo">
              <img ></img>
            </div>
            <div className="nav-items">
              <ul>
                <li><a href="#">Main Page</a></li>
                <li><a href="#">characters</a></li>
                <li><a href="#">jujutsu</a></li>
                <li><a href="#">Manga</a></li>
                <li><a href="#">watch</a></li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar