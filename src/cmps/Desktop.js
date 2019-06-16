import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../store/actions';

import Folder from './Folder';

class Desktop extends Component {

  constructor(props) {
    super(props);
    this.handleMove = this.handleMove.bind(this);
  }

  componentDidMount() {
    // actions.loadWindows(); // IN csae we have NOT dispatch 
    this.props.loadWindows(); // IN csae of dispatch needed 
  }

 

  state = {
    isDraging: false,
    currDragName: 'window1',
    pointerDiff: { x: 1, y: 1 },
    generalZIndex: { lastCurrDragName: '', num: 1 },
  }

  handleMove(ev) {
    // console.log('ev: ', ev);
    if (this.props) {
      var copyState = this.props.windows;

      if (!this.state.isDraging) {
        var diffX = ev.clientX - copyState[this.state.currDragName].location.x;
        var diffY = ev.clientY - copyState[this.state.currDragName].location.y;
        this.setState({ pointerDiff: { x: diffX, y: diffY } });
      }

      var x = ev.clientX - this.state.pointerDiff.x;
      var y = ev.clientY - this.state.pointerDiff.y;
      copyState[this.state.currDragName].location = { x, y }
      copyState[this.state.currDragName].prevLocation = { x, y }
      this.setState({ isDraging: true })

      this.props.updateWindow(copyState[this.state.currDragName]);
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
      var copyState = this.props.windows;
      var heighestZ = this.state.generalZIndex.num;
      copyState[this.state.currDragName].zIndex = heighestZ;
      this.setState({ generalZIndex: { lastCurrDragName: this.state.currDragName, num: heighestZ + 1 } })
      this.props.updateWindow(copyState[this.state.currDragName]);
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
    var copyState = this.props.windows;
    if (copyState[windowName].isExpend) {
      copyState[windowName].size = copyState[windowName].prevSize;
      copyState[windowName].location = copyState[windowName].prevLocation;
      copyState[windowName].isExpend = false;
    } else {
      copyState[windowName].size = { x: '100%', y: 'calc(100% - 19px)' };
      copyState[windowName].location = { x: 0, y: 19 };
      copyState[windowName].isExpend = true;
    }
    this.props.updateWindow(copyState[windowName]);
  }

  render() {
    var openWindows = Object.values(this.props.windows).map((window) => {
      return <Folder window={window} key={window.name}
      clickActiveBar={this.windowActivated.bind(this)}
      MouseDown={this.mouseDown.bind(this)}
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