import { useState, useEffect } from 'react';
import { CursorState } from '@slate-yjs/core';
import { CursorStore } from './useRemoteCursorStateStore';

export function useStore<
  TCursorData extends Record<string, unknown>,
  TSelection = unknown
>(
  store: CursorStore<TCursorData>,
  selector: (cursors: Record<string, CursorState<TCursorData>>) => TSelection
) {
  const [subscribe, getSnapshot] = store;
  const [state, setState] = useState(() => selector(getSnapshot()));

  useEffect(() => {
    const callback = () => setState(selector(getSnapshot()));
    const unsubscribe = subscribe(callback);
    callback();
    return unsubscribe;
  }, [subscribe, getSnapshot, selector]);

  return state;
}