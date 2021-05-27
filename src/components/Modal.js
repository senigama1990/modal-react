import React from 'react'
import ModalContent from './ModalContent'

function Modal({ modalWindow, closeModalByBtnX }) {
    return (
        <div className='modal-wrapper'
            style={{
                top: modalWindow ? '-400px': ''
            }}
        >
            <div className="modal-header">
                <p>Modal window</p>
                <span onClick={closeModalByBtnX} className='close-modal=btn'>x</span>
            </div>
            <ModalContent/>
        </div>
    )
}

export default Modal
