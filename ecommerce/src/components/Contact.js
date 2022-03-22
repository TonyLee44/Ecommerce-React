import React from 'react';
import {useState} from 'react';

export default function Contact() {
  const validEmail = '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$';
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

      if (firstName && lastName && email) {
          setIsButtonDisabled(false);
      }

      const handleSubmit = (e) => {
          e.preventDefault();

          if (!firstName || !lastName || !validEmail.test(email)){
              setErrorMessage('Invalid information, try again!')
              return
            } else {
                setErrorMessage(null);
            }
            return
      }
  
    return(
        <div>
  <form>
      <label htmlFor="first">First name:</label><br />
      <input type="text" id="first" name="first" placeholder="John" value={firstName} onChange={e => setFirstName(e.target.value)}/><br />
      <label htmlFor="last">Last name:</label><br />
      <input type="text" id="last" name="last" placeholder="Doe" value={lastName} onChange={e => setLastName(e.target.value)}/><br />
      <label htmlFor="phone">Phone Number:</label><br />
      <input type="tel" id="phone" name="phone" placeholder="555-555-5555" /><br />
      <label htmlFor="email">E-mail:</label><br />
      <input type="email" id="email" name="email" placeholder="JohnDoe@gmail.com" value={email} onChange={e => setEmail(e.target.value)}/><br />
      <label htmlFor="comments">Comments:</label><br />
      <textarea name="comments" id="comments" placeholder="Leave a question or comment here..."></textarea> <br />
      {errorMessage ? (<div>{errorMessage}</div>) : null}
      <button disabled={isButtonDisabled} onSubmit={handleSubmit}>Submit</button>
  </form>

        </div>
    );
}