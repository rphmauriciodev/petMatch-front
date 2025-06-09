import { useState, useEffect, useCallback } from "react";
import api from "../api";

export function useApi<T>(endpoint: string | null) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    if (endpoint !== null) {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get(endpoint);
        setData(response.data.data ?? response.data);
      } catch (err: any) {
        setError(err.message || "Deu erro man!");
      } finally {
        setLoading(false);
      }
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
