import { useState ,useEffect,useRef} from 'react';

import './App.css';
import Intro from './components/Intro';
import Home from './components/Home';
import SaveTheDate from './components/SaveTheDate';
import Venu from './components/Venu';
import Apperciate from './components/Apperciate';
import SeeYouIN from './components/SeeYouIN';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';


export default function App() {
  
   const [showWebsite, setShowWebsite] = useState(false);

  const musicRef = useRef(null);


  return (
    <>
      <MusicPlayer ref={musicRef} />
      {!showWebsite ? (
        <Intro onFinish={() => setShowWebsite(true)}
          playMusic={() => musicRef.current?.playMusic()}/>
      ) : (
        <>
          <Home />
          <SaveTheDate />
          <Venu/>
          <Apperciate/>
          <SeeYouIN/>
          <Contact/>
          <Footer/>
        </>
      )}
    </>
  )
}
