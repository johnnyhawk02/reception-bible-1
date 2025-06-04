import React, { useState } from 'react';
import Navigation from './Navigation';

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-25 z-20 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
            
            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-100 z-30 transform transition-transform duration-200 ease-in-out ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0`}>
                <Navigation setSidebarOpen={setSidebarOpen} />
            </div>
            
            {/* Main content */}
            <div className="lg:ml-64">
                {/* Top bar for mobile */}
                <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-100 bg-white">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-2 rounded-md hover:bg-gray-50"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <h1 className="text-lg font-semibold text-gray-900">Reception Bible</h1>
                    <div className="w-10" /> {/* Spacer */}
                </div>
                
                {/* Page content */}
                <main className="min-h-screen p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;