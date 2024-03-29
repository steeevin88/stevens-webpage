import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-scroll';
import './About.css';

function About() {
    return (
        <div className='about-page' id='about'>
            <div className='about-col'>
                <div className='about-header'>
                    <p>ABOUT</p>
                    <b>Welcome!</b>
                </div>
                <p>Thanks for visiting! My name is Steven Le.
                <br/><br/>
                I'm a second-year student studying computer science at San Jose State
                University, pursuing a bachelor's of science. Outside of school/ work, you can find 
                me working out at the gym, or finding new hobbies at home.
                <br/><br/>
                I'm working towards a career in software engineering, where I hope to advance projects
                that makes differences in people's lives. This website is intended to serve as a personal 
                portfolio, documenting my progess towards that goal.
                </p>
                <div className='center'>
                    <Link activeClass="active" to="experience" offset={-50} smooth={true}>
                        <Button id='experience-btn' style={{width: '100%', border: 'none', borderRadius: 10}}>
                            Experiences →
                        </Button>
                    </Link>
                </div>
            </div>
            <div className='about-col center'>
                <img id='me-image' src='https://github.com/steeevin88/steeevin88/assets/59713070/e8eb0b1f-0436-46f4-8a33-3f706cf0772b' alt='me'/>
            </div>
        </div>
    );
}

export default About;