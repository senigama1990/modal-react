import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
    const [modalWindow, setModalWindow] = useState(true)

    const closeModalByBtnX = () => {
        setModalWindow(!modalWindow)
    }
    return (
        <div className="App">
            <button onClick={() => setModalWindow(!modalWindow)} className='open-modal'>Open modal</button>
            <Modal modalWindow={modalWindow} setModalWindow={setModalWindow} closeModalByBtnX={closeModalByBtnX}/>
        </div>
    );
}

export default App;
