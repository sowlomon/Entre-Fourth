import React from 'react';
import Image from 'next/image';
import styles from './Fifth.module.scss';
import image1 from '../../../public/images/image 288.png';
import image2 from '../../../public/images/image 289.png';
import image3 from '../../../public/images/mobmuckup.png';


function Fifth() {
  return (
    <div className={styles.mainSec}>
      <div className={styles.div1}>
        <span>Valuable Team</span>
        <h3>You Can Easily Find <br/> This App...!</h3>
        <div>I say chap that’s suing lavatory chip shop <br/> gosh off 
          his smashing boot are you taking <br/> the piss posh loo brilliant.
        </div>
        <div>
          <div>
            <Image
              src={image2} 
              alt="img"
              width= "120px"
              height= "42px"
            />
          </div>
          <div>
            <Image
              src={image1} 
              alt="img"
              width= "160px"
              height= "80px"
            />
          </div>
        </div>
      </div>
      <div className={styles.div2}>
        <div>
        <Image
            src={image3} 
            alt="img"
            width= "700px"
            height= "500px"
          />
        </div>
      </div>
    </div>
  )
}

export default Fifth