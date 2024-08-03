import React, { useEffect, useRef } from 'react';

function Header() {
  const hamburgerRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const nav = navRef.current;
    
    const handleHamburgerClick = () => nav.classList.toggle('active');

    hamburger.addEventListener('click', handleHamburgerClick);

    return () => {
      hamburger.removeEventListener('click', handleHamburgerClick);
    };
  }, []);

  useEffect(() => {
    const menuItems = document.querySelectorAll('.nav-list a');

    const getScrollTopByHref = (element) => {
      const id = element.getAttribute('href');
      return document.querySelector(id).offsetTop;
    };

    const scrollToIdOnClick = (event) => {
      event.preventDefault();
      const to = getScrollTopByHref(event.target) - 80;
      scrollToPosition(to);
    };

    const scrollToPosition = (to) => {
      smoothScrollTo(0, to);
    };

    const smoothScrollTo = (endX, endY, duration = 800) => {
      const startX = window.scrollX || window.pageXOffset;
      const startY = window.scrollY || window.pageYOffset;
      const distanceX = endX - startX;
      const distanceY = endY - startY;
      const startTime = new Date().getTime();

      const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
      };

      const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
          clearInterval(timer);
        }
        window.scroll(newX, newY);
      }, 1000 / 60);
    };

    menuItems.forEach(item => {
      item.addEventListener('click', scrollToIdOnClick);
    });

    return () => {
      menuItems.forEach(item => {
        item.removeEventListener('click', scrollToIdOnClick);
      });
    };
  }, []);

  return (
    <div>
      <header className="header">
        <nav className="nav" ref={navRef}>
          <a href="/" className="logo">
            <img id="logo" src="./src/assets/6958522.png" alt="img-logo" />
          </a>
          <button className="hamburger" ref={hamburgerRef}></button>
          <ul className="nav-list">
            <li><a href="#banner">início</a></li>
            <li><a href="#sobrenos">sobre</a></li>
            <li><a href="#cardapio">produtos</a></li>
            <li><a href="#contatos">contatos</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
