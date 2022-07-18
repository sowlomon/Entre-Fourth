import React from 'react';
import styles from './Seventh.module.scss'

function Seventh() {
  return (
    <div className={styles.mainSec}>
      <div>
        <h3>Home</h3>
        <p>Home</p>
        <p>Community</p>
        <p>Events</p>
        <p>Contacts</p>
      </div>
      <div>
        <h3>Resources</h3>
        <p>Blog</p>
        <p>News</p>
        <p>Guide</p>
        <p>Help Center</p>
      </div>
      <div>
        <h3>Resources</h3>
        <p>NewsFeed</p>
        <p>Profile</p>
        <p>Friends</p>
        <p>Forums</p>
      </div>
      <div>
        <h3>Main Links</h3>
        <p>Members</p>
        <p>Activity</p>
        <p>Groups</p>
        <p>Private Groups</p>
      </div>
      <div>
        <h3>Subscribe Cirkle <br/> Newsletter</h3>
        <p>Subcribe to be the first to know <br/>
          about our updates. 
        </p>
        <input placeholder='Enter your Email' />
        <span><button>Subscribe</button></span>
      </div>

    </div>
  )
}

export default Seventh