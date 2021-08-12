import React from 'react'
import Modal from 'react-modal';


const ConfirmModal = (props) => {
    const closeModal = props.closeModal
    const confirmAction = props.confirmAction
    const modalIsOpen = props.modalIsOpen
    Modal.setAppElement('#root');

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="text-center Modal"

                contentLabel="Confirm Model"
            >
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Confirm Modal</h5>
                    <button type="button" onClick={closeModal} className="text-white bg-primary" >
                        <span aria-hidden="true" style={{ fontSize: "20px" }}>&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Are you sure to continue ?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={confirmAction}>Yes</button>
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel</button>
                </div>
                </div>
            </Modal>
        </div>
    )
}

export default ConfirmModal
