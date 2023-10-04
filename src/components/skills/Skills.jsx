import React from 'react'
import './Skills.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
      <h2>Relevant Skills</h2>
      <div className='skills__container'>
        <div className='skills__frontend'>
          <div className='skills__content'>
            <article>
            <div>
              <h4>
                  Meticulous attention to detail and exceptional organizational
                  skills, demonstrated through consistently delivering error-
                  free work
              </h4>
            </div>
            </article>

            <article>
            <div>
              <h4>
                Strong verbal and written communication skills, effectively
                conveying complex information to diverse audiences
                </h4>
            </div>
            </article>

            <article>
            <div>
              <h4>
                Passionate about design and marketing, consistently
                seeking out creative solutions and staying up to date with
                industry trends
              </h4>
            </div>
            </article>

            <article>
            <div>
              <h4>
                Proactive and adept at balancing multiple priorities,
                consistently meeting deadlines in fast-paced environments
              </h4>
            </div>
            </article>

            <article>
            <div>
              <h4>
                Experienced in working both independently and
                collaboratively within cross-functional teams to achieve
                project objectives
              </h4>
            </div>
            </article>

            <article>
            <div>
              <h4>
                  Proficient in using various software and tools including
                  Canva, Salesforce, Hootsuite, Mailchimp, Microsoft Outlook,
                  Microsoft Excel, Adobe Creative Suite, Adobe Lightroom
                  Classic, Microsoft Word, HubSpot, and RStudio
              </h4>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills