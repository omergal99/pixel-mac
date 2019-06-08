import React from 'react';

const Folder = ({ window, MouseDown, clickActiveBar }) => (

  <div className="folder"
    style={{
      height: window.size.y, width: window.size.x,
      top: `${window.location.y}px`, left: `${window.location.x}px`,
      zIndex: window.zIndex
    }} >

    <div className="top">
      <div className="window-controls">
        <div onClick={ev => { ev.stopPropagation(); clickActiveBar(window.name, 'close') }} className="close"></div>
        <div onClick={ev => { ev.stopPropagation(); clickActiveBar(window.name, 'minimize') }} className="minimize"></div>
        <div onClick={ev => { ev.stopPropagation(); clickActiveBar(window.name, 'expend') }} className="expend"></div>
      </div>
      <label>Folder Name</label>
    </div>
    <div className="drag-drop" onMouseDown={MouseDown.bind(this)} data-name={window.name}></div>

    <div className="options">

    </div>
    <div className="aside">

    </div>
    <div className="content">

    </div>

  </div>
)

export default Folder;