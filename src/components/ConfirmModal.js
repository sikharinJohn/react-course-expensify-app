import React from 'react';
import Modal from 'react-modal';

const ConfirmModal = (props) => (
    <Modal
        isOpen={!!props.openedModal}
        onRequestClose={props.handleCloseModal}
        contentLabel={props.title}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">{props.title}</h3>
        {props.openedModal && <p className="modal__body">{props.openedModal}</p>}
        <button className="button button--third" onClick={props.handleConfirmModal}>Yes</button>
        <button className="button button--third" onClick={props.handleCloseModal}>No</button>
    </Modal>
);

Modal.setAppElement('body');

export default ConfirmModal;
