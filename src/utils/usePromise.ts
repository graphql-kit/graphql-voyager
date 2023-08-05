import { useCallback, useEffect, useState } from 'react';

type PromiseState<T> =
  | { loading: true; error: null; value: undefined }
  | { loading: false; error: null; value: T }
  | { loading: false; error: unknown; value: undefined };

export type MaybePromise<T> = Promise<T> | T;

export function usePromise<T>(
  maybePromise: MaybePromise<T>,
): [PromiseState<T>, (value: T) => void] {
  const [state, setState] = useState<PromiseState<T>>({
    loading: true,
    error: null,
    value: undefined,
  });

  useEffect(() => {
    let isMounted = true;

    setState({ loading: true, error: null, value: undefined });
    Promise.resolve(maybePromise).then(
      (value) => {
        if (isMounted) {
          setState((oldState) =>
            oldState.loading // update only if unresolved
              ? { loading: false, error: null, value }
              : oldState,
          );
        }
      },
      (error) => {
        if (isMounted) {
          setState((oldState) =>
            oldState.loading // update only if unresolved
              ? { loading: false, error, value: undefined }
              : oldState,
          );
        }
      },
    );

    return () => {
      isMounted = false;
    };
  }, [maybePromise]);

  const resolveValue = useCallback((value: T) => {
    setState({ loading: false, error: null, value });
  }, []);

  return [state, resolveValue];
}
