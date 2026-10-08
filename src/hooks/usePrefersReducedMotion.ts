import { useSyncExternalStore } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function subscribeToReducedMotion(onChange: () => void): () => void {
  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY)
  mediaQueryList.addEventListener('change', onChange)
  return () => mediaQueryList.removeEventListener('change', onChange)
}

function readReducedMotionPreference(): boolean {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribeToReducedMotion, readReducedMotionPreference, () => false)
}
