import React, { useState } from "react"

import LandingPage from "./pages/Landing-page"
import AboutMe from "./pages/About-me"
import Resume from "./pages/Resume"
import Portfolio from "./pages/Portfolio"
import Nav from "./pages/Nav"
// import SEO from "../components/SEO"

import "./Normalize.css"
import "./portfolio.css"

export default function Home() {
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState("landing-page")

  return (
    <main>
      <div className="app-container">
        {/* <SEO /> */}
        <LandingPage open={open} setOpen={setOpen} page={page} />
        <AboutMe open={open} setOpen={setOpen} page={page} />
        <Resume open={open} setOpen={setOpen} page={page} />
        <Portfolio open={open} setOpen={setOpen} page={page} />
      </div>
      <Nav open={open} setOpen={setOpen} setPage={setPage} />
    </main>
  )
}
