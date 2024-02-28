import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addLanguages } from '../redux/languagesSlice';
import { addProduct } from '../redux/addProductSlice';

const useCallAPI = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [languages, setLanguages] = useState(null);
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
    
    const fetchData = async (url, setter) => {
        try {
            setLoading(true);
            const res = await axios.get(url);
            setter(res.data);
        } catch (error) {
            setError(error.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setError("");
        }, 3500);
        return () => clearTimeout(timer);
    }, [error]);

    const getLanguages = async () => {
        await fetchData('/api/languages', setLanguages);
    };

    const getProducts = async (lang) => {
        await fetchData(`/api/product/?lang=${lang}`, setProduct);
    };

    useEffect(() => {
        if (languages) {
            dispatch(addLanguages(languages));
        }
    }, [dispatch, languages]);

    useEffect(() => {
        if (product) {
            dispatch(addProduct(product));
        }
    }, [dispatch, product]);

    return {
        loading,
        error,
        languages,
        product,
        getLanguages,
        getProducts
    };
}

export default useCallAPI;
