import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmDelete = props => (
  <Modal
    show={props.showDeleteItem}
    bsSize="small"
  >
    <Modal.Header>
      <Modal.Title> Delete {props.item_name} </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Are you sure you want delete this ?</p>
    </Modal.Body>
    <Modal.Footer>
      <Button
        bsSize="large"
        bsStyle="danger"
        onClick={() => props.deleteBucketListItem(props.selectedBucket, props.selected_item)}
      >
        Delete
      </Button>
      <Button
        bsSize="large"
        bsStyle="success"
        onClick={() => props.onShowDeleteItem()}
      >
        Cancel
      </Button>
    </Modal.Footer>
  </Modal>
);
export default ConfirmDelete;

