import { useState, useEffect } from "react";
import api from "../api";

export function useApi<T>(endpoint: string) {
  const [data, setData] = useState<T | undefined>( undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    api
      .get(endpoint)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        setError(err.message || "Deu erro man!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [endpoint]);

  return { data, loading, error };
}
