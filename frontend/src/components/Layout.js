import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';

function Layout({ children }) {
    const location = useLocation();
    const isCheckoutFormPage = location.pathname === '/checkout-form';

    return (
        <div>
            {!isCheckoutFormPage && <Header />} {/* Conditionally render Header */}
            <main style={{ minHeight: '100vh', overflowY: 'auto' }}>
                {children}
            </main>
        </div>
    );
}

export default Layout;