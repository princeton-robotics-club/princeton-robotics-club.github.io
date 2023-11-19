import React from 'react';
import '../Generic.css';
import './Supporters.css'
import Card from '../../card/Card';
import { Link } from 'react-router-dom';

function Supporters(props) {

  const {
    darkMode
  } = props;

  return (
    <div className='body-bg'>
      <div className={'supp-bg-img' + (darkMode ? ' supp-bg-img-dark' : ' supp-bg-img-light')}/>
      <section className='article-centered'>
        <div className={'title-blob' + (darkMode ? ' title-blob-dark' : ' title-blob-light')}> SUPPORTERS </div>
        <Card darkMode = {darkMode}
              className={'text-box text-box-padded' + (darkMode ? ' text-box-dark' : ' text-box-light')}> 
          Several 3-D printed designs cannot stand during the printing process without proper support structures.
          <br/>
          <br/>
          Likewise, none of our projects would be possible without the funding, technical 
          advice, tools, and resources of our supporters.
          <br/>
          <br/>
          We have listed relevant information about our current supporters below.
          <br/>
          <br/>
          If your organization is interested in supporting us as well, please 
          consider <Link to='/join' className={'link'+(darkMode ? ' link-orange' : ' link-coral')}>joining</Link> our 
          team as a donor or advisor. We appreciate your help!
        </Card>

        <Card darkMode = {darkMode}
              className={'text-box full-width'+(darkMode?' text-box-dark':' text-box-light')}> 
          <Link className={'supp-logo-seas'+(darkMode?' supp-logo-seas-dark':' supp-logo-seas-light')}
                to='https://engineering.princeton.edu/'
                title='Princeton SEAS'/>
          <div>
            <div className='supp-info-text supp-info-text-e-quad'> 
              The School of Engineering and Applied Science at Princeton consists of six
              departments:
              <ul className='dedent'>
                
                <li>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')} 
                        to='https://www.cs.princeton.edu/'>
                    Computer Science
                  </Link> <br className='mobile-break'/>(current supporter!)
                </li>
                
                <li>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')} 
                        to='https://ece.princeton.edu/'>
                    Electrical & Computer Eng.
                  </Link> <br className='mobile-break'/>(current supporter!)
                </li>

                <li>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')} 
                        to='https://mae.princeton.edu/'>
                    Mechanical & Aerospace Eng.
                  </Link> <br className='mobile-break'/>(current supporter!)
                </li>

                <li>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')}
                        to='https://orfe.princeton.edu/'>
                    Ops. Research & Financial Eng.
                  </Link>
                </li>

                <li>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')} 
                        to='https://cee.princeton.edu/'>
                    Civil & Environmental Eng.
                  </Link>
                </li>

                <li>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')} 
                        to='https://cbe.princeton.edu/'>
                    Chemical & Biological Eng.
                  </Link>
                </li>

              </ul>

              Our members also make use of several engineering resources offered
              by SEAS, including:

              <ul className='dedent'>
                <li>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')}
                        to='https://ece.princeton.edu/academics/undergraduate/student-projects'>
                    ECE "Car Lab"</Link> <br className='mobile-break'/>(in the E-Quad basement)
                </li>
                <li>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')} 
                        to='https://mae.princeton.edu/about-mae/spotlight/duo-behind-maes-machine-shop'>
                    MAE Machine Shop</Link> <br className='mobile-break'/>(in the E-Quad basement)
                </li>
                <li>
                  <Link className={'link'+(darkMode ? ' link-orange' : ' link-coral')} 
                        to='https://www.jacobswyper.com/projects/princeton-university-seas-robotics-laboratory'>
                    Robotics Lab</Link> <br className='mobile-break'/>(in the E-Quad F-Wing)
                </li>
              </ul>

            </div>
          </div>
          <div className='img-e-quad'/> 
        </Card>

        <Card darkMode = {darkMode}
              className={'text-box'+(darkMode?' text-box-dark':' text-box-light')}> 
          <Link className={'supp-logo-hmei'+(darkMode?' supp-logo-hmei-dark':' supp-logo-hmei-light')}
                to='https://environment.princeton.edu/'/>
          <div className='supp-info-text'> 
            The High Meadows Environmental Institute is dedicated to developing practical
            solutions to global environmental challenges, through a combination of interdisciplinary
            research, faculty collaborations, funding student proejcts, and hosting
            events to share their mission and findings with the community.
          </div>
        </Card>

        <Card darkMode = {darkMode}
              className={'text-box'+(darkMode?' text-box-dark':' text-box-light')}> 
          <Link className={'supp-logo-nvidia'+(darkMode?' supp-logo-nvidia-dark':' supp-logo-nvidia-light')}
                to='https://nvidia.com/'/>
          <div className='supp-info-text'> 
            NVIDIA pioneers accelerated computing in several areas of technology,
            from graphics and gaming to data centers and artificial intelligence.
            Their <Link className={'link'+(darkMode ? ' link-green' : ' link-green')} 
                              to='https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/'>
                  NVIDIA Jetson Orin
                </Link> series offers energy-efficient and powerful edge AI
            chips for developing next-generation robotic systems.
          </div>
        </Card>

        <Card darkMode = {darkMode}
              className={'text-box text-box-keller'+(darkMode?' text-box-dark':' text-box-light')}> 
          <Link className={'supp-logo-keller'+(darkMode?' supp-logo-keller-dark':' supp-logo-keller-light')}
                to='https://kellercenter.princeton.edu'/>
          <div className='supp-info-text'> 
            The Keller Center offers opportunities that bridge engineering, 
            entrepreneurship, and the liberal arts to equip students to solve critical 
            societal challenges. As part of their mission, they host an 
            open-access <Link className={'link'+(darkMode ? ' link-dark-orange' : ' link-dark-orange')} 
                              to='https://kellercenter.princeton.edu/keller-center-makerspace'>
            Keller Center Makerspace</Link> in the Engineering Quad, with laser cutters, printers, scanners, 
            wood-working tools, and more.
          </div>
        </Card>

        <Card darkMode = {darkMode}
              className={'text-box text-box-cst'+(darkMode?' text-box-dark':' text-box-light')}> 
          <Link className={'supp-logo-cst'+(darkMode?' supp-logo-cst-dark':' supp-logo-cst-light')} 
                to='https://cst.princeton.edu'/>
          <div className='supp-info-text'> 
            The Council for Science and Technology runs <Link className={'link'+(darkMode ? ' link-red' : ' link-red')} 
                        to='https://cst.princeton.edu/studiolab'>StudioLab</Link>, a 
            technology-based makerspace in the basement of Fine Hall, equipped with 
            a variety of tools including 3D printers, soldering irons, drills, CNC 
            machines, laser cutters, motion-tracking systems, pattern sewing 
            machines, and more. We hold weekly meetings in the StudioLab with 
            permission from the CST and StudioLab's supervisors.
          </div>
        </Card>

      </section>
    </div>
  );
}

export default Supporters;