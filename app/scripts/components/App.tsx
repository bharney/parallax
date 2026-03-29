import React, { useState, useEffect } from 'react';
import ParallaxHeader from './ParallaxHeader';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Technologies from './Technologies';
import About from './About';
import Contact from './Contact';
import ContactModal from './ContactModal';

// Custom smooth scroll function with slow animation
let activeAnimationId: number | null = null;

const smoothScrollToAnchor = (targetId: string, duration: number = 3000) => {
  const target = document.getElementById(targetId);
  if (!target) return;

  // Cancel any in-progress animation
  if (activeAnimationId !== null) {
    cancelAnimationFrame(activeAnimationId);
    activeAnimationId = null;
  }

  const startPosition = window.scrollY;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  // Sine easing gives a smooth, even feel without a harsh slow start
  const easeInOutSine = (t: number): number => {
    return -(Math.cos(Math.PI * t) - 1) / 2;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutSine(progress);

    window.scrollTo({ top: startPosition + distance * ease, behavior: 'instant' });

    if (progress < 1) {
      activeAnimationId = requestAnimationFrame(animation);
    } else {
      activeAnimationId = null;
    }
  };

  activeAnimationId = requestAnimationFrame(animation);
};

const App: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    // Initialize parallax after DOM is rendered
    import('../parallax').then(({ ParallaxManager }) => {
      try {
        new ParallaxManager('.parallax-layer');
      } catch (e) {
        // parallax layers not found
      }
    });

    // Initialize WOW.js animations
    const WOW = (window as any).WOW || require('wowjs').WOW;
    new WOW().init();

    // Handle smooth scroll for anchor links using event delegation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      
      if (target) {
        const href = target.getAttribute('href');
        
        if (href && href.startsWith('#') && href !== '#') {
          e.preventDefault();
          const targetId = href.substring(1);
          smoothScrollToAnchor(targetId, 3000); // 3 second scroll duration
        }
      }
    };

    // Use event delegation on document for better reliability
    document.addEventListener('click', handleAnchorClick as EventListener);

    return () => {
      document.removeEventListener('click', handleAnchorClick as EventListener);
    };
  }, []);

  return (
    <div>
      <div id="hero-shell">
        <ParallaxHeader onContactClick={() => setShowContactModal(true)} />
        <Navbar onContactClick={() => setShowContactModal(true)} />
      </div>
      <div id="content-wrapper" style={{ position: 'relative', zIndex: 20, backgroundColor: '#000315' }}>
        <div id="content" className="container">
          <Portfolio />
          <Technologies />
          <About />
          <Contact />
        </div>
      </div>
      <ContactModal show={showContactModal} onClose={() => setShowContactModal(false)} />
    </div>
  );
};

export default App;
