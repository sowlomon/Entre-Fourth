import React from 'react';
import Image from 'next/Image';
import styles from './Second.module.scss';
import fImage from '../../../public/images/Image (3).png';
import sImage from '../../../public/images/Image (2).png';
import eclipse from '../../../public/images/Ellipse 14.png';
import trophy from '../../../public/images/Trophy.png';
import tImage from '../../../public/images/Image (1).png';
import people from '../../../public/images/people.png';
import liImg from '../../../public/images/Ellipse 11.png';
import arrow from '../../../public/images/ArrowRight.png';
import arrow1 from '../../../public/images/ArrowRight (5).png';
import star from '../../../public/images/Vector (10).png';

function Second () {
  return (
    <div className={styles.mainSec1}>
      <div className={styles.mainDiv}>
        <div>
          <h3>Whats Netbook?</h3>
          <h2>Why join Netbook Social Network?</h2>
          <span>Recent surveys have indicated that small businesses
            <br /> recognize the need to have to connect to <br/> customers. 
          </span>
          <p>
            <Image
              src={liImg}
              alt="img"
              height="8px"
              width="8px"
            />
            <spam>Groups</spam>
          </p>
          <p>
            <Image
              src={liImg}
              alt="img"
              height="8px"
              width="8px"
            />
            <spam>Messages</spam>
          </p>
          <p>
            <Image
              src={liImg}
              alt="img"
              height="8px"
              width="8px"
            />
            <spam>Shares</spam>
          </p>
        </div>
        
        <div className={styles.secDiv}>
          <Image 
            src={fImage}
            alt="image"
            height="400px"
            width="300px"
          />
          <div>
            <div style={{marginBottom:"20px"}}>
              <Image 
                src={sImage}
                alt="image"
                height="252px"
                width="267px"
              />
            </div>
            <Image 
              src={tImage}
              alt="image"
              height="252px"
              width="267px"
            />
          </div>
        </div>
      </div>
      <div className={styles.mainDiv2}>
        <div>
          <div className={styles.div1}>
            <Image 
              src={star}
              alt="image"
              height="21px"
              width="22px"
            />
            <span className={styles.span1}>4.8 Rating</span>
          </div>
          <div className={styles.peopleDiv}>
            <Image 
              src={people}
              alt="image"
              height="40px"
              width="60px"
            />
            <span style={{color:"#217BF4", marginLeft:"12px"}}>+838k</span><span className={styles.span2}>Members</span>
          </div>
          <div className={styles.divText}>
            More than 2 billion people
            Round the world use Socibooks
            to stay in touch with friends
          </div>
          <p>
            Join Our Community
            <span className={styles.span3}>
              <Image 
                src={arrow1}
                alt="image"
                height="10px"
                width="10px"
              />
            </span>
          </p>

        </div>
        <div>
          <div className={styles.div1}>
            <Image 
              src={trophy}
              alt="image"
              height="19px"
              width="24px"
            />
            <span className={styles.span1}>Awwwards</span>
          </div>
          <div className={styles.peopleDiv}>
            <Image 
              src={eclipse}
              alt="image"
              height="30px"
              width="30px"
            />
            <span className={styles.span2}>Best of</span><span style={{color:"#217BF4", marginLeft:"12px"}}>2021</span><span className={styles.span2}>on Github</span>
          </div>
          <div className={styles.divText}>
            More than 2 billion people
            Round the world use Socibooks
            to stay in touch with friends
          </div>
          <p>
            Go to awards
            <span className={styles.span3}>
              <Image 
                src={arrow}
                alt="image"
                height="10px"
                width="10px"
              />
            </span>
          </p>

        </div>
        <div>
          <p>
            Our achievemets
          </p>
          <h3>
            We are connecting you to digital life.
          </h3>
          <div>
            More than 2 billion people
            Round the world use Socibooks
            to stay in touch with friends
          </div>
          <button>
            <span>Discover Me</span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Second;