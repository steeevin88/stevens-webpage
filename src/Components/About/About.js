import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-scroll';
import './About.css';

function About() {
    return (
        <div className='about-page' id='about'>
            <div className='about-table'>
                <div className='about-col'>
                    <div className='about-header'>
                        <p>ABOUT</p>
                        <b>Welcome! </b>
                    </div>
                    <p>Thanks for visiting! My name is Steven Le.
                    <br></br>
                    <br></br>
                    I'm currently studying computer science at San Jose State
                    University, pursuing a bachelor's of science.
                    <br></br>
                    <br></br>
                    I'm working towards building a career as a software engineer;
                    this website is intended to serve as a digitial portfolio, 
                    documenting my career growth.
                    </p>
                    <Link activeClass="active" to="experience" spy={true} smooth={true}
                     offset={-60} duration={800} href="">
                        <Button outline id='experience-btn' style={{ width: '70%', border: 'none',
                        borderRadius: 10, fontSize: '2vw', fontFamily:'Arial' }}>
                            Experience →
                        </Button>
                    </Link>
                </div>
                <div className='about-col'>
                    <img id='me-image' 
                    src='https://github.com/steeevin88/steeevin88/assets/59713070/e8eb0b1f-0436-46f4-8a33-3f706cf0772b' 
                    alt='me'></img>
                </div>
            </div>
        </div>
    );
}

export default About;