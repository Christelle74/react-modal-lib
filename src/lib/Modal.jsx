import React from "react";
import './modale.css'
import PropTypes from "prop-types"

export const Modal = ({ showModal, hideModal, message }) =>{

    return showModal && (
            <>
            <div className="modal-overlay">
                <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">
                        <button type="button"   className="modal-close-button"  onClick={hideModal}>
                            <span>X</span>
                        </button>
                    </div>
                    <div className="modal-body">{message}</div>
                    <div className="modal-footer">
                        <button type="button" className="modal-close-button-footer" onClick={hideModal}>OK</button>
                    </div>
                </div>
                </div>
            </div>
            </>
    )
}



Modal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired
}