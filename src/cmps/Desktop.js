import React, { Component } from 'react';

import Folder from './Folder';

class Desktop extends Component {

  constructor(props) {
    super(props);
    this.handleMove = this.handleMove.bind(this);
  }

  state = {
    isDraging: false,
    windows: {
      div1: {
        isOpen: true,
        size: { x: 100, y: 200 },
        location: { x: 20, y: 300 },
        class: 'mama2',
        bc: 'rgba(0, 50, 50, 0.841)'
      }
      ,
      div2: {
        isOpen: true,
        size: { x: 300, y: 400 },
        location: { x: 190, y: 30 },
        class: 'mama2',
        bc: 'rgba(150, 20, 80, 0.741)'
      }
    }
  }

  handleMove(ev) {
    console.log('ev: ', ev);
    if (this.state) {
      var copy = this.state.windows;
      copy.div2.location = { x: ev.clientX - 5, y: ev.clientY - 5 }
      this.setState({ windows: copy })
    }
  }

  mouseDown(el) {
    console.log('el.target: ', el.target);
    // console.log('window',window.innerHeight);
    // console.log('window',window.innerWidth);

    // document.addEventListener('mousemove', this.handleMove(), false);
    // document.addEventListener('mousemove', this.handleMove, false);
    document.addEventListener('mousemove', this.handleMove, false);

    // ev.target.onmouseup = () =>{
    document.onmouseup = () => {
      console.log('onmouseup >> STOPING mousemove EventListener');
      document.removeEventListener('mousemove', this.handleMove, false);
    };

  }

  render() {
    var copyWindows = this.state.windows;
    var allWindows = [copyWindows.div1, copyWindows.div2];
    var openWindows = allWindows.map((div) => {
      return <div onMouseDown={this.mouseDown.bind(this)} className={div.class}
        style={{
          height: `${div.size.y}px`, width: `${div.size.x}px`,
          top: `${div.location.y}px`, left: `${div.location.x}px`,
          backgroundColor: `${div.bc}`, position: 'absolute'
        }}
      ></div>
    })
    return (
      <div className="desktop">
        {/* <div style={{height: '800px',width:' 880px',top: '0px',left: '0px'}} 
        onMouseDown={this.mouseDown.bind(this)} className="mama"></div> */}
        {/* <div className="dada"></div> */}

        {openWindows[0]}
        {openWindows[1]}

        <Folder/>

      </div>
    )
  }
}
export default Desktop;


// import React from 'react';

// const Desktop = () => (

//   <div className="desktop">
//     <div className="mama"></div>
//     <div className="dada"></div>
//   </div>
// )

// export default Desktop;