import { useState } from "react";
import Modal from "../components/modal";

function ModalPage(){

    const [showModal, setShowModal] = useState(false);

    const handleClick = () =>{
        setShowModal(true);
    };

    const handleClose = () =>{
        setShowModal(false);
    };
    
    const actionBar = (
    <div>
        <button onClick={handleClose} className='absolute bottom-15p right-10p bg-blue-600 border-2 border-blue-900 rounded-md pl-2 pr-2 pt-1 pb-1'>
            Accept
        </button>
    </div>);

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Do you accept the agreement?</p>
        </Modal>
        );

    return(
        <div>
            <button className="bg-teal-400 border-2 border-teal-800 rounded-md m-3 p-1" onClick={handleClick}>Open Modal</button>
            {showModal && modal }
           </div>
    );
}

export default ModalPage;