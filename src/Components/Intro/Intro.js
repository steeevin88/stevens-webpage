import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-scroll';
import Typist from 'react-typist';
import './Intro.css';

function Intro() {
  const [randomText, setRandomText] = useState('Working on projects!');

  useEffect(() => {
    const textOptions = [
        'Leetcoding...',
        'Working on projects!',
        'Learning new technologies!',
        'Trying to become a software engineer!',
      ];

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * textOptions.length);
      setRandomText(textOptions[randomIndex]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='intro-table' id='intro'>
      <div className='intro-col'>
        <Typist className='intro-header'>Hey! I'm Steven.</Typist>
        <p>I'm striving everyday to become a software engineer! </p>
        <p>But as of right now, I am probably:</p>
        <div className='random-text-container'>
          <p>{randomText}</p>
        </div>
        <p>Click the button below to learn about me and this website.</p>
        <Link activeClass="active" to="about" spy={true} offset={-50} smooth={true} href="">
          <Button outline id='about-btn' style={{ width: '70%', 
          border: 'none', borderRadius: 10, fontSize: '2vw', fontFamily:'Arial' }}>
              About Me →
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
