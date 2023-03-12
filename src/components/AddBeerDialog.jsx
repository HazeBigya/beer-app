import { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { myBeerActions } from "../store/slice/my_beer.slice";
import { nanoid } from "nanoid";

const AddBeerDialog = (props) => {
  const [show, setShow] = useState(props.show);
  const [formData, setFormData] = useState({
    name: '',
    genre: '',
    description: ''
  });

  const dispatch = useDispatch();

  const imageUrl = `${window.location.origin}/assets/mybeer.png`;

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const handleClose = () => {
    setFormData({
      name: '',
      genre: '',
      description: ''
    });
    props.onHide();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(myBeerActions.addItems({
      id: nanoid(),
      name: formData.name,
      genre: formData.name,
      description: formData.name,
      image_url: imageUrl
    }))
    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new beer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imageUrl} className='beerImg' alt='Img not found' />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="beerName">
              <Form.Control type="text" name="name" placeholder="Beer Name *" value={formData.name} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="genre">
              <Form.Control type="text" name="genre" placeholder="Genre *" required value={formData.genre} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="beerName">
              <Form.Control
                name="description"
                as="textarea"
                placeholder="Description *"
                style={{ height: '100px' }}
                value={formData.description} onChange={handleInputChange}
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="light" type="button" style={{ marginRight: "0.5rem" }} onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddBeerDialog;