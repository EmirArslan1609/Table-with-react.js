import ReactDOM, { createPortal } from 'react-dom';
import { useEffect } from 'react';

function Modal({onClose, children, actionBar}){

    useEffect(()=>{
        document.body.classList.add('overflow-hidden');

        return() =>{
            document.body.classList.remove('overflow-hidden');
        }        
    }, []);

    return ReactDOM.createPortal(
    <div>
        <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80 "></div>
        <div className="fixed inset-x-30p inset-y-30p bg-white p-10 ">
            {children}
            {actionBar}
        </div>
    </div>,
    document.querySelector('.modal-container')
    );


}

export default Modal;