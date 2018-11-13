import React from 'react';
import Modal from 'react-modal';
import { FormattedMessage } from 'react-intl';

const ConfirmModal = (props) => (
    <Modal
        isOpen={!!props.openedModal}
        onRequestClose={props.handleCloseModal}
        contentLabel={props.title}
        closeTimeoutMS={200}
        className="modal"
    >
        <FormattedMessage id="exepense-remove.title" defaultMessage="You want to remove this expense?">
            {(txt) => (
                <h3 className="modal__title">{txt}</h3>
            )}
        </FormattedMessage>
        {props.openedModal && <p className="modal__body">{props.openedModal}</p>}
        <FormattedMessage id="modal.yes" defaultMessage="Yes">
            {(txt) => (
                <button className="button button--third" onClick={props.handleConfirmModal}>{txt}</button>
            )}
        </FormattedMessage>

        <FormattedMessage id="modal.no" defaultMessage="No">
            {(txt) => (
                <button className="button button--third" onClick={props.handleCloseModal}>{txt}</button>
            )}
        </FormattedMessage>



    </Modal>
);

Modal.setAppElement('body');

export default ConfirmModal;
