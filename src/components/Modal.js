import React from 'react'
import ModalContent from './ModalContent'

function Modal({ modalWindow, setModalWindow }) {
    return (
        <div className='modal-wrapper'>
            <div className="modal-header">
                <p>Modal window</p>
                <span className='close-modal=btn'>x</span>
            </div>
            <ModalContent/>
        </div>
    )
}

export default Modal
