import { useCallback, useEffect } from 'react';

export function useOnKeydown(
  key: string,
  callback: (keyboardEvent: KeyboardEvent) => void,
) {
  const keydownHandler = useCallback(
    (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === key) {
        callback(keyboardEvent);
      }
    },
    [key, callback],
  );

  useEffect(() => {
    window.addEventListener('keydown', keydownHandler);

    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  }, [keydownHandler]);
}
