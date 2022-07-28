import React from 'react';
import Image from 'next/image';
import styles from './Third.module.scss';
import icon1 from '../../../public/images/Icon (7).png';
import icon2 from '../../../public/images/Icon (8).png';
import icon3 from '../../../public/images/Icon (6).png';
import icon4 from '../../../public/images/Icon (8).png';
import icon5 from '../../../public/images/Icon (4).png';
import icon6 from '../../../public/images/Icon (3).png';
import icon7 from '../../../public/images/Icon (5).png';


function Third() {
  return (
    <div className={styles.mainSec1}>
      <div className={styles.mainSec}>
        <div className={styles.div1}>
          <span>Our Community</span>
          <h3>Community Main Feature</h3>
          <p>
            The wise man therefore always hold in this matters <br/>
            to this principle of selection.
          </p>
        </div>
        <div className={styles.mainDiv}>
          <div className={styles.mainDiv1}>
            <div>
              <div>
                <Image 
                  src={icon2}
                  alt="img"
                  height='66px'
                  width='66px'
                />
              </div>
              <div>
                <h3>
                  Members,Friends
                </h3>
                <p>
                  Members, Friends Connection <br/>
                  [like, followers], Private Message
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image 
                  src={icon3}
                  alt="img"
                  height='66px'
                  width='66px'
                />
              </div>
              <div>
                <h3>
                  Forums
                </h3>
                <p>
                  Forum is ready by BBpress.Your users <br />
                  can make topics and talk
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image 
                  src={icon5}
                  alt="img"
                  height='66px'
                  width='66px'
                />
              </div>
              <div>
                <h3>
                  List Builder
                </h3>
                <p>
                  Members, Groups list can be modified by <br />
                  drag and drop live builder 
                </p>
              </div>
            </div>
          </div>
          <div className={styles.mainDiv2}>
            <div>
              <div>
                <Image 
                  src={icon1}
                  alt="img"
                  height='66px'
                  width='66px'
                />
              </div>
              <div>
                <h3>
                  Groups
                </h3>
                <p>
                  Your users can create groups to let other <br />
                  to join and talk
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image 
                  src={icon7}
                  alt="img"
                  height='66px'
                  width='66px'
                />
              </div>
              <div>
                <h3>
                  Custom Module
                </h3>
                <p>
                  You can create Members, Groups <br /> Module. 
                  We already created 3 modules.<br /> 
                  It is by drag &amp;  drop live builder.
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image 
                  src={icon6}
                  alt="img"
                  height='66px'
                  width='66px'
                />
              </div>
              <div>
                <h3>
                  List Scroll Effects
                </h3>
                <p>
                  8 different scroll effects are ready.
                  You can always change by your tastes.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
  )
}

export default Third;