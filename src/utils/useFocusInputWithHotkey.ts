import { useCallback } from 'react';

import { useOnKeydown } from './useOnKeydown';

export function useFocusInputWithHotkey(
  target: HTMLInputElement | undefined,
  key: string,
) {
  const keydownHandler = useCallback(
    (keyboardEvent: KeyboardEvent) => {
      if (target && !isActiveElementTypable()) {
        target.focus();
        keyboardEvent.preventDefault();
      }
    },
    [target],
  );

  useOnKeydown(key, keydownHandler);
}

function isActiveElementTypable() {
  const activeElement = document.activeElement;

  const typableElements = [
    HTMLInputElement,
    HTMLTextAreaElement,
    HTMLSelectElement,
    HTMLDataListElement,
    HTMLFieldSetElement,
  ];

  return (
    typableElements.some((type) => activeElement instanceof type) ||
    activeElement?.hasAttribute('contentEditable')
  );
}
