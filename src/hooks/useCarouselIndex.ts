import { useCallback, useState } from 'react'

export interface CarouselIndexControls {
  activeIndex: number
  goToIndex: (targetIndex: number) => void
  goToNext: () => void
  goToPrevious: () => void
}

export function useCarouselIndex(itemCount: number): CarouselIndexControls {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToIndex = useCallback(
    (targetIndex: number) => setActiveIndex(((targetIndex % itemCount) + itemCount) % itemCount),
    [itemCount],
  )

  const goToNext = useCallback(
    () => setActiveIndex((currentIndex) => (currentIndex + 1) % itemCount),
    [itemCount],
  )

  const goToPrevious = useCallback(
    () => setActiveIndex((currentIndex) => (currentIndex - 1 + itemCount) % itemCount),
    [itemCount],
  )

  return { activeIndex, goToIndex, goToNext, goToPrevious }
}
