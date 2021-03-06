import React from 'react';

const Dock = () => (
  <div className="dock">
    <div className="line-items flex space-center align-center">
      <div className="wrap-icon">
        <img src="assets/img/dock items/Finder.png" alt="Finder" title="Finder" />
      </div>
      <div className="wrap-icon">
        <img src="assets/img/dock items/Notes.png" alt="Notes" title="Notes" />
      </div>
      <div className="wrap-icon">
        <img src="assets/img/dock items/AppStore.png" alt="AppStore" title="AppStore" />
      </div>
      <div className="wrap-icon">
        <img src="assets/img/dock items/Safari.png" alt="Safari" title="Safari" />
      </div>
      <div className="wrap-icon">
        <img src="assets/img/dock items/Maps.png" alt="Maps" title="Maps" />
      </div>
      <div className="wrap-icon">
        <img src="assets/img/dock items/Calendar.png" alt="Calendar" title="Calendar" />
      </div>
      <div className="wrap-icon">
        <img src="assets/img/dock items/Photos.png" alt="Photos" title="Photos" />
      </div>
    </div>
  </div>
)

export default Dock;