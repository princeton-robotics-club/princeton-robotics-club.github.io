import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

function Footer(props) {

  const {
    darkMode
  } = props;

  return (
    <div className={'footer-container' + (darkMode ? ' footer-container-dark' : ' footer-container-light')}>
      <section className='social-media'>
        <div className={'social-media-wrap' + (darkMode ? ' social-media-wrap-dark' : ' social-media-wrap-light')}>

          <Link to='https://princeton.edu'
                data-tooltip-id='princeton-tooltip' 
                data-tooltip-content='Princeton University&#39;s website'>
            <div className={'footer-logo-princeton' + (darkMode ? ' footer-logo-princeton-dark' : ' footer-logo-princeton-light')} />
          </Link>
          <Tooltip id='princeton-tooltip'
                   offset={20}
                   className='footer-tooltip' />

          <Link to='https://odus.princeton.edu'
                data-tooltip-id='odus-tooltip' 
                data-tooltip-content='Office of the Dean of Undergraduate Students'>
            <div className={'footer-logo-odus' + (darkMode ? ' footer-logo-odus-dark' : ' footer-logo-odus-light')}/>
          </Link>
          <Tooltip id='odus-tooltip'
                   className='footer-tooltip' />

          <div className={'footer-text' + (darkMode ? ' footer-text-dark' : ' footer-text-light')}>
            © 2023 The Trustees of Princeton University
          </div>

          <div className='social-icons'>

            <Link
              className={'social-icon-link email' + (darkMode ? ' social-icon-link-dark' : ' social-icon-link-light')}
              to='mailto:robot@princeton.edu'
              target='_blank'
              aria-label='Email'
              data-tooltip-id='email-tooltip' 
              data-tooltip-content='Email us!'>
              <i className="fa fa-envelope" />
            </Link>
            <Tooltip id='email-tooltip'
                     offset={20}
                     className='footer-tooltip' />

            <Link
              className={'social-icon-link instagram' + (darkMode ? ' social-icon-link-dark' : ' social-icon-link-light')}
              to='https://www.instagram.com/princetonrobotics/'
              target='_blank'
              aria-label='Instagram'
              data-tooltip-id='insta-tooltip' 
              data-tooltip-content='Follow us on Instagram!'>
              <i className='fab fa-instagram' />
            </Link>
            <Tooltip id='insta-tooltip'
                     offset={20}
                     className='footer-tooltip' />

            <Link
              className={'social-icon-link twitter' + (darkMode ? ' social-icon-link-dark' : ' social-icon-link-light')}
              to='https://www.linkedin.com/company/princeton-robotics-club'
              target='_blank'
              aria-label='LinkedIn'
              data-tooltip-id='linkedin-tooltip' 
              data-tooltip-content='Follow us on LinkedIn!'>
              <i className='fab fa-linkedin' />
            </Link>
            <Tooltip id='linkedin-tooltip'
                     offset={20}
                     className='footer-tooltip' />

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;