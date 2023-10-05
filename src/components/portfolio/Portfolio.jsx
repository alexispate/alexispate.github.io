import React from 'react'
import './Portfolio.css'
import Photo1 from '../../assests/photo1.jpeg'
import Photo2 from '../../assests/photo2.jpeg'
import Photo3 from '../../assests/photo3.jpeg'
import Photo4 from '../../assests/photo4.jpeg'
import Photo5 from '../../assests/photo5.jpeg'
import Photo6 from '../../assests/photo6.jpeg'
import Photo7 from '../../assests/photo7.jpeg'
import Photo8 from '../../assests/photo8.jpeg'
import Photo9 from '../../assests/photo9.jpeg'




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Social Media</h2>
      <p className='social__media'>
        My social media experience has been a dynamic journey through the ever-evolving landscape of digital communication. 
        I have honed my skills in crafting engaging content, managing multiple platforms, and implementing effective strategies to grow an online presence and engagement. 
        I have successfully navigated the intricacies of various social media platforms, leveraging their unique features to reach and connect with diverse audiences. 
        My ability to analyze data, track metrics, and adapt strategies based on insights has been instrumental in achieving tangible results such as: increased followers, improved brand visibility, and higher user engagement. 
        With a keen eye for trends and a commitment to staying updated with the latest industry developments, I am well-equipped to drive social media success for any project or organization.
      </p>
      <div className='portfolio__container'> 
      <article className='portfolio__item'>
          <div className='portofolio__image-image'>
            <img src={Photo1}/>
          </div>

        </article>

        <article className='portfolio__item'>
          <div className='portofolio__image-image'>
            <img src={Photo2} />
          </div>

        </article>

        <article className='portfolio__item'>
          <div className='portofolio__image-image'>
            <img src={Photo3} />
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portofolio__image-image'>
            <img src={Photo4} />
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portofolio__image-image'>
           <img src={Photo5} />
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portofolio__image-image'>
           <img src={Photo6} />
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portofolio__image-image'>
            <img src={Photo7} />
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portofolio__image-image'>
            <img src={Photo8} />
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portofolio__image-image'>
            <img src={Photo9} />
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio