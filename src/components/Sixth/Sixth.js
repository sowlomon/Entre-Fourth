import React from 'react';
import Image from 'next/image'
import image1 from '../../../public/images/image3M.png';
import image2 from '../../../public/images/image2M.png';
import image3 from '../../../public/images/image1M.png';
import arrow from '../../../public/images/ArrowRight.png';
import arrow1 from '../../../public/images/ArrowRight (5).png';
import line from '../../../public/images/Line 3.png';
import styles from './Sixth.module.scss';

function Sixth() {
  return (
    <div className={styles.mainSec}>
      <div className={styles.div1}>
        <span>Get Our Application</span>
        <h3>Latest News</h3>
      </div>
      <div className={styles.div2}>
        <div>
          <div>
            <Image 
              src={image1}
              alt="img"
              width="347px"
              height="363px" 
            />
          </div>
          <div style={{display:"flex", justifyContent:"center", gap: "10px"}}>
            <span>
              <Image 
                src={line}
                alt="img"
                width="39px"
                height="3px" 
              />
            </span>
            <span>
              Its does not matter Hows <br />
              Slowly goes as Long
              <h5>Continue Reading &nbsp;
                <Image 
                  src={arrow}
                  alt="image"
                  height="10px"
                  width="10px"
                />
              </h5>
            </span>
          </div>
        </div>
        <div>
          <div>
            <Image 
              src={image2}
              alt="img"
              width="347px"
              height="363px"  
            />
          </div>
          <div style={{display:"flex", justifyContent:"center", gap: "10px"}}>
            <span>
              <Image 
                src={line}
                alt="img"
                width="39px"
                height="3px"  
              />
            </span>
            <span>
              Netbook Network Added<br />
              New Photo Filter
              <h5>Continue Reading &nbsp;
                <Image 
                  src={arrow1}
                  alt="image"
                  height="10px"
                  width="10px"
                />
              </h5>
            </span>
          </div>
        </div>
        <div>
          <div>
            <Image 
              src={image3}
              alt="img"
              width="347px"
              height="363px"
            />
          </div>
          <div style={{display:"flex", justifyContent:"center", gap: "10px"}}>
            <span>
              <Image 
                src={line}
                alt="img"
                width="39px"
                height="3px"  
              />
            </span>
            <span>
              We Optimized Nwtbooks<br />
              Better Navigation
              <h5>Continue Reading &nbsp;
                <Image 
                  src={arrow}
                  alt="image"
                  height="10px"
                  width="10px"
                />
              </h5>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sixth