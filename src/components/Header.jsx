import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { path: '/OnePhoto', label: '한장여행' },
  { path: '/RandomTravel', label: '복불복여행' },
  { path: '/travel-prep', label: '여행준비' },
  { path: '/TravelCloth', label: '여행코디' },
  { path: '/TravelTip', label: '여행팁' },
];

const Header = () => {
  const location = useLocation();
  const menuRefs = useRef([]);
  const [activeStyle, setActiveStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const index = menuItems.findIndex(item => location.pathname.startsWith(item.path));
    if (index !== -1 && menuRefs.current[index]) {
      const el = menuRefs.current[index];
      const { offsetLeft, offsetWidth } = el;
      setActiveStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [location.pathname]);

  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="로고" style={styles.logoImage} />
        <h2 style={styles.logo}>바람길</h2>
      </div>

      <div style={styles.menuWrap}>
        {/* 움직이는 하이라이트 */}
        <div style={{
          ...styles.highlight,
          left: activeStyle.left,
          width: activeStyle.width,
        }} />

        <ul style={styles.menu}>
          {menuItems.map((item, idx) => (
            <li key={item.path} ref={el => menuRefs.current[idx] = el}>
                <Link
                  to={item.path}
                  style={{
                    ...styles.link,
                    color: location.pathname.startsWith(item.path) ? '#0066FF' : '#000',
                    transition: 'color 0.2s ease'
                  }}
                >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#fff',
    position: 'relative',
    fontFamily: "'jjggwakchangothica', sans-serif",
    fontWeight: 700,
    fontStyle: 'normal',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoImage: {
    width: '32px',
    height: '32px',
    objectFit: 'contain',
    verticalAlign: 'middle',
  },
  logo: {
    margin: 0,
  },
  menuWrap: {
    position: 'relative',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
    position: 'relative',
    zIndex: 1,
  },
  link: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    color: '#0066FF',
    textDecoration: 'none',
    fontSize: '1rem',
    zIndex: 2,
    position: 'relative',
  },
  highlight: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '2rem',
    backgroundColor: '#71D4FF',
    borderRadius: '200px',
    transition: 'all 0.3s ease',
    zIndex: 0,
  },
};

export default Header;
