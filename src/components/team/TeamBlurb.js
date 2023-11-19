import React from 'react';
import './TeamBlurb.css';

function TeamBlurb(props) {

  const {
    darkMode,
    teamName,
    teamTitle,
    selectedTeam,
    about,
    slides,
    showSlides,
    milestones,
    sponsors
  } = props;

  const img_ext = ['jpg', 'png', 'jpeg', 'svg']
  const video_ext = ['mov', 'mp3', 'mp4']
  const SEASONS = ['Winter', 'Spring', 'Summer', 'Fall']

  function generateCarousel() {
    let i
    let carousel = []

    for (i = 0; i < slides.length; i++) {
        let content
        let url = slides[i][0]
        let orientation = slides[i][1]
        let caption = slides[i][2]

        if (img_ext.includes(url.split('.').pop().toLowerCase())) {
          if (orientation === 'h') {
            content = React.createElement('img', {src: url, alt: '', style: {height: 'auto', width: '100%'}})
          } else if (orientation === 'v') {
            content = React.createElement('img', {src: url, alt: '', style: {height: '100%', width: 'auto'}})
          } else {
            content = React.createElement('img', {src: url, alt: '', style: {height: 'auto', width: '100%'}})
          }

          if (caption === ''){
            carousel.push(React.createElement('div', {key: `blurb-carousel-${i}`, className: teamName + '-carousel blurb-carousel'}, content))
          } else {
            let text = React.createElement('div', {className: 'blurb-caption'}, caption)
            carousel.push(React.createElement('div', {key: `blurb-carousel-${i}`, className: teamName + '-carousel blurb-carousel'}, content, text))
          }
        }
        else if (video_ext.includes(url.split('.').pop().toLowerCase())) {
          if (orientation === 'h') {
            content = React.createElement('video', {src: url, controls: true, style: {height: 'auto', width: '100%'}})
          } else if (orientation === 'v') {
            content = React.createElement('video', {src: url, controls: true, style: {height: '100%', width: 'auto'}})
          } else {
            content = React.createElement('video', {src: url, controls: true, style: {height: 'auto', width: '100%'}})
          }
          
          carousel.push(React.createElement('div', {key: `blurb-carousel-${i}`, className: teamName + '-carousel blurb-carousel'}, content))
        }
        else {
          content = React.createElement('img', {src: url, alt: '', style: {height: 'auto', width: '100%'}})
          
          if (caption === ''){
            carousel.push(React.createElement('div', {key: `blurb-carousel-${i}`, className: teamName + '-carousel blurb-carousel'}, content))
          } else {
            let text = React.createElement('div', {className: 'blurb-caption'}, caption)
            carousel.push(React.createElement('div', {key: `blurb-carousel-${i}`, className: teamName + '-carousel blurb-carousel'}, content, text))
          }
        }
    }

    return carousel
  }

  function generateDots() {
    let i
    let dots = []

    for (i = 0; i < slides.length; i++) {
        let slide = i + 1
        dots.push(React.createElement('span', {key: `blurb-dot-${i}`, className: teamName + '-dot blurb-dot', onClick: () => showSlides(teamName, slide)}))
    }

    return dots
  }

  function generateTimeline() {
    let i
    let now = Date.now()
    let sorted_milestones = milestones
    let timeline = []

    for (i = 0; i < sorted_milestones.length; i++) {
        sorted_milestones[i][0] = new Date(sorted_milestones[i][0])
    }

    sorted_milestones = sorted_milestones.sort(function(a, b){return a[0] - b[0]})

    for (i = 0; i < sorted_milestones.length; i++) {
        let title

        if (sorted_milestones[i][1] === 's'){
          let season
          let month = (sorted_milestones[i][0].getUTCMonth() + 1) % 12
          let year = sorted_milestones[i][0].getUTCFullYear()
          let counter = 1

          while (month >= 3 * counter) {
            counter += 1
          }

          season = SEASONS[counter - 1]
          title = React.createElement('h2', {}, season + ' ' + year)
        } else if (sorted_milestones[i][1] === 'd'){
          let month = sorted_milestones[i][0].toLocaleString('default', {month: 'short', timeZone: 'UTC'})
          let day = sorted_milestones[i][0].getUTCDate()
          let year = sorted_milestones[i][0].getUTCFullYear()
          title = React.createElement('h2', {}, month + ' ' + day + ', ' + year)
        } else if (sorted_milestones[i][1] === 'm') {
          let month = sorted_milestones[i][0].toLocaleString('default', {month: 'long', timeZone: 'UTC'})
          let year = sorted_milestones[i][0].getUTCFullYear()
          title = React.createElement('h2', {}, month + ' ' + year)
        } else {
          let month = sorted_milestones[i][0].toLocaleString('default', {month: 'short', timeZone: 'UTC'})
          let day = sorted_milestones[i][0].getUTCDate()
          let year = sorted_milestones[i][0].getUTCFullYear()
          title = React.createElement('h2', {}, month + ' ' + day + ', ' + year)
        }

        let text = React.createElement('p', {}, sorted_milestones[i][2])
        let content = React.createElement('div', {className: 'timeline-content'}, title, text)
        let arrow
        let circle

        if (i % 2 === 0){
          arrow = React.createElement('div', {className: 'timeline-leftarrow'})

          if (now > sorted_milestones[i][0]){
            circle =  React.createElement('div', {className: teamName + '-timeline-circle timeline-leftcircle'})
          } else {
            circle =  React.createElement('div', {className: teamName + '-timeline-circle timeline-leftcircle', style: {backgroundColor: darkMode ? 'black' : 'white'}})
          }
        } else {
          arrow = React.createElement('div', {className: 'timeline-rightarrow'})

          if (now > sorted_milestones[i][0]){
            circle =  React.createElement('div', {className: teamName + '-timeline-circle timeline-rightcircle'})
          } else {
            circle =  React.createElement('div', {className: teamName + '-timeline-circle timeline-rightcircle', style: {backgroundColor: darkMode ? 'black' : 'white'}})
          }
        }

        timeline.push(React.createElement('div', {key: `timeline-container-${i}`, className: 'timeline-container'}, content, arrow, circle))
    }

    return timeline
  }

  return (
    <div id={teamName + '-blurb'} className={teamName + '-blurb team-blurb'} style={{display: selectedTeam === teamName ? 'flex' : 'none', backgroundColor: darkMode ? 'black' : 'white'}}>
        <div className='spacer' ></div>
        
        <div className='blurb-title' style={{color: darkMode ? 'white' : 'black'}}>
            <h2>ABOUT THE {teamTitle} TEAM</h2>
        </div>

        <div className='divider' ></div>

        <div dangerouslySetInnerHTML={{__html: about}} className='blurb-text' style={{color: darkMode ? 'white' : 'black'}} />

        <div className='section' style={{display: milestones.length > 0 ? 'block' : 'none'}}></div>
        
        <div className='blurb-title' style={{color: darkMode ? 'white' : 'black', display: slides.length > 0 ? 'block' : 'none'}}>
            <h2>GALLERY</h2>
        </div>

        <div className='divider' style={{display: slides.length > 0 ? 'block' : 'none'}}></div>

        {generateCarousel()}

        <div className='spacer' style={{display: slides.length > 0 ? 'block' : 'none'}}></div>

        {generateDots()}

        <div className='section' style={{display: slides.length > 0 ? 'block' : 'none'}}></div>

        <div className='blurb-title' style={{color: darkMode ? 'white' : 'black', display: milestones.length > 0 ? 'block' : 'none'}}>
            <h2>TIMELINE</h2>
        </div>

        <div className='divider' style={{display: milestones.length > 0 ? 'block' : 'none'}}></div>

          <div className='timeline' style={{display: milestones.length > 0 ? 'block' : 'none'}}>
            <div className={teamName + '-timeline-ruler timeline-ruler'}></div>
              {generateTimeline()}
          </div>

        <div className='section' style={{display: sponsors.length > 0 ? 'block' : 'none'}}></div>

        <div className='blurb-title' style={{color: darkMode ? 'white' : 'black', display: sponsors.length > 0 ? 'block' : 'none'}}>
            <h2>SPONSORS</h2>
        </div>

        <div className='divider' style={{display: sponsors.length > 0 ? 'block' : 'none'}}></div>

        <div dangerouslySetInnerHTML={{__html: sponsors}} className='blurb-text' style={{color: darkMode ? 'white' : 'black', display: sponsors.length > 0 ? 'block' : 'none'}} />

        <div className='spacer' ></div>
        <div className='spacer' ></div>
        <div className='spacer' ></div>
        <div className='spacer' ></div>
              
    </div>
  );
}

export default TeamBlurb;