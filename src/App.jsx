import React from 'react'
import Hero from './components/Hero/Hero.jsx'
import Feature13, { FeatureItem, features } from './components/Features/Features.jsx';
import Numbers7 from './components/Numbers/Numbers.jsx';
import ContactUs12 from './components/Contact/Contact.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  React.useEffect(()=>{
    AOS.init({
      duration:1000,
      delay:100,
      easing:"ease-in-cubic",
    });
  },[])
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <Feature13 />    
      <Numbers7/>    
      <ContactUs12/>    
    </main>
  )
}

export default App
