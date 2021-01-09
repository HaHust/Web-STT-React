import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    content,
    name
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody>
          {content}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Thoát</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;