import React from "react"

import lightning from "../assets/icon-lightning-bolt.png"
import link from "../assets/link.svg"
import BasicInfo from '../components/BasicInfo'

export default function Portfolio({ page }) {
  return (
    <div className={ `resume-container ${page === "portfolio" ? "" : "hidden"}` }>
      <BasicInfo />
      <div className="resume-experience">
        <section className="experience-block">
          <div className="dates">April 2021</div>

          <a
            href="https://fake-store-rust.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="first-line">
              <img src={link} alt="link icon" /> Faux Boutique
            </h1>
          </a>

          <h2 className="second-line">React, Redux, API</h2>

          <p className="description">
            Solo Project: E-commerce site built using redux.
            <ul>
              <li>
                <img src={lightning} alt="lightning icon" />
                Used a public API to display products information
              </li>
              <li>
                <img src={lightning} alt="lightning icon" />
                Developed state management with redux, making the code easier to
                maintain
              </li>
              <li>
                <img src={lightning} alt="lightning icon" />
                Added fuzzy search feature using Fuse.js
              </li>
              <li>
                <img src={lightning} alt="lightning icon" />
                Implemented advance design using LESS
              </li>
            </ul>
            Github:
            <a href="https://github.com/alvillaraza/fake-store" target="_blank" rel="noreferrer">
              https://github.com/alvillaraza/fake-store
            </a>
          </p>
        </section>
        <section className="experience-block">
          <div className="dates">December 2020 - January 2021</div>

          <a
            href="https://animal-crossing-git-main.alvillaraza.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="first-line">
              <img src={link} alt="link icon" /> ACNH Villager Picker
            </h1>
          </a>

          <h2 className="second-line">React, LESS, API</h2>

          <p className="description">
            Solo Project: If Animal Crossing and Tinder had a baby, this would
            be it. This website allows a user to choose characters out of a list
            and keep track of their chosen or rejected animals.
            <ul>
              <li>
                <img src={lightning} alt="lightning icon" />
                Used an ACNH public API to display character information
              </li>
              <li>
                <img src={lightning} alt="lightning icon" />
                Created a reusable interactive quiz complete with a scoreboard
                at the end
              </li>
              <li>
                <img src={lightning} alt="lightning icon" />
                Implemented advance design using LESS
              </li>
            </ul>
            Github:
            <a
              href="https://github.com/alvillaraza/animal-crossing"
              target="_blank" rel="noreferrer"
            >
              https://github.com/alvillaraza/animal-crossing
            </a>
          </p>
        </section>
        <section className="experience-block">
          <div className="dates">April - May 2020</div>
          <a
            href="https://refresh-fe-cyan.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="first-line">
              {" "}
              <img src={link} alt="link icon" /> Wellness Tracker
            </h1>
          </a>
          <h2 className="second-line">
            React, Redux, Node, API, PostgreSQL, JSON Web Token
          </h2>
          <p className="description">
            Collaborative school project: This was designed for companies who
            want to monitor their employees’ overall wellness.
            <ul>
              <li>
                <img src={lightning} alt="lightning icon" />
                An employee can sign in and track their sleep, water intake,
                exercise, and breaks.
              </li>
              <li>
                <img src={lightning} alt="lightning icon" />A company admin can
                also sign in to see each of the employee’s scores within each of
                their departments.
              </li>
              <li>
                <img src={lightning} alt="lightning icon" />
                Contributed to a cross-functional team of 4 developers and 1 UX
                designer on an 8 week sprint with 3 canvas releases.
              </li>
              <li>
                <img src={lightning} alt="lightning icon" /> Applied JSON web
                token to develop user credential authentication.
              </li>
              <li>
                <img src={lightning} alt="lightning icon" /> Developed API calls
                and endpoints.
              </li>
              <li>
                <img src={lightning} alt="lightning icon" />
                Implemented features and debugged code on the frontend and
                backend.
              </li>
              <li>
                <img src={lightning} alt="lightning icon" /> Organized pair
                programming sessions to increase efficiency.
              </li>
            </ul>
            <p>
              Github Frontend:{" "}
              <a
                href="https://github.com/alvillaraza/refresh-fe"
                target="_blank" rel="noreferrer"
              >
                https://github.com/Lambda-School-Labs/refresh-fe
              </a>
            </p>
            <p>
              Github Backend:{" "}
              <a
                href="https://github.com/Lambda-School-Labs/refresh-be"
                target="_blank" rel="noreferrer"
              >
                https://github.com/Lambda-School-Labs/refresh-be
              </a>
            </p>
          </p>
        </section>
        <section className="experience-block">
          <div className="dates">December 2019</div>
          <a
            href="https://user-interface-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="first-line">
              <img src={link} alt="link icon" /> Opti
            </h1>
          </a>
          <h2 className="second-line">HTML, LESS</h2>
          <p className="description">
            Collaborative school project: A website designed to find the best
            optimal price for an airbnb rental property.
            <ul>
              <li>
                <img src={lightning} alt="lightning icon" />
                Participated as a UI developer in a cross-functional team of 3
                developers and 4 data scientists on a weeklong project.
              </li>
              <li>
                <img src={lightning} alt="lightning icon" /> Designed and
                implemented the landing page using LESS.
              </li>
            </ul>
            Github:{" "}
            <a href="https://github.com/tryopti/user-interface" target="_blank" rel="noreferrer">
              https://github.com/tryopti/user-interface
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
