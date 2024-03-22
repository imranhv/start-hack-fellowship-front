import React, {PropsWithChildren} from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
    open?: boolean
    onClose?: () => void
}

const Modal = ({open, onClose, children}: PropsWithChildren<ModalProps>) => {
    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    if (!open) return null

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div>
                    <svg onClick={onClose} width="22" height="22" viewBox="0 0 22 22" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.4248 20.5397L1 1" stroke="black" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M1 20.5397L20.4248 1" stroke="black" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;