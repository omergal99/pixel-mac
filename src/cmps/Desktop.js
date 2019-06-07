import React, { Component } from 'react';

import Folder from './Folder';

class Desktop extends Component {

  constructor(props) {
    super(props);
    this.handleMove = this.handleMove.bind(this);
  }

  state = {
    isDraging: false,
    currDragName: 'div1',
    pointerDiff: { x: 1, y: 1 },
    generalZIndex: { lastCurrDragName: '', num: 1 },
    windows: {
      div1: {
        name: 'div1',
        isOpen: true,
        size: { x: 600, y: 400 },
        location: { x: 20, y: 300 },
        bc: 'rgba(0, 50, 50, 0.841)',
        zIndex: 0
      }
      ,
      div2: {
        name: 'div2',
        isOpen: true,
        size: { x: 700, y: 550 },
        location: { x: 190, y: 90 },
        bc: 'rgba(150, 20, 80, 0.741)',
        zIndex: 0
      }
    }
  }

  handleMove(ev) {
    // console.log('ev: ', ev);
    if (this.state) {
      var copyState = this.state.windows;

      if (!this.state.isDraging) {
        var diffX = ev.clientX - copyState[this.state.currDragName].location.x;
        var diffY = ev.clientY - copyState[this.state.currDragName].location.y;
        this.setState({ pointerDiff: { x: diffX, y: diffY } })

        if (this.state.currDragName !== this.state.generalZIndex.lastCurrDragName) {
          var heighestZ = this.state.generalZIndex.num;
          copyState[this.state.currDragName].zIndex = heighestZ;
          this.setState({ generalZIndex: { lastCurrDragName: this.state.currDragName, num: heighestZ + 1 } })
        }
      }

      var x = ev.clientX - this.state.pointerDiff.x;
      var y = ev.clientY - this.state.pointerDiff.y;
      copyState[this.state.currDragName].location = { x, y }
      this.setState({ windows: copyState, isDraging: true })
    }
  }

  // console.log('window',window.innerHeight);
  // console.log('window',window.innerWidth);

  mouseDown(ev) {
    // console.log('ev.target: ', ev.target);
    // console.log(ev.target.getAttribute('data-name'));

    // this.setState({ currDragName: ev.target.getAttribute('data-name') });
    this.setState({ currDragName: ev.target.dataset.name });

    document.addEventListener('mousemove', this.handleMove, false);

    document.onmouseup = () => {
      // console.log('onmouseup >> STOPING mousemove EventListener');
      document.removeEventListener('mousemove', this.handleMove, false);
      this.setState({ isDraging: false })
    };
  }

  render() {
    var copyWindows = this.state.windows;
    var allWindows = [copyWindows.div1, copyWindows.div2];
    var openWindows = allWindows.map((div) => (
      <Folder MouseDown={this.mouseDown.bind(this)} window={div} />
    ))
    return (
      <div className="desktop">
        {/* <div style={{height: '800px',width:' 880px',top: '0px',left: '0px'}} 
        onMouseDown={this.mouseDown.bind(this)} className="mama"></div> */}
        {/* <div className="dada"></div> */}

        {openWindows[0]}
        {openWindows[1]}

        {/* <Folder /> */}

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