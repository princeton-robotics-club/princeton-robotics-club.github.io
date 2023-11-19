import React from 'react';
import '../Generic.css';
import './Join.css';
import Card from '../../card/Card';
import JoinForm from '../../join_form/JoinForm';

function Join(props) {

  const {
    // eslint-disable-next-line
    darkMode
  } = props;

  return (
    <>
      <div className='body-bg'>
        <div className='join-bg-img'/>
        <section className='article-centered'>
          <div className={'title-blob' + (darkMode ? ' title-blob-dark' : ' title-blob-light')}>JOIN</div>
          <Card darkMode = {darkMode}
                className={'text-box text-box-padded text-box-padded-extra' + (darkMode ? ' text-box-dark' : ' text-box-light')}>
						<JoinForm darkMode = {darkMode}/>
          </Card>
        </section>
      </div>
    </>
  );
}

export default Join;