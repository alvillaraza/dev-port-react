import React from 'react';
import css from '../assets/logo-css.png';
import redux from '../assets/logo-redux.png';
import Links from '../components/Links';
import graphqlIcon from '../assets/graphql.svg';

export default function LandingPage({ open, page }) {
  return (
    <div
      className={`landing-page-container ${
        page === 'landing-page' ? '' : 'hidden'
      }`}
    >
      <Links />
      <header className={`name-title ${open ? 'faded' : ''}`}>
        <h1>Alexis Villaraza</h1>
        <h2>SOFTWARE ENGINEER</h2>
      </header>
      <footer className={`tech-stack-icons ${open ? 'faded' : ''}`}>
        <i class='fa-brands fa-html5 fa-3x'></i>
        <img src={css} alt='css icon' />
        <i class='fa-brands fa-sass fa-3x'></i>
        <i class='fa-brands fa-less fa-3x'></i>
        <i class='fa-brands fa-js fa-3x'></i>
        <i class='fa-brands fa-react fa-3x'></i>
        <img src={redux} alt='redux icon' />
        <i class='fa-brands fa-python fa-3x'></i>
        <i class='fa-brands fa-golang fa-3x'></i>
        <img src={graphqlIcon} alt='graphql icon' />
        <i class='fa-brands fa-git-alt fa-3x'></i>
      </footer>
    </div>
  );
}
