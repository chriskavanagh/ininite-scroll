import { useEffect, useState } from "react";
import axios from "axios";

function useRestApi(url, query, pageNumber) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchData = async () => {
      try {
        const { data } = await axios(url, {
          params: { q: query, page: pageNumber },
          cancelToken: source.token,
        });

        setData((prevState) => {
          return [...new Set([...prevState, ...data.docs.map((b) => b.title)])];
        });

        setHasMore(data.docs.length > 0);
        setLoading(false);
      } catch (e) {
        if (axios.isCancel(e)) return;
        setError(true);
      }
    };
    fetchData();
    return () => source.cancel("Operation Canceled.");
  }, [url, setData, query, pageNumber]);

  return { loading, error, data, hasMore };
} // useRestApi

export default useRestApi;
