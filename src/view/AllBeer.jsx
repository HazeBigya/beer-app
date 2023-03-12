import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import useFetchBeer from "../api/punkApi";
import { Container } from 'react-bootstrap';
import { allBeerActions } from "../store/slice/all_beer.slice";
import BeerCard from "../components/BeerCard";

const AllBeer = () => {
    const allBeer = useSelector(state => state.allBeer);
    const dispatch = useDispatch();

    const { data, isLoading, error } = useFetchBeer(allBeer.page, allBeer.perPage);

    useEffect(() => {
        if (data) {
            dispatch(allBeerActions.setItems(data));
        }
    }, [data, dispatch]);

    const loadMore = () => {
        dispatch(allBeerActions.loadItems())
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Container>
            {data !== undefined ? (
                <div className="card_container grid-container">
                    {allBeer.itemsList.map((item) => (
                        <BeerCard
                            key={item.id}
                            name={item.name}
                            genre={item.tagline}
                            description={item.description}
                            imageURL={item.image_url}
                            ingredients={item.ingredients}
                        />
                    ))}
                </div>
            ) : (
                <div>No data available</div>
            )}
            <button className="loadMoreBtn" onClick={loadMore}>Load More &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16"> <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" /> </svg></button>
        </Container >
    )
}

export default AllBeer;