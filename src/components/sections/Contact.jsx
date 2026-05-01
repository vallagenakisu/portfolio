import { useState } from 'react'
import SectionWrapper from '../layout/SectionWrapper'
import { personalInfo } from '../../data/portfolioData'

function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <SectionWrapper id="contact" label="Contact">
      <div className="contact-stack">
        <div className="contact-row">
          <a href={`mailto:${personalInfo.email}`} className="contact-link">
            {personalInfo.email}
          </a>
          <button type="button" className="copy-button" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact-link">
          GitHub -&gt;
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact-link">
          LinkedIn -&gt;
        </a>
      </div>
    </SectionWrapper>
  )
}

export default Contact
