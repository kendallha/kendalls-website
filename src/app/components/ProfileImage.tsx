'use client'

import {useState, useEffect} from 'react';
const ProfileImage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
  <section>
    <img className="h-auto max-w-xs" src="https://www.clipartmax.com/png/full/148-1484899_gretchen-in-the-circle-by-majkashinoda626-gretchen-recess-vince-spinelli-mikey-tj.png" />
  </section>
);
  };

export default ProfileImage;