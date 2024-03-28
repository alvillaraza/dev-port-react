import React from 'react';

import Contact from '../components/Contact';

import portrait from '../assets/alexis-villaraza-portrait.jpg';

export default function AboutMe({ page }) {
  return (
    <div
      className={`about-me-container ${page === 'about-me' ? '' : 'hidden'}`}
    >
      <div className='portrait'>
        <img className='portrait' src={portrait} alt='portrait of Alexis' />
      </div>
      <div className='about-me-text'>
        <Contact />
        <div className='about-me-story'>
          <p>
            Alexis is an experienced Frontend-leaning Full Stack Software
            Engineer with 3.5 years of professional engineering experience. She
            has a proven track record of effectively navigating diverse
            environments, having worked in both a big enterprise like Carvana
            and a seed startup like Integrate. Alexis is known for her quick
            learning abilities, adaptability, and passion for making a positive
            impact through technology.
          </p>
          <p>
            During her time at Carvana, Alexis was one of three software
            engineers collaborating with cross-functional teams, including
            Product Managers, UI Designers, Back End Engineers, and Quality
            Engineers. She played a key role in supporting and maintaining
            Carvana's landing page.
          </p>
          <p>
            At Integrate, Alexis further honed her skills as a Junior Full Stack
            Software Engineer, working remotely in a small startup environment.
            She demonstrated exceptional ability in pivoting seamlessly between
            multiple projects and effectively managing competing priorities and
            deadlines to deliver high-quality solutions. Alexis's collaborative
            approach and strong communication skills with stakeholders and
            fellow engineers resulted in faster task submission and alignment
            with project goals.
          </p>
          <p>
            Outside of her technical expertise, Alexis is known for her
            leadership skills and strategic planning abilities, having hired and
            fostered team engagement of ~20 performers and established
            relationships with clients and business partners. Her background in
            management has equipped her with a keen ability to analyze
            situations from a holistic perspective and make calculated decisions
            that benefit the organization as a whole. Alexis's commitment to
            continuous improvement is evident in her proactive approach to
            seeking and incorporating feedback, resulting in consistent progress
            and professional growth.
          </p>
          <p>
            Currently, Alexis is seeking a full-time remote position in a
            company with 100+ employees where she can contribute her skills and
            thrive in a collaborative environment. Her goal is to continue
            learning and expanding her knowledge while making a positive impact
            through her work. For opportunities or inquiries, you can reach out
            to her at{' '}
            <a href='mailto:alexis.borja@gmail.com'>alexis.borja@gmail.com</a>.
          </p>
          {/* <p>
            Alexis is a Frontend-leaning Full Stack Software Engineer with entrepreneurial and
            leadership experience. Her background in management taught her to be
            a well organized and tactical planner, with a proficiency in working
            with various types of people.
          </p>
          <p>
            Alexis studied at Lambda School, learning both hard and soft skills
            in a span of 9 months. She built multiple apps in cross-functional
            teams as a student, working with UX Designers, Data Scientists, and
            other Web Developers. She went on to become a Team Lead at the same
            school, solidifying her technical skills by teaching students and
            managing team projects.
          </p>
          <p>
            She worked full time as Software Engineer I at Carvana. She worked on Carvana's landing page and search page using TypeScript, React, and Jest. She recently worked at Integrate as a Full Stack Software Engineer, gaining experience in a small start-up company where she added Golang for backend, GraphQL for APIs, Tailwind for styling, and Playwright for end-to-end testing to her repertoire. She is currently looking for a full time remote position.  If
            you or someone you know is hiring a Software Engineer, you can contact her at {' '}
            <a href="mailto:alexis.borja@gmail.com">alexis.borja@gmail.com</a>.
          </p> */}
          {/* <p>
            She is currently looking for a full time job to gain more experience
            as a Full Stack Developer. With a passion in eco-solutions, she
            hopes to, one day, use her development skills to provide a positive
            impact to mother nature.
          </p> */}
          {/* <ul>
            <li>
              Currently taking:
              <a
                href="https://frontendmasters.com/learn/fullstack/"
                target="_blank"
              >
                Front End Masters Full Stack Course
              </a>
            </li>
            <li>
              Finished self-study materials:
              <a href="https://javascript30.com/" target="_blank">
                Wes Bos 30 Days of Vanilla Javascript
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}
