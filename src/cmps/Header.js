import React from 'react';

const Header = () => (
  <div className="header flex space-between">
    <div className="container-left flex">
      <img className="icons" src="assets/img/icons/apple.png" alt="apple" />
      <ul className="left-list flex">
        <li>Finder</li>
        <li>File</li>
        <li>Edit</li>
        <li>View</li>
        <li>Go</li>
        <li>Window</li>
        <li>Help</li>
      </ul>
    </div>

    <div className="container-right flex">
      <img className="icons" src="assets/img/icons/dropbox.png" alt="dropbox" />
      <img className="icons" src="assets/img/icons/wifi.png" alt="wifi" />
      <ul className="right-list flex">
        <li>84% battery</li>
        <li>A</li>
        <li>{new Date().toLocaleString()}</li>
        <li>Search</li>
        <li>Siri</li>
        <li>Side Bar</li>
      </ul>
    </div>
  </div>
)

export default Header;