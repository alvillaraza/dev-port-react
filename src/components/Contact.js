import React from "react"

// TODO: make the other githun and linkedin into font awesome icons
import github from "../assets/logo-github.png"
import linkedin from "../assets/logo-linked-in.png"
import resume from "../assets/ALEXIS_VILLARAZA_resume2024.pdf"

export default function Contact() {
  return (
  
      <div className="contact-info">
        <h2>Alexis Villaraza</h2>
        <h3>480.703.7967</h3>
        <a href="mailto:alexis.borja@gmail.com"><h4>alexis.borja@gmail.com</h4></a>
        <div className="links">
          <a
            href="https://github.com/alvillaraza"
            target="_blank"
            rel="noopener noreferrer"
          >
          {/* <img src={github} alt="github icon" /> */ }
          <i class="fa-brands fa-square-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/alvillaraza/"
            target="_blank"
            rel="noopener noreferrer"
          >
          {/* <img src={linkedin} alt="linked in icon" /> */}
          <i class="fa-brands fa-linkedin fa-2x"></i>
        </a>
        {/* TODO: figure out how to make this so that it doesn't sign you up for adobe */}
        <a href={ resume }
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-user fa-xl"  title="Resume"></i>
        </a>
      </div>
      </div>
  )
}
