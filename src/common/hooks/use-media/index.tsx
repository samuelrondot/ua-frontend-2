import { useEffect, useState, useCallback } from "react";

const fallbackMatchMedia = (query: string) => {
  if (typeof matchMedia !== "function") {
    return null;
  }

  return matchMedia(query);
};

const omitMatchMediaResult = (
  matchMediaResult: {
    media: any;
    matches: any;
  } | null
) => {
  if (!matchMediaResult) {
    return null;
  }

  return {
    media: matchMediaResult.media,
    matches: matchMediaResult.matches,
  };
};

const useMedia = (query: string) => {
  const mounted = useState(false);
  const setMounted = mounted[1];

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  const result = useState(() => {
    return omitMatchMediaResult(fallbackMatchMedia(query));
  });

  const setResult = result[1];

  const callback = useCallback(
    (matchMediaResult: any) => {
      return setResult(omitMatchMediaResult(matchMediaResult));
    },
    [setResult]
  );

  useEffect(() => {
    const matchMediaResult = fallbackMatchMedia(query);

    callback(matchMediaResult);

    if (matchMediaResult) {
      matchMediaResult.addEventListener("change", callback);
    }

    return () => {
      if (matchMediaResult) {
        matchMediaResult.removeEventListener("change", callback);
      }
    };
  }, [callback, query]);

  if (!mounted[0]) {
    return null;
  }

  return result[0];
};

const useMediaPredicate = (query: string): boolean => {
  let result = useMedia(query);

  return (result && result.matches) || false;
};

export { useMedia, useMediaPredicate };
