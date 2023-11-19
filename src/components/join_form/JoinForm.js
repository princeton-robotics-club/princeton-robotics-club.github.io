import { useState, useEffect } from 'react';
import './JoinForm.css';

function JoinForm(props) {

  const {
    darkMode
  } = props;

  const [role,      setRole]      = useState('Member');
  const [firstName, setFirstName] = useState('');
  const [lastName,  setLastName]  = useState('');
  const [org,       setOrg]       = useState('');
  const [email,     setEmail]     = useState('');
  const [message,   setMessage]   = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [submitURL, setSubmitURL] = useState('');

  const [formFormat, setFormFormat] = useState('form-field ')

  const onChangeRole = (event) => {
    setRole(event.target.value);
  }

  const roleFormat = (option) => {
    return 'form-field radio-label' 
           + (darkMode ? ' radio-label-dark' : ' radio-label-light') 
           + (role === option ? ' checked' : '');
  }

  useEffect(() => {
    setFormFormat('form-field ' + (darkMode ? ' form-field-dark' : ' form-field-light'));
  }, [darkMode])

  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);
  }

  const onChangeLastName = (event) => {
    setLastName(event.target.value);
  }

  const onChangeOrg = (event) => {
    setOrg(event.target.value);
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const onChangeMessage = (event) => {
    setMessage(event.target.value);
  }

  const onSubmitForm = (event) => {
    setSubmitURL(`https://docs.google.com/forms/d/e/1FAIpQLSdO1aY2cMhWSpm4BjFXRu4eHhqs8aDLj5ITISf71n9zfEqgcQ/formResponse?usp=pp_url&entry.315328832=${firstName}&entry.435981728=${lastName}&entry.1299044094=${org}&entry.1618981588=${email}&entry.1013211071=${role}&entry.1688112472=${message}&submit=Submit`);
    setSubmitted(true);
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitForm}
          style={{
            '--autofill-bg-color': (darkMode ? '#222' : '#fff'),
            '--autofill-color': (darkMode ? '#fff' : '#000'),
          }}>

      <div className='form-row multi-column' id='role'
           onInput={onChangeRole}>
        <label className='label'>Choose your role:</label>
        <label className={roleFormat('Donor')}>
          <input type='radio' name='role' value='Donor'/>
          <span>Donor</span>
        </label>
        <label className={roleFormat('Advisor')}>
          <input type='radio' name='role' value='Advisor'/>
          <span>Advisor</span>
        </label>
        <label className={roleFormat('Member')}>
          <input type='radio' name='role' value='Member'/>
          <span>Member</span>
        </label>
        {false &&
          <label className={roleFormat('Spectator')}>
          <input type='radio' name='role' value='Spectator'/>
          <span>Spectator</span>
        </label>}
        {false && <label className={roleFormat('Robot')}>
          <input type='radio' name='role' value='Robot'/>
          <span>Robot</span>
        </label>}
      </div>

      <div className='form-row multi-column'>
        <div className='first-name'>
          <label className='label' htmlFor='fname'>First Name <span className='required'>*</span></label>
          <input id='fname' className={formFormat + ' form-field-small'} 
                 type='text'
                 onChange={onChangeFirstName} required/>
        </div>
        <div className='last-name'>
          <label className='label' htmlFor='lname'>Last Name <span className='required'>*</span></label>
          <input id='lname' name='lname' className={formFormat + ' form-field-small'}
                 type='text'
                 onChange={onChangeLastName} required/>
        </div>
      </div>

      <div className='form-row multi-column'>
        <div className='org'>
          <label className='label' htmlFor='org'>Organization <span className='required'>*</span></label>
          <input name='org' className={formFormat + ' form-field-small'}
                type='text' id='org'
                onChange={onChangeOrg} required/>
        </div>
        <div className='email-addr'>
          <label className='label' htmlFor='email'>Email Address <span className='required'>*</span></label>
          <input name='email' className={formFormat + ' form-field-small'}
                type='email' id='email'
                onChange={onChangeEmail} required/>
        </div>
      </div>

      <div className='form-row'>
        <label className='label' htmlFor='msg'>Message</label>
        <textarea name='msg' className={formFormat + ' message'}
                  type='text' id='msg'
                  onChange={onChangeMessage}/>
      </div>
    
      <div className='form-row'>
        <input className={'submit-button' + (darkMode ? ' submit-button-dark' : ' submit-button-light')}
              type='submit' value={submitted ? 'Sent!' : 'Send'}/>
      </div>

      {submitted && <iframe src={submitURL}
                            title="hidden_iframe" 
                            id="hidden_iframe" 
                            style={{display: 'none'}}
                            onError={()=>{console.log('oops!')}}/>
      }

    </form>
  );
}

export default JoinForm;