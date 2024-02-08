import { useEffect } from 'react';
import {
  useTrackVisibility,
  IntersectionObserverHookArgs,
  IntersectionObserverHookRefCallback as UseInfiniteScrollHookRefCallback,
  IntersectionObserverHookRootRefCallback as UseInfiniteScrollHookRootRefCallback,
} from 'react-intersection-observer-hook';

const DEFAULT_DELAY_IN_MS = 100;

function useInfiniteScroll({
  loading,
  hasNextPage,
  onLoadMore,
  rootMargin,
  disabled,
  delayInMs = DEFAULT_DELAY_IN_MS,
}) {
  const [ref, { rootRef, isVisible }] = useTrackVisibility({
    rootMargin,
  });

  const shouldLoadMore = !disabled && !loading && isVisible && hasNextPage;

  useEffect(() => {
    if (shouldLoadMore) {
      const timer = setTimeout(() => {
        onLoadMore();
      }, delayInMs);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [onLoadMore, shouldLoadMore, delayInMs]);

  return [ref, { rootRef }];
}

export default useInfiniteScroll;
