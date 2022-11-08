import React, { useState } from 'react';
import {Modal }from '../lib/Modal';
import './App.css';



function App() {

  const [displayModal, setDisplayModal] = useState(false)
 
  return (
    <div className="App">
      <button className='modal-toggle' onClick={() => setDisplayModal(true)}>
        show modal
      </button>
      <Modal message="Hello, your message here" showModal={displayModal} hideModal={() => setDisplayModal(false)} />
    </div>
  );
}

export default App;
