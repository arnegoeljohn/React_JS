import React, { useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // Cleanup function
    return () => {
      controller.abort();
    };
  }, [url]); // Dependency array with url

  return { data, loading, error };
};
