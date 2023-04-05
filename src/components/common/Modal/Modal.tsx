import React from 'react';
import Button from '../Button/Button';
import './Modal.scss';

interface ModalProps {
    isOpen: boolean;
    children: React.ReactNode;
    onClose: () => void;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="m-modal">

            <div className="m-modal-content card">
                <Button label={'close'} classItem={'m-btn ctrl-btn material-symbols-outlined'} onclick={onClose}/>
                {children}
            </div>
            <div className="m-modal-background" onClick={onClose}/>

        </div>
    );
};

export default Modal;