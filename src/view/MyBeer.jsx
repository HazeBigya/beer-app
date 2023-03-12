import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import AddBeerDialog from '../components/AddBeerDialog';
import NoBeerData from '../components/NoBeerData';
import BeerCard from "../components/BeerCard";

const MyBeer = () => {
    const [show, setShow] = useState(false);
    const myBeer = useSelector(state => state.myBeer)

    const handleShowAddBeerDialog = () => {
        setShow(true);
    };

    const handleCloseAddBeerDialog = () => {
        setShow(false);
    };

    return (
        <Container className='d-flex flex-column'>
            <Button variant="primary" className='addBeerBtn d-block' onClick={handleShowAddBeerDialog}>Add a new Beer</Button>
            <AddBeerDialog show={show} onHide={handleCloseAddBeerDialog} />
            <div className="mt-3 d-block">
                {myBeer.itemsList.length === 0 ? (
                    <NoBeerData />
                ) : (
                    <div className="card_container grid-container">
                        {myBeer.itemsList.map((item) => (
                            <BeerCard
                                key={item.id}
                                name={item.name}
                                genre={item.genre}
                                description={item.description}
                                imageURL={item.image_url}
                                ingredients={""}
                            />
                        ))}
                    </div>
                )}
            </div>
        </Container>
    )
}

export default MyBeer;