"use client";

import { useMemo } from "react";

/**
 * Reusable filtered-list derivation for Projects, Blog, etc.
 * Filtering stays pure data → React render. Animation lifecycle
 * belongs in the list component (scoped useGSAP + deps), not here.
 */
export function useFilteredItems<T, F extends string>(
  items: T[],
  filter: F,
  allValue: F,
  match: (item: T, filter: F) => boolean
): T[] {
  return useMemo(() => {
    if (filter === allValue) return items;
    return items.filter((item) => match(item, filter));
  }, [items, filter, allValue, match]);
}
