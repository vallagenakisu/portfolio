import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      },
      {
        threshold: 0.15,
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return ref
}
