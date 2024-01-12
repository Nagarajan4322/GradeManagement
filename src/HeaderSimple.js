import React, { useState } from 'react';
import './HeaderSimple.css'; // Import your CSS file

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export function HeaderSimple() {
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(links[0].link);

  const handleToggle = () => {
    setOpened(!opened);
  };

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={`link ${active === link.link ? 'active' : ''}`}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className="header">
      <div className="inner">
        <span className="logo"><img src='https://t4.ftcdn.net/jpg/02/51/49/57/360_F_251495755_xWdqsPQavPBZA6G2n8Oslw9GDWtc1SDp.jpg'/></span>
        <div className="links">{items}</div>
        <button className="burger" onClick={handleToggle}>
          Burger Icon
        </button>
      </div>
    </header>
  );
}

export default HeaderSimple;
