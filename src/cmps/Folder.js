import React from 'react';

const Folder = ({ window, MouseDown }) => (

  <div className="folder"
    style={{
      height: `${window.size.y}px`, width: `${window.size.x}px`,
      top: `${window.location.y}px`, left: `${window.location.x}px`,
      backgroundColor: window.bc, position: 'absolute',
      zIndex: window.zIndex
    }} >

    <div className="top" onMouseDown={MouseDown.bind(this)} data-name={window.name}>
      <div className="window-controls">
        <div className="close"></div>
        <div className="expend"></div>
        <div className="minimize"></div>
      </div>
      <label>Folder Name</label>
    </div>

    <div className="options">

    </div>
    <div className="aside">

    </div>
    <div className="content">

    </div>

  </div>
)

export default Folder;