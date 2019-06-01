import React from 'react';

const liClicked = (ev) => {
  console.log('li was clicked!');
  if (ev.target.classList.contains('blue')) {
    ev.target.classList.remove('blue');
  } else {
    ev.target.classList.add('blue');
  }
}

const Header = () => (
  <div className="header flex space-between">
    <div className="container flex">
      <img className="icons" src="assets/img/icons/apple.png" alt="apple" />
      <ul className="flex">
        <li onClick={liClicked}>Finder</li>
        <li onClick={liClicked}>File</li>
        <li onClick={liClicked}>Edit</li>
        <li onClick={liClicked}>View</li>
        <li onClick={liClicked}>Go</li>
        <li onClick={liClicked}>Window</li>
        <li onClick={liClicked}>Help</li>
      </ul>
    </div>

    <div className="container flex">
      <img className="icons" src="assets/img/icons/dropbox.png" alt="dropbox" />
      <img className="icons" src="assets/img/icons/wifi.png" alt="wifi" />
      <ul className="flex">
        <li className="flex">
          <span>71%</span>
          <img src="assets/img/icons/battery.png" alt="battery" />
        </li>
        <img className="icons" src="assets/img/icons/A-icon.png" alt="A-icon" />
        <li>{new Date().toLocaleString()}</li>
        <img className="icons" src="assets/img/icons/search.png" alt="search" />
        <img className="icons" src="assets/img/icons/siri.png" alt="siri" />
        <img className="icons" src="assets/img/icons/menu.png" alt="menu" />
      </ul>
    </div>
  </div>
)

export default Header;