import resume from "../assets/ALEXIS_VILLARAZA_resume2024.pdf"
export default function Links () {
  return (
    <div className="links">
      <a
        href="https://github.com/alvillaraza"
        target="_blank"
        rel="noopener noreferrer"
          >
            <i class="fa-brands fa-square-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/alvillaraza/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
  )
};