import React from 'react';
import Image from 'next/image';
import styles from './Fourth.module.scss';
import image1 from '../../../public/images/Group1M.png';
import image2 from '../../../public/images/Group2M.png';
import image3 from '../../../public/images/Group3M.png';
import image4 from '../../../public/images/Group4M.png';

function Fourth() {
  return (
    <div className={styles.mainSec}>
      <div className={styles.div1}>
        <span>Valuable Team</span>
        <h3>Our Active Members</h3>
        <p>When an unknown printer take a galley<br/>
          of type and meeting fari scrambled it.
        </p>
        <div>
          <p>Newest</p>
          <p>Popular</p>
          <button>Active</button>
        </div>
      </div>
      <div className={styles.div2}>
        <div>
          <div>
            <Image 
              src={image1}
              alt="img"
              height="171px"
              width="166px"
            />
          </div>
          <h3>Fahim Rahman</h3>
          <p>@rahman</p>
        </div>
        <div>
          <div>
            <Image 
              src={image2}
              alt="img"
              height="171px"
              width="166px"
            />
          </div>
          <h3>Kazi Rahman</h3>
          <p>@Rahman</p>
        </div>
        <div>
          <div>
            <Image 
              src={image3}
              alt="img"
              height="171px"
              width="166px"
            />
          </div>
          <h3>Materero Ali</h3>
          <p>@Master</p>
        </div>
        <div>
          <div>
            <Image 
              src={image4}
              alt="img"
              height="171px"
              width="166px"
            />
          </div>
          <h3>Alia Karon</h3>
          <p>@Alia</p>
        </div>
      </div>
    </div>
  )
}

export default Fourth