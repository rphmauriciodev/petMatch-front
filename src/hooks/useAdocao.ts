import { useState, useCallback } from "react";
import api from "../api";

export function useAdocao() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const endpoint = "/pets/adotar";

  const realizarAdocao = useCallback(
    async (petId: number | null, userId: number | undefined) => {
      try {
        setLoading(true);
        setError(null);

        const response = await api.post(endpoint, { petId, userId });
        return true;
      } catch (err: any) {
        setError(err.message || "Erro ao adotar o pet");
        console.error(err);
        return false;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { realizarAdocao, loading, error };
}
