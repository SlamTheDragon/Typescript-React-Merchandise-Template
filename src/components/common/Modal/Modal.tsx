import { ReactComponent as Close } from '@material-design-icons/svg/filled/close.svg';
import React from 'react';
import Button from '../Button/Button';
import './Modal.scss';

interface ModalProps {
    modalTitle: string
    isOpen: boolean
    children?: React.ReactNode
    onClose: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}

const Modal = ({ modalTitle, isOpen, onClose, children, onMouseEnter, onMouseLeave }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="m-modal" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="m-modal-content card">
                <div className='m-modal-header'>
                    <h1>{modalTitle}</h1>
                    <Button classItem={'m-btn ctrl-btn'} onclick={onClose}><Close /></Button>
                </div>
                {children}
            </div>
            <div className="m-modal-background" onClick={onClose} />
        </div>
    );
};

export default Modal;