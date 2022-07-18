import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/images/Group1.png';
import twitter from '../../../public/images/Vector (2).png';
import link from '../../../public/images/Vector (6).png';
import face from '../../../public/images/Vector (3).png';
import insta from '../../../public/images/insta.png';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.mainSec}>
      <p>Besnik Creative Agency</p>
      <div className={styles.footerDiv}>
        <Image 
          src={Logo}
          alt="image"
          height="34px"
          width="34px"
        />
        <span>Netbook</span>
      </div>
      <div className={styles.iconDiv}>
        <div>
          <Image 
            src={twitter}
            alt="image"
            height="12px"
            width="16px"
          />
        </div>
        <div>
          <Image 
            src={insta}
            alt="image"
            height="12px"
            width="16px"
          />
        </div>
        <div>
          <Image 
            src={face}
            alt="image"
            height="12px"
            width="16px"
          />
        </div>
        <div>
          <Image 
            src={link}
            alt="image"
            height="12px"
            width="16px"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer;