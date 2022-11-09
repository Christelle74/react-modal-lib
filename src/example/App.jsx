import React, { useState } from 'react';
import {Modal }from '../lib/Modal';
import './App.css';



function App() {

  const [displayModal, setDisplayModal] = useState(false)
  const modalStyle = {
    "background": "#4343ab",
    "margin": "auto",
    "borderRadius": "10px",
    "maxWidth": "400px",
    "width": "80%",
    "padding": "0.5rem",
    "border": "1px solid white",
  }

  const modalHeaderStyle = {
    "display": "flex",
    "justifyContent": "space-between",
    "alignItems": "center",
    "margin": "0.2rem 0.5rem 1.5rem",
    "color": "white",
  }

  const modalBodyStyle = {
    "fontSize": "20px",
    "color":"red",
    "textAlign": "center",
  }

  const modalFooterStyle = {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "marginBottom": "1rem",
    "marginTop": "2rem",
  }

    const xButtonStyle = {
      "fontSize": "1rem",
      "fontWeight": "700",
      "color": "rgb(39, 39, 39)",
      "cursor": "pointer",
      "border": "none",
      "background": "transparent",
    }

    const footerButtonStyle = {
      "background": "lightBlue",
      "color": "red",
      "width":"20%",
      "cursor": "pointer",
      "padding": "0.5rem",
      "margin": "0.5rem",
      "border": "1px solid rgb(39, 39, 39)"
    }


  return (
    <div className="App">
      <button className='modal-toggle' onClick={() => setDisplayModal(true)}>
        show modal
      </button>
      <Modal modalStyle={modalStyle} modalHeaderStyle={modalHeaderStyle} modalBodyStyle={modalBodyStyle} modalFooterStyle={modalFooterStyle} xButtonStyle={xButtonStyle} footerButtonStyle={footerButtonStyle} title="Enter your modal title here" message="Hello, your message here" showModal={displayModal} hideModal={() => setDisplayModal(false)} buttonText1='Ok' buttonText2='Cancel'/>
    </div>
  );
}

export default App;
