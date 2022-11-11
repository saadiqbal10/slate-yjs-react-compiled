import { useCallback } from 'react';
import { CursorState } from '@slate-yjs/core';
import { useRemoteCursorStateStore } from './useRemoteCursorStateStore';
import { useStore } from './useStore';

export function useRemoteCursorStates<
  TCursorData extends Record<string, unknown> = Record<string, unknown>
>() {
  const store = useRemoteCursorStateStore<TCursorData>();
  return useStore(
    store,
    useCallback((cursors) => cursors, [])
  );
}

export function useRemoteCursorStatesSelector<
  TCursorData extends Record<string, unknown> = Record<string, unknown>,
  TSelection = unknown
>(
  selector: (cursors: Record<string, CursorState<TCursorData>>) => TSelection
): TSelection {
  const store = useRemoteCursorStateStore<TCursorData>();
  return useStore(store, selector);
}
