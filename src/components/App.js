import React from 'react';
import First from './First/First';
import Second from './Second/Second';
import Third from './Third/Third';
import Fourth from './Fourth/Fourth';
import Fifth from './Fifth/Fifth';
import Sixth from './Sixth/Sixth';
import Seventh from './Seventh/Seventh';
import Footer from './Footer/Footer';
import styles from './App.module.scss';


function App() {
  return (
    <div className={styles.mainApp}>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Footer />
    </div>
  )
}

export default App