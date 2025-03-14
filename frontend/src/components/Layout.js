import React from 'react';
import Header from './Header';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ minHeight: '100vh', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
}

export default Layout;