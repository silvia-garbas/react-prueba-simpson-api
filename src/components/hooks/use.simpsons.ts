import { useCallback, useEffect, useMemo, useState } from "react";
import { ApiRepository } from "../services/api.repository";
import {Simpson } from "../model/simpson";

export function useSimpsons() {
  const [simpsons, setSimpsons] = useState<Simpson[]>([]);
  const simpsonsUrl =
    "https://apisimpsons.fly.dev/api/personajes?limit=20&page=1";

  const repo: ApiRepository<Simpson> = useMemo(
    () => new ApiRepository<Simpson>(simpsonsUrl),
    []
  );

  const handleLoad = useCallback(async () => {
    const loadedSimpsons = await repo.getAll();
    setSimpsons(loadedSimpsons);
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return {
    simpsons,
    handleLoad,
  };
}
