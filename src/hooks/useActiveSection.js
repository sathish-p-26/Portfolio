import { useState, useEffect, useRef } from 'react'

const navSections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'certifications', 'contact']

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home')
  const observerRef = useRef(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    navSections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observerRef.current.observe(el)
    })

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [])

  return activeSection
}
