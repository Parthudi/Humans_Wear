import React from "react";
import {Modal} from "@material-ui/core";

const ModalCompo = React.memo((props) => {
    return(
        <Modal
            open={props.showModal}
            onClose={props.closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
               {props.children}
        </Modal>
    )
});

export default ModalCompo;