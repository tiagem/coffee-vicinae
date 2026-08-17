import { useEffect, useState } from "react";

export function usePromise<T>(fn: () => T | Promise<T>): { value: T | undefined; loading: boolean } {
  const [value, setValue] = useState<T | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    Promise.resolve()
      .then(fn)
      .then((result) => {
        if (!cancelled) setValue(result);
      })
      .catch(() => {
        if (!cancelled) setValue(undefined);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [fn]);

  return { value, loading };
}
