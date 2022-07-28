import React from 'react'
import Image from 'next/image';
import Logo from '../../../public/images/Group1.png';
import drop from '../../../public/images/Vector20.png';
import mainImg from '../../../public/images/Iamge (1).png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import styles from './First.module.scss';

function First() {
  return (
    <>
      <div className={styles.mainSec}>
        <div className={styles.mainDiv}>
          <div className={styles.subMainDiv}>
            <div className={styles.Fdiv}>
              <Image 
                src={Logo}
                alt="image"
                height="34px"
                width="34px"
              />
              <span><h2>Netbook</h2></span>
            </div>
            <div>
              <ul>
                <li>Home</li>
                <li>
                  Community
                  &nbsp;
                  <span>
                    <Image 
                      src={drop}
                      alt="image"
                      height="7px"
                      width="7px"
                    />
                  </span>
                </li>
                
                <li>Blog</li>
                <li>Events</li>
              </ul>
            </div>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ fontSize: 10, color: "686868", marginRight: 5 }}
            />
            <input placeholder='Search Here..' />
            <button>Log in</button>
          </div>
        </div>
        <hr/>
        <div className={styles.secDiv}>
          <div>
            <p>Network Community</p>
            <h3>Your solutions for community!</h3>
            <p>More than 2 billion countries round the world use socibook <br/> to stay in touch with friends and family</p>
            <div>
              <button className={styles.b1}>About more</button>
              <button className={styles.b2}>Invite friends</button>
            </div>
          </div>
          <div>
            <Image 
              src={mainImg}
              alt="img"
              height="501px"
              width="585px"
            />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default First