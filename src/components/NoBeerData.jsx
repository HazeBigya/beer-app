
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import AddBeerDialog from './AddBeerDialog';

const NoBeerData = () => {
    const [show, setShow] = useState(false);

    const handleShowAddBeerDialog = () => {
        setShow(true);
    };

    const handleCloseAddBeerDialog = () => {
        setShow(false);
    };

    return (
        <Container className="mt-5">
            <div className="noDataBox">
                <div className='mt-5 mx-auto'>
                    <label className='sub-text'>
                        Nothing to see yet.
                    </label>
                    <label className='sub-text'>
                        <span className='href-text' onClick={handleShowAddBeerDialog}>
                            Click here &nbsp;
                        </span>
                        to add your first beer!
                    </label>
                </div>
            </div>
            <AddBeerDialog show={show} onHide={handleCloseAddBeerDialog} />
        </Container>
    )
}

export default NoBeerData;