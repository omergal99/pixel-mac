import React, { Component } from 'react';

class Header extends Component {

  state = {
    options: []
  }

  liClicked = (ev) => {
    if (ev.target.classList.contains('blue')) {
      ev.target.classList.remove('blue');
    } else {
      this.cleanElements();
      ev.target.classList.add('blue');
    }
  }

  cleanElements() {
    var options = document.querySelectorAll("li, .icons");
    options.forEach(el => { // element
      el.classList.remove('blue');
    });
  }

  render() {
    return (
      <div className="header flex space-between">
        <div className="container flex">
          <img className="icons" onClick={this.liClicked} src="assets/img/icons/apple.png" alt="apple" />
          <ul className="flex">
            <li onClick={this.liClicked}>Finder</li>
            <li onClick={this.liClicked}>File</li>
            <li onClick={this.liClicked}>Edit</li>
            <li onClick={this.liClicked}>View</li>
            <li onClick={this.liClicked}>Go</li>
            <li onClick={this.liClicked}>Window</li>
            <li onClick={this.liClicked}>Help</li>
          </ul>
        </div>

        <div className="container flex">
          <img className="icons" onClick={this.liClicked} src="assets/img/icons/dropbox.png" alt="dropbox" />
          <img className="icons" onClick={this.liClicked} src="assets/img/icons/wifi.png" alt="wifi" />
          <ul className="flex">
            <li className="flex" onClick={this.liClicked}>
              <span>71%</span>
              <img src="assets/img/icons/battery.png" alt="battery" />
            </li>
            <img className="icons" onClick={this.liClicked} src="assets/img/icons/A-icon.png" alt="A-icon" />
            <li>{new Date().toLocaleString()}</li>
            <img className="icons" onClick={this.liClicked} src="assets/img/icons/search.png" alt="search" />
            <img className="icons" onClick={this.liClicked} src="assets/img/icons/siri.png" alt="siri" />
            <img className="icons" onClick={this.liClicked} src="assets/img/icons/menu.png" alt="menu" />
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;