import { CursorState } from '@slate-yjs/core';
import { CursorStore } from './useRemoteCursorStateStore';
export declare function useStore<TCursorData extends Record<string, unknown>, TSelection = unknown>(store: CursorStore<TCursorData>, selector: (cursors: Record<string, CursorState<TCursorData>>) => TSelection): TSelection;
//# sourceMappingURL=useStore.d.ts.map