import {React, useState} from 'react';
import '../Generic.css';
import './Projects.css';

import TeamButton from '../../team/TeamButton';
import TeamBlurb from '../../team/TeamBlurb';

import droid1 from '../../../images/projects/droid/droid-1.jpg';
import droid2 from '../../../images/projects/droid/droid-2.jpg';
import droid3 from '../../../images/projects/droid/droid-3.jpg';
import droid4 from '../../../images/projects/droid/droid-4.jpg';

import pacbot1 from '../../../images/projects/pacbot/pacbot-1.jpg';
import pacbot2 from '../../../images/projects/pacbot/pacbot-2.jpg';
import pacbot3 from '../../../images/projects/pacbot/pacbot-3.jpg';
import pacbot4 from '../../../images/projects/pacbot/pacbot-4.mov';

import drone1 from '../../../images/projects/drone/drone-1.jpg';
import drone2 from '../../../images/projects/drone/drone-2.jpg';
import drone3 from '../../../images/projects/drone/drone-3.jpg';

import rover1 from '../../../images/projects/rover/rover-1.jpg';
import rover2 from '../../../images/projects/rover/rover-2.png';

function Projects(props) {

  const {
    darkMode
  } = props;

  const [selectedTeam, setSelectedTeam] = useState('')
  const HEADER_OFFSET = 200

  function toggleBlurb(teamName){
    let i
    let allVideos = document.getElementsByTagName('video')

    for (i = 0; i < allVideos.length; i++) {
      allVideos[i].pause()
    }

    if (teamName === selectedTeam) {
      setSelectedTeam('')
    }
    else {
      showSlides(teamName, 1)

      if (selectedTeam !== '' && document.getElementById(selectedTeam + '-text').getBoundingClientRect().top < document.getElementById(teamName + '-text').getBoundingClientRect().top){
        window.scrollTo({top: 0})
        window.scrollTo({top: -document.getElementById(selectedTeam + '-blurb').getBoundingClientRect().height + document.getElementById(teamName + '-text').getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, behavior: 'smooth'})
      } else {
        window.scrollTo({top: document.getElementById(teamName + '-text').getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, behavior: 'smooth'})
      }
      
      setSelectedTeam(teamName)
    }
  }

  function showSlides(teamName, n) {
    let i
    let slideIndex = n
    let slides = document.getElementsByClassName(teamName + '-carousel')
    let dots = document.getElementsByClassName(teamName + '-dot')
    let allVideos = document.getElementsByTagName('video')

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }

    for (i = 0; i < allVideos.length; i++) {
      allVideos[i].pause()
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' ' + teamName + '-dot-active', '')
    }

    if (slides.length > 0) {slides[slideIndex-1].style.display = 'block'}
    if (dots.length > 0) {dots[slideIndex-1].className += ' ' + teamName + '-dot-active'}
  }

  return (
    <>
      <div className='body-bg'>
        <div className='projects-bg-img'/>
        <section className='article-centered'>

          <div className='first-row v-spacer'></div>
          <div className='m-spacer'></div>

          <div className='page-title' style={{color: darkMode ? 'white' : 'black'}}> MEET OUR TEAMS </div>

          <div className='first-row v-spacer'></div>
          <div className='m-spacer'></div>

          <div className = 'team-wrap'>

            <div className = 'first-row'>
              <TeamButton
                  teamName = 'droid'
                  teamTitle = 'DROID'
                  selectedTeam = {selectedTeam}
                  toggleBlurb = {toggleBlurb}
              />
            </div>

            <div className = 'second-row'>
              <TeamBlurb
                darkMode = {darkMode}
                teamName = 'droid'
                teamTitle = 'DROID'
                selectedTeam = {selectedTeam}
                about = "The BB-8 Droid Team is building a life-size, fully-functional, spherical BB-8 Droid based on the <i>Star Wars</i> movies. Our project is using a framework established by the BB-8 Builders Club with our own authentic add-on of computer vision to allow the droid to avoid obstacles, as well as respond to various hand gestures and embody the character’s spirit of adventure and companionship! Our end goal is to create a finalized droid that we can use for community outreach, such as trips to children's hospitals and <i>Star Wars</i> conventions."
                slides = {[[droid1, 'h', 'BB-8 Team Mechanical & Electrical Sub-Teams'],
                            [droid2, 'h', 'In-Progress BB-8 Body Circuit'],
                            [droid3, 'h', 'Electrical Team Researching Electrical Component Substitutions'],
                            [droid4, 'h', '3D-Printing Rib for the BB-8 Outer Frame']]}
                showSlides = {showSlides}
                milestones = {[['2022-09-01', 's', 'Mechanical team completed the outer frame and began printing the inner sub-assembly, while our electrical team completed the body circuit.'], 
                ['2023-03-01', 's', 'Mechanical team mostly completed the inner chassis structure. The electrical team programmed and tested various components within the body circuit.'], 
                ['2023-11-30', 's', 'Mechanical team aims to complete the whole mechanical assembly, and our electrical team will design PCBs for more compact and reliable wiring.']]}
                sponsors = {''}
              />
            </div>

            <div className='first-row h-spacer'></div>
            <div className='m-spacer'></div>

            <div className = 'first-row'>
              <TeamButton
                  teamName = 'pacbot'
                  teamTitle = 'PACBOT'
                  selectedTeam = {selectedTeam}
                  toggleBlurb = {toggleBlurb}
              />
            </div>

            <div className = 'second-row'>
              <TeamBlurb
                darkMode = {darkMode}
                teamName = 'pacbot'
                teamTitle = 'PACBOT'
                selectedTeam = {selectedTeam}
                about = 'The Pacbot Competition is a fun, real-life robotics version of the popular Pacman arcade game. The robot, roughly the size of your palm, navigates through an intricate maze to collect as many pellets as it can for a high score, all the while escaping the clutches of four simulated, scary ghosts.'
                slides = {[[pacbot1, 'h', 'Our Pacbot victory photo this past year, tying for first place with UIUC'],
                            [pacbot2, 'h', 'Two identical Pacbots our team designed from scratch during the 2022-23 academic year'],
                            [pacbot3, 'v', 'A cool photo of our team posing on a bridge overlooking Harvard University'],
                            [pacbot4, 'v', '']]}
                showSlides = {showSlides}
                milestones = {[['2022-09-01', 's', 'Sensor selection and electrical design for our 2023 robot'],
                            ['2023-04-01', 's', 'Firmware and software teams worked in parallel to get the robot to make intelligent decisions (competition in April)'],
                            ['2023-04-29', 'd', 'Our team competed in the 2023 PacBot Competiton at Harvard University and obtained the highest score!'],
                            ['2023-08-01', 's', 'Re-designed the Pacbot game engine to address some shortcomings from last year'],
                            ['2023-11-30', 's', ' Starting work on our 2024 Pacbot!']]}
                sponsors = {''}
              />
            </div>

            <div className='first-row h-spacer'></div>
            <div className='m-spacer'></div>

            <div className = 'first-row'>
              <TeamButton
                  teamName = 'drone'
                  teamTitle = 'DRONE'
                  selectedTeam = {selectedTeam}
                  toggleBlurb = {toggleBlurb}
              />
            </div>

            <div className = 'second-row'>
              <TeamBlurb
                darkMode = {darkMode}
                teamName = 'drone'
                teamTitle = 'DRONE'
                selectedTeam = {selectedTeam}
                about = 'Our Drone Team is focused on exploring and adapting drone technology to numerous applications. Our main project involves developing a modular autonomous quadcopter platform that can be fitted with different hardware and software in various scenarios. Currently, we are working on computer vision-based gesture recognition and control, which entails having the drone ‘see’ hand gestures from a person through a camera, recognize what that gesture is, and execute a command accordingly!'
                slides = {[[drone1, 'v', 'Drone Team Meeting'],
                            [drone2, 'v', 'Gesture Drone'],
                            [drone3, 'h', 'Gesture Drone Sensor Array']]}
                showSlides = {showSlides}
                milestones =  {[['2022-09-01', 's', 'Built base drone hardware for manual flight, and adapted sensor array to establish position-hold through optical flow and LIDAR sensors.'], 
                                ['2023-03-01', 's', 'Finished writing code for basic computer vision (CV)-based gesture control, and successfully completed preliminary vision-based flight tests.'], 
                                ['2023-11-30', 's', 'Exploring more CV applications such as localization, path planning, and collision avoidance, while improving safety of gesture control.']]}
                sponsors = {''}
              />
            </div>

            <div className='first-row break'></div>
            <div className='second-row v-spacer'></div>
            <div className='m-spacer'></div>

            <div className = 'second-row'>
              <TeamButton
                  teamName = 'rover'
                  teamTitle = 'ROVER'
                  selectedTeam = {selectedTeam}
                  toggleBlurb = {toggleBlurb}
              />
            </div>

            <div className = 'third-row'>
              <TeamBlurb
                darkMode = {darkMode}
                teamName = 'rover'
                teamTitle = 'ROVER'
                selectedTeam = {selectedTeam}
                about = 'The Rover Team was founded in the Summer of 2023. Our mission is to design and build an autonomous rover capable of exploring a Mars-like environment. Our rover will exhibit four distinct competencies: (1) computer vision algorithms for object avoidance and extreme terrain navigation, (2) object retrieval and delivery mechanisms to support mission objectives, (3) remote-controlled robotic arm that can perform complex maintenance operations on an equipment system, and (4) science system to collect samples and detect signs of life. We intend to compete in the <a href="https://urc.marssociety.org/home">University Rover Challenge</a>, hosted annually in May in Utah.'
                slides = {[[rover1, 'v', "Chassis team debating various design constraints"],
                          [rover2, 'h', "Rover Team Officers and Sub-Team Leads"]]}
                showSlides = {showSlides}
                milestones = {[['2023-09-01', 'm', 'First ever meeting! We recruited 61 new team members across five sub-teams.'],
                  ['2023-12-01', 'm', 'We will submit the Preliminary Design Report with designs and project information to the Rover Challenge.'],
                  ['2024-03-01', 'm', 'We will submit a System Acceptance Report with video demonstration of the constructed rover to the Rover Challenge.'],
                  ['2024-05-01', 'm', 'Final Round Competition in Utah!']]}
                sponsors = {'If you are interested in donating to and sponsoring the Princeton Rover Team, please contact treasurer Brandon Cheng, at <a href = "mailto: brandon.cheng@princeton.edu">brandon.cheng@princeton.edu</a>.'}
              />
            </div>

            <div className='second-row h-spacer'></div>
            <div className='m-spacer'></div>

            <div className = 'second-row'>
              <TeamButton
                  teamName = 'golf'
                  teamTitle = 'GOLF CART'
                  selectedTeam = {selectedTeam}
                  toggleBlurb = {toggleBlurb}
              />
            </div>

            <div className = 'third-row'>
              <TeamBlurb
                darkMode = {darkMode}
                teamName = 'golf'
                teamTitle = 'GOLF CART'
                selectedTeam = {selectedTeam}
                about = 'Our Autonomous Golf Cart Team aims to combine sustainability with automation by building a solar-powered self-driving golf cart. With support from the High Meadows Environmental Institute and NVIDIA, this newly-established team is a great opportunity for members to build unprecedented technology with cutting-edge components.'
                slides = {[]}
                showSlides = {showSlides}
                milestones = {[]}
                sponsors = {'High Meadows Institute; NVIDIA'}
              />
            </div>

            <div className='second-row h-spacer'></div>
            <div className='m-spacer'></div>

            <div className = 'second-row'>
              <TeamButton
                  teamName = 'exoskeleton'
                  teamTitle = 'EXOSKELETON'
                  selectedTeam = {selectedTeam}
                  toggleBlurb = {toggleBlurb}
              />
            </div>

            <div className = 'third-row'>
              <TeamBlurb
                darkMode = {darkMode}
                teamName = 'exoskeleton'
                teamTitle = 'EXOSKELETON'
                selectedTeam = {selectedTeam}
                about = 'Starting in Fall 2023, our Exoskeleton Team will build a wearable robotic exoskeleton that can adapt to the wearer’s movements and help with carrying tasks. We are looking for motivated members to help make this project a reality!'
                slides = {[]}
                showSlides = {showSlides}
                milestones = {[]}
                sponsors = {''}
              />
            </div>

            <div className='second-row break'></div>
            <div className='third-row v-spacer'></div>
            <div className='m-spacer'></div>

          </div>

        </section>
      </div>
    </>
  );
}

export default Projects;