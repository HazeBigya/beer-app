import { useState, useEffect } from 'react';
import axios from 'axios';

import config from "../config"

const useFetchBeer = (page, perPage) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `${config.endpoint.punkApi}?page=${page}&per_page=${perPage}`;
                const response = await axios.get(url);
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [page, perPage]);

    return { data, isLoading, error };
};

export default useFetchBeer;