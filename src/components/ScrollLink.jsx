import React from 'react';

const ScrollLink = ({ to, children, onClick, className }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) onClick();
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default ScrollLink;