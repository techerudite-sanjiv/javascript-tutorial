import react, { useEffect, useState } from 'react';

export const useCounter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return [count, increment, decrement];
}

export const useFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.tsypicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    }, []);

    return [data];
}