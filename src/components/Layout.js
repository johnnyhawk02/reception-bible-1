import React from 'react';
import Navigation from './Navigation';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            <main className="container mx-auto px-4 py-6 max-w-6xl">
                {children}
            </main>
            <footer className="bg-blue-900 text-white py-6 mt-12">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center">
                        <h3 className="text-lg font-semibold mb-2">Meadows Leisure Centre</h3>
                        <p className="text-sm">Hall Lane, Maghull, L31 7BB</p>
                        <p className="text-sm">Tel: 0151 288 6727</p>
                        <p className="text-sm">Email: meadows@sefton.gov.uk</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;