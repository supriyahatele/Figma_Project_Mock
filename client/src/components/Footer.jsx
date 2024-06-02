
import React, { useState, useEffect } from 'react';
import '../style/Footer.css'; // Assuming your CSS file is named Footer.css

const Footer = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const fadeInOnScroll = () => {
      // Determine when to trigger the animation
      const footerElement = document.querySelector('.footer-container');
      if (footerElement) {
        const topOffset = footerElement.getBoundingClientRect().top;
        const scrollTrigger = window.innerHeight * 0.7; // Adjust as needed

        if (topOffset < scrollTrigger) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); 

    return () => window.removeEventListener('scroll', fadeInOnScroll);
  }, []);

  return (
    <div className={`w-[1512px] h-[428px] flex flex-col justify-center items-center footer-container ${animate ? 'fade-in' : ''}`}>
      <img src="../../images/LogoSavior.png" alt="" />
      <p className='bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent font-bold text-3xl font-poppins leading-[25.64px] mt-[30px] tracking-[1.7090909481048584px] text-left'>SITEMAP</p>
      <div className='w-[618px] h-[20px] flex justify-between text-[#FFFFFF] mt-[30px]'>
        <p>Home</p>
        <p>IDO</p>
        <p>Tokenomics</p> 
        <p>Roadmap</p>
        <p>Whitepaper</p>
        <p>Pledge</p>
        <p>NFT</p>
        <p>Games</p>
      </div>
      <div className='w-[111px] h-[27px]'></div>
      <img className="ml-[200px]" src="../../images/Frame1825.png" alt="" />
    </div>
  );
};

export { Footer };
