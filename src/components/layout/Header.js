import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={headerStyle}>
      <h1>ToDoList</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </div>
  );
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px',
};

const linkStyle = {
  color: '#fff',
};

export default Header;
