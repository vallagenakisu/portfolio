import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [sectionIds])

  return activeSection
}
