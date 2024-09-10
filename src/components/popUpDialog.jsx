import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MPPopup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.modalBody}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>{props.modalCloseText}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MPPopup;