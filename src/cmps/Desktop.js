import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../store/actions';

import Folder from './Folder';

class Desktop extends Component {

  constructor(props) {
    super(props);
    this.handleMove = this.handleMove.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
  }

  componentDidMount() {
    // actions.loadWindows(); // IN csae we have NOT dispatch 
    this.props.loadWindows(); // IN csae of dispatch needed 
  }



  state = {
    currDragName: 'window1',
    pointerDiff: { x: 1, y: 1 },
    generalZIndex: { lastDragWindow: '', num: 1 },
  }

  handleMove(ev) {
    // console.log('ev: ', ev);
    if (this.props) {
      var currWindow = this.props.windows[this.state.currDragName];

      if (!currWindow.isDraging) {
        var diffX = ev.clientX - currWindow.location.x;
        var diffY = ev.clientY - currWindow.location.y;
        this.setState({ pointerDiff: { x: diffX, y: diffY } });
      }

      currWindow.location = this.getLocationAccordingBorders(ev, currWindow);
      currWindow.prevLocation = currWindow.location;
      currWindow.isDraging = true;

      this.props.updateWindow(currWindow);
    }
  }

  getLocationAccordingBorders(ev, currWindow) {
    var x = ev.clientX - this.state.pointerDiff.x;
    var y = ev.clientY - this.state.pointerDiff.y;
    var maxX = 2 + currWindow.location.x + Number(currWindow.size.x.slice(0, -2));
    var maxY = 2 + currWindow.location.y + Number(currWindow.size.y.slice(0, -2));
    if (x >= 0 && y >= 0 && window.innerWidth > maxX && window.innerHeight > maxY) {
      return { x, y };
    } else {
      if (x <= 0 && y >= 0 && window.innerHeight > maxY) {
        return { x: currWindow.location.x, y };
      }
      if (y <= 0 && x >= 0 && window.innerWidth > maxX) {
        return { x, y: currWindow.location.y };
      }
      if (x >= 0 && y >= 0 && window.innerWidth <= maxX && window.innerHeight > maxY) {
        if (x < currWindow.location.x) {
          return { x, y };
        } else {
          if (window.innerHeight > maxY) {
            return { x: currWindow.location.x, y };
          }
        }
      }
      if (x >= 0 && y >= 0 && window.innerWidth > maxX && window.innerHeight <= maxY) {
        if (y < currWindow.location.y) {
          return { x, y };
        } else {
          if (window.innerWidth > maxX) {
            return { x, y: currWindow.location.y };
          }
        }
      }
      if (window.innerHeight <= maxY && window.innerWidth <= maxX) {
        if (y < currWindow.location.y && x < currWindow.location.x) {
          return { x, y };
        } else {
          if (y < currWindow.location.y) {
            return { x: currWindow.location.x, y };
          }
          if (x < currWindow.location.x) {
            return { x, y: currWindow.location.y };
          }
        }
      }
    }
    return { x: currWindow.location.x, y: currWindow.location.y }
  }


  mouseDown(ev) {
    // this.setState({ currDragName: ev.target.getAttribute('data-name') });
    this.setState({ currDragName: ev.target.dataset.name }, () => {
      this.orderFrontWindow();
    });

    document.addEventListener('mousemove', this.handleMove, false);

    document.onmouseup = () => {
      document.removeEventListener('mousemove', this.handleMove, false);
      var currWindow = this.props.windows[this.state.currDragName];
      currWindow.isDraging = false;
      this.props.updateWindow(currWindow);
    };
  }

  orderFrontWindow() {
    if (this.state.currDragName !== this.state.generalZIndex.lastDragWindow) {
      var currWindow = this.props.windows[this.state.currDragName];
      var heighestZ = this.state.generalZIndex.num;
      currWindow.zIndex = heighestZ;
      this.setState({ generalZIndex: { lastDragWindow: this.state.currDragName, num: heighestZ + 1 } })
      this.props.updateWindow(currWindow);
    }
  }

  windowActivated(windowName, clickType) {
    console.log(windowName, clickType)
    switch (clickType) {
      case 'close':
        this.props.closeWindow(windowName);
        return;
      case 'minimize':
        return;
      case 'expend':
        this.toggleExpend(windowName);
        return;
      default:
        return;
    }
  }

  toggleExpend(windowName) {
    var currWindow = this.props.windows[windowName];
    if (currWindow.isExpend) {
      currWindow.size = currWindow.prevSize;
      currWindow.location = currWindow.prevLocation;
      currWindow.isExpend = false;
    } else {
      currWindow.size = { x: '100%', y: 'calc(100% - 19px)' };
      currWindow.location = { x: 0, y: 19 };
      currWindow.isExpend = true;
    }
    this.props.updateWindow(currWindow);
  }

  render() {
    var openWindows = Object.values(this.props.windows).map((window) => {
      return <Folder window={window} key={window.name}
        clickActiveBar={this.windowActivated.bind(this)}
        MouseDown={this.mouseDown}
      />
    })
    return (
      <div className="desktop">
        {openWindows}
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log(state)
  return {
    windows: state.windowsStore.windows
  }
}

export default connect(mapStateToProps, actions)(Desktop)


// import React from 'react';

// const Desktop = () => (

//   <div className="desktop">
//     <div className="mama"></div>
//     <div className="dada"></div>
//   </div>
// )

// export default Desktop;