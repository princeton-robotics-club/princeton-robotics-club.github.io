import React from 'react';
import Card from '../../card/Card';
import FaceCard from '../../face_card/FaceCard';
import '../Generic.css';
import './About.css';

import Ab0824 from '../../../images/about/ab0824.jpg';
import An4978 from '../../../images/about/an4978.jpg';
import Arthurts from '../../../images/about/arthurts.jpg';
import August from '../../../images/about/august.jpg';
import Dc2326 from '../../../images/about/dc2326.jpg';
import Dc4266 from '../../../images/about/dc4266.jpg';
import Df1314 from '../../../images/about/df1314.jpg';
import Edchen from '../../../images/about/edchen.jpg';
import Ernestm from '../../../images/about/ernestm.jpg';
import Fh9696 from '../../../images/about/fh9696.jpg';
import Ih2422 from '../../../images/about/ih2422.jpg';
import Js4346 from '../../../images/about/js4346.jpg';
import Jt1065 from '../../../images/about/jt1065.jpg';
import Jt7347 from '../../../images/about/jt7347.jpg';
import Kphan from '../../../images/about/kphan.jpg';
import Lglisic from '../../../images/about/lglisic.jpg';
import Lyon from '../../../images/about/lyon.png';
import Majumdar from '../../../images/about/majumdar.jpg';
import Mh6419 from '../../../images/about/mh6419.jpg';
import Ms8364 from '../../../images/about/ms8364.jpg';
import Sj9425 from '../../../images/about/sj9425.jpg';
import Wh9128 from '../../../images/about/wh9128.jpg';
import Yijint from '../../../images/about/yijint.jpg';

function About(props) {

  const {
    darkMode
  } = props;

  return (
    <>
      <div className='body-bg'>
      <div className={'about-bg-img' + (darkMode ? ' about-bg-img-dark' : ' about-bg-img-light')}/>
        <section className='article-centered'>
          <div className={'title-blob' + (darkMode ? ' title-blob-dark' : ' title-blob-light')}> ABOUT US </div>
          <Card darkMode = {darkMode} pathString = '/about#officers'
                className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
            <div className='centered-heading'>
              CLUB OFFICERS
            </div>
            <div className='centered-container'>
              <FaceCard
                darkMode = {darkMode}
                name = 'Alecia Barbieri'
                subtext = {['Co-President', 'Droid Team Lead', 'Media Lead']}
                image = {Ab0824}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Ian Henriques'
                subtext = {['Co-President', 'Golf Cart SW Lead', 'Pacbot SW Lead', 'Media Lead']}
                image = {Ih2422}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Ernest McCarter'
                subtext = {['Co-President', 'Pacbot SW Lead']}
                image = {Ernestm}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Andy Nguyen'
                subtext = {['Treasurer', 'Pacbot SW Lead']}
                image = {An4978}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Lana Glisic'
                subtext = {['Officer', 'Training Lead', 'Pacbot SW Lead', 'Media Lead']}
                image = {Lglisic}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Maria Heffernen'
                subtext = {['Officer', 'Training Lead']}
                image = {Mh6419}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Freddy Hernandez'
                subtext = {['Officer', 'Outreach Lead']}
                image = {Fh9696}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Kevin Phan'
                subtext = {['Officer', 'Golf Cart SW Lead']}
                image = {Kphan}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Jack Toubes'
                subtext = {['Officer', 'Pacbot HW Lead']}
                image = {Jt1065}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Jimmy Tran'
                subtext = {['Officer', 'Drone Team Lead']}
                image = {Jt7347}
              />
            </div>
          </Card>

          <Card darkMode = {darkMode} pathString = '/about#leads'
                className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
            <div className='centered-heading'>
              SUBTEAM LEADS
            </div>
            <div className='centered-container'>
              <FaceCard
                darkMode = {darkMode}
                name = 'David Chang'
                subtext = {['Droid Mech Lead']}
                image = {Dc4266}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Eric Chen'
                subtext = {['Drone HW Lead']}
                image = {Edchen}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Dak Cheng'
                subtext = {['Golf Cart HW Lead', 'Robocup Lead']}
                image = {Dc2326}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'David Fu'
                subtext = {['Rover Team Lead']}
                image = {Df1314}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'William Huang'
                subtext = {['Rover Team Lead']}
                image = {Wh9128}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Stephen Jiang'
                subtext = {['Droid Mech Lead', 'Drone SW Lead']}
                image = {Sj9425}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Joshua Soberano'
                subtext = {['Exoskeleton', 'Team Lead']}
                image = {Js4346}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Arti Schmidt'
                subtext = {['Drone SW Lead']}
                image = {Arthurts}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Mariko Storey'
                subtext = {['Rover Team Lead']}
                image = {Ms8364}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Yi Jin Toh'
                subtext = {['Drone SW Lead']}
                image = {Yijint}
              />
            </div>
          </Card>

          {false && <Card darkMode = {darkMode} pathString = '/about#members'
                className={'text-box text-box-padded' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
            <div className='centered-heading'>
              TEAM MEMBERS
            </div>
          </Card>}

          <Card darkMode = {darkMode} pathString = '/about#faculty'
                className={'text-box text-box-padded-not-below' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
            <div className='centered-heading'>
              FACULTY ADVISERS
            </div>
            <div className='centered-container'>
              <FaceCard
                darkMode = {darkMode}
                name = 'Prof. August'
                subtext = {['ECE']}
                image = {August}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Prof. Lyon'
                subtext = {['ECE']}
                image = {Lyon}
              />
              <FaceCard
                darkMode = {darkMode}
                name = 'Prof. Majumdar'
                subtext = {['MAE']}
                image = {Majumdar}
              />
            </div>
          </Card>
        </section>
      </div>
    </>
  );
}

export default About;