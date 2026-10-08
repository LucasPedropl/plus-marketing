import { useEffect, useState } from 'react'

export function useHasScrolledPast(thresholdInPixels: number): boolean {
  const [hasScrolledPast, setHasScrolledPast] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setHasScrolledPast(window.scrollY > thresholdInPixels)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [thresholdInPixels])

  return hasScrolledPast
}
