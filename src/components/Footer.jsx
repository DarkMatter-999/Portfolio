import React, { useRef, useEffect } from 'react'

import "./Footer.css"

const Footer = () => {
  const interBubbleRef = useRef(null);
  const curXRef = useRef(0);
  const curYRef = useRef(0);
  const tgXRef = useRef(0);
  const tgYRef = useRef(0);

  useEffect(() => {
      const move = () => {
          curXRef.current += (tgXRef.current - curXRef.current) / 20;
          curYRef.current += (tgYRef.current - curYRef.current) / 20;
          if (interBubbleRef.current) {
              interBubbleRef.current.style.transform = `translate(${Math.round(curXRef.current)}px, ${Math.round(curYRef.current)}px)`;
          }
          requestAnimationFrame(move);
      };

      const handleMouseMove = (event) => {
          tgXRef.current = event.clientX;
          tgYRef.current = event.clientY;
      };

      window.addEventListener('mousemove', handleMouseMove);
      move();

      // Clean up event listener on component unmount
      return () => {
          window.removeEventListener('mousemove', handleMouseMove);
      };
  }, []);

  return (
    <>
    <div className="gradient-bg">
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive" ref={interBubbleRef}></div>
      </div>
    </div>
    <footer className="footer" id="footer">
    <ul>
      <li><a href="https://github.com/DarkMatter-999">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/darkmatter999/">Linkedin</a></li>
      <li><a href="https://x.com/darkmatter_999">Twitter</a></li>
      <li><a href="https://leetcode.com/lakshyajeet">LeetCode</a></li>
      <li><a href="https://www.codechef.com/users/lakshyajeet">CodeChef</a></li>
      <li><a href="https://www.hackerrank.com/lakshyajeet">Hackerank</a></li>
    </ul>
      <p>Made with 💜 | LSG {new Date().getFullYear()}</p>
    </footer>
    </>
  )
}

export default Footer
