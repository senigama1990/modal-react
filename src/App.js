import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
    const [modalWindow, setModalWindow] = useState(false)
    return (
        <div className="App">
            <button onClick={()=> setModalWindow(true)} className='open-modal'>Open modal</button>
            <Modal modalWindow={modalWindow} setModalWindow={ setModalWindow }/>
        </div>
    );
}

export default App;
