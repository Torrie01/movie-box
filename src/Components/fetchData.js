import { useEffect, useState } from 'react';

const useFetch = (initialUrl) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = (page) => {
    setUrl(`${initialUrl}&page=${page}`);
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Data could not be fetched');
        }
        return res.json();
      })
      .then((responseData) => {
        if (responseData.results) {
          const newData = responseData.results.slice(0, 20);
          setData(newData);
        } else {
          setData(responseData);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { loading, data, error, fetchData };
};

export default useFetch;