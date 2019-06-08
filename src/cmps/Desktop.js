import React, { Component } from 'react';

import Folder from './Folder';

class Desktop extends Component {

  constructor(props) {
    super(props);
    this.handleMove = this.handleMove.bind(this);
  }

  state = {
    isDraging: false,
    currDragName: 'window1',
    pointerDiff: { x: 1, y: 1 },
    generalZIndex: { lastCurrDragName: '', num: 1 },
    windows: {
      'window1': {
        name: 'window1',
        isOpen: true,
        size: { x: 600 + 'px', y: 400 + 'px' },
        prevSize: { x: 600 + 'px', y: 400 + 'px' },
        location: { x: 20, y: 300 },
        prevLocation: { x: 20, y: 300 },
        zIndex: 0,
        isExpend: false
      }
      ,
      'window2': {
        name: 'window2',
        isOpen: true,
        size: { x: 700 + 'px', y: 550 + 'px' },
        prevSize: { x: 700 + 'px', y: 550 + 'px' },
        location: { x: 190, y: 90 },
        prevLocation: { x: 190, y: 90 },
        zIndex: 0,
        isExpend: false
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
        this.setState({ pointerDiff: { x: diffX, y: diffY } });
      }

      var x = ev.clientX - this.state.pointerDiff.x;
      var y = ev.clientY - this.state.pointerDiff.y;
      copyState[this.state.currDragName].location = { x, y }
      copyState[this.state.currDragName].prevLocation = { x, y }
      this.setState({ windows: copyState, isDraging: true })
    }
  }

  // console.log('window',window.innerHeight);
  // console.log('window',window.innerWidth);

  mouseDown(ev) {
    // console.log('ev.target: ', ev.target);
    // console.log(ev.target.getAttribute('data-name'));

    // this.setState({ currDragName: ev.target.getAttribute('data-name') });
    this.setState({ currDragName: ev.target.dataset.name }, () => {
      this.orderFrontWindow();
    });

    document.addEventListener('mousemove', this.handleMove, false);

    document.onmouseup = () => {
      // console.log('onmouseup >> STOPING mousemove EventListener');
      document.removeEventListener('mousemove', this.handleMove, false);
      this.setState({ isDraging: false })
    };
  }

  orderFrontWindow() {
    if (this.state.currDragName !== this.state.generalZIndex.lastCurrDragName) {
      var copyState = this.state.windows;
      var heighestZ = this.state.generalZIndex.num;
      copyState[this.state.currDragName].zIndex = heighestZ;
      this.setState({ generalZIndex: { lastCurrDragName: this.state.currDragName, num: heighestZ + 1 } })
      this.setState({ windows: copyState })
    }
  }

  windowActivated(windowName, clickType) {
    console.log(windowName)
    switch (clickType) {
      case 'close':
        console.log('closing...');
        return;
      case 'minimize':
        console.log('minimizing...');
        return;
      case 'expend':
        console.log('expending...');
        this.toggleExpend(windowName);
        return;
      default:
        console.log('nothing...');
        return;
    }
  }

  toggleExpend(windowName) {
    var copyState = this.state.windows;
    if (copyState[windowName].isExpend) {
      copyState[windowName].size = copyState[windowName].prevSize;
      copyState[windowName].location = copyState[windowName].prevLocation;
      copyState[windowName].isExpend = false;
    } else {
      copyState[windowName].size = { x: '100%', y: 'calc(100% - 19px)' };
      copyState[windowName].location = { x: 0, y: 19 };
      copyState[windowName].isExpend = true;
    }
    this.setState({ windows: copyState });
  }

  render() {
    var allWindows = Object.values(this.state.windows);
    var openWindows = allWindows.map((window) => (
      <Folder window={window}
        clickActiveBar={this.windowActivated.bind(this)}
        MouseDown={this.mouseDown.bind(this)}
        key={window.name}
      />
    ))
    return (
      <div className="desktop">
        {openWindows}
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