import React from 'react';
export default function Landing() {
  return (
    <div className='row'>
      <div className='col s12 m12'>
        <div className='card blue-grey darken-1'>
          <div className='card-content white-text'>
            <span className='card-title'>Get Feedback from your consumers</span>
            <p>
              Our service let you create surveyee and send it to a list of your
              users to get feedback from them via email.
              <br />
              feedbacks will show up in your dashboard.
            </p>
          </div>
          <div className='card-action'>
            <a href='#!'>1 survey - unlimited emails</a>
            <a href='#!'>only 1$</a>
          </div>
        </div>
      </div>
    </div>
  );
}
