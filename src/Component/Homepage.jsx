import React, { Component } from 'react'
import './Homepage.css'
export default class Homepage extends Component {
  render() {
    return (
      <div>
        {/* Navbar */}

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a href='https://github.com/joe6276/' className="navbar-brand  py-2 ml-5">
            <img style={{
              marginLeft: '10px', width: '60px', height: '50px'
            }}
              src="https://cdn.pixabay.com/photo/2016/11/18/18/38/logo-1836334__340.png" alt='something' />
          </a>

          <div className="container-fluid">
            <a href='https://github.com/joe6276' className="navbar-brand" href="#">CCC</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li style={{ color: 'white', fontWeight: 'bold' }} className="nav-item">
                  <a href='https://github.com/joe6276' id='link' className="nav-link" aria-current="page"> FrontEnd Challenge Site By Jonathan Ndambuki</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
