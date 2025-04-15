import { useState } from "react";

const useFetch = (apiUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error("Failed to fetch data.");
      const json = await res.json();
      setData(json.results || []);
    } catch (err) {
      setError(err.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useFetch;
