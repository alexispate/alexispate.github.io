import React from 'react'
import './Experience.css'
import MakeAWish from '../../assests/make-a-wish-foundation-utah.jpg'
import OneHeart from '../../assests/oneheart.png'
import Berkshire from '../../assests/berkshire.webp'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {RiTwitterXLine} from 'react-icons/ri'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Work Experience</h5>
      <h2>Experience</h2>
      <div className='experience__container'>
        <article className='experience__item'>
            <div className='experience__item-image'>
              <img src={MakeAWish} alt="MakeAWish" ></img>
            </div>
            <h1>
                Marketing and Communcations Intern - Make-A-Wish Utah
            </h1>
            <h2>
                December 2022 - June 2023
            </h2>
            <h3>
                <ul>
                    <li className='list__item'>
                      Secured a $500 grant for the Make-A-Wish Utah Chapter through a compelling
                      wish story submission, resulting in funding for fulfilling a child's wish.
                    </li>
                    <li className='list__item'>
                      Maintained social media channels for the organization and increased reach
                      through consistent content creation, community engagement, and strategic use
                      of hashtags.                    
                    </li>
                    <li className='list__item'>
                      Composed press releases and PSAs which increased brand recognition by
                      securing media mentions in high-profile publications.
                    </li>
                    <li className='list__item'>
                      Conducted interviews with wish families, resulting in the creation of 47 heartfelt
                      wish stories that resonated with the target audience and generated significant
                      engagement.
                    </li>
                    <li className='list__item'>
                      Assisted with media campaigns for various promotions and fundraisers.
                    </li>
                </ul>
            </h3>
            <h4>
              Examples of my work:
            </h4>
            <div className='experience__item-cta'>
              <a href='https://www.instagram.com/p/CpiSwqmr140/' target="_blank"><BsInstagram size={50}/></a>
              <a href='https://www.facebook.com/makeawishutah/posts/pfbid02nUDbgTiibbfjrUmMyHCvqKjsLvYtGxzR68SehvpwaU1e2N6hFVJRboySFNqUVeJtl' target="_blank"><FaFacebookF size={50}/></a>
              <a href='https://www.linkedin.com/posts/make-a-wish-utah_driveforwishes2023-wishcar-activity-7050137732689399809-25NW?utm_source=share&utm_medium=member_desktop' target="_blank"><BsLinkedin size={50}/></a>
              <a href='https://twitter.com/makeawishutah/status/1619033335682023425' target="_blank"><RiTwitterXLine size={50}/></a>
            </div>
        </article>
        <article className='experience__item'>
            <div className='experience__item-image'>
              <img src={OneHeart} alt="MakeAWish" ></img>
            </div>
            <h1>
                Communications Intern - 
                <br/>
                One Heart Worldwide
            </h1>
            <h2>
                December 2022 - June 2023
            </h2>
            <h3>
                <ul>
                    <li className='list__item'>
                      Increased social media engagement by 10% through strategic content planning
                      and scheduling.       
                    </li>
                    <li className='list__item'>
                      Increased online donations by through the implementation of personalized
                      email marketing campaigns and effective storytelling techniques.                  
                    </li>
                    <li className='list__item'>
                      Tracked social media metrics and achieved a 15% growth in engagement rate
                      through data-driven content optimization.
                    </li>
                    <li className='list__item'>
                      Collaborated with interns and staff to execute successful cross-departmental
                      projects, resulting in a 20% increase in overall project completion rate.
                    </li>
                    <li className='list__item'>
                      Successfully executed a social media campaign that achieved a 5% increase in
                      brand awareness within the target audience.
                    </li>
                </ul>
            </h3>
            <h4>
              Examples of my work:
            </h4>
            <div className='experience__item-cta'>
              <a href='https://www.instagram.com/p/Cpf8MmXOFV5/' target="_blank"><BsInstagram size={50}/></a>
              <a href='https://www.facebook.com/OneHeartWorldwide/posts/pfbid031VqqJijMzDXheeXmczcW7GhRWkesaGXaTCCXRMvtH9pMjza1KYcma1rzc8fLBM7Al' target="_blank"><FaFacebookF size={50}/></a>
              <a href='https://www.linkedin.com/posts/one-heart-world-wide_annualreport-empoweringcommunities-sustainablechange-activity-7055287876258861056-rQJH?utm_source=share&utm_medium=member_desktop' target="_blank"><BsLinkedin size={50}/></a>
              <a href='https://twitter.com/OneHeartWW/status/1649223953938804739' target="_blank"><RiTwitterXLine size={50}/></a>
            </div>
        </article>
        <article className='experience__item'>
            <div className='experience__item-image'>
              <img src={Berkshire} alt="MakeAWish" ></img>
            </div>
            <br/>
            <h1>
              Marketing Consultant Intern - The Pate Team REALTORS
            </h1>
            <h2>
              December 2022 - June 2023
            </h2>
            <h3>
                <ul>
                    <li className='list__item'>
                      Supported marketing team in developing promotional strategies and targeted
                      campaigns.
                    </li>
                    <li className='list__item'>
                      Supported sales activities through promotional material and market research.                    
                    </li>
                    <li className='list__item'>
                      Built a vibrant online community by fostering conversations and engagement
                      on social media, leading to a 15% increase in customer referrals and
                      recommendations.
                    </li>
                </ul>
            </h3>
            <h4>
              Examples of my work:
            </h4>
            <div className='experience__item-cta'>
              <a href='https://www.instagram.com/p/Csb_1gHBkHI/' target="_blank"><BsInstagram size={50}/></a>
              <a href='https://www.facebook.com/UtahRealtorNataliePateWagner/posts/pfbid0HyekYuyDwbAfXdVtzZpsac9bcvJRSBQxGqWQnxnatzQTWqBQppsBsePyUttG44qJl' target="_blank"><FaFacebookF size={50}/></a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Experience