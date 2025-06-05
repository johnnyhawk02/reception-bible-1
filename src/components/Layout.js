import React, { useState } from 'react';
import Navigation from './Navigation';

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 portrait-tablet-optimized">
            {/* Mobile sidebar overlay - only for small screens */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-25 z-20 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
            
            {/* Sidebar - permanently visible on tablets and up */}
            <div className={`fixed top-0 left-0 h-full w-64 sidebar-portrait bg-white border-r border-gray-100 z-30 transform transition-transform duration-200 ease-in-out ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0`}>
                <Navigation setSidebarOpen={setSidebarOpen} />
            </div>
            
            {/* Main content - permanently offset on tablets and up */}
            <div className="md:ml-64 content-portrait">
                {/* Top bar for mobile only */}
                <div className="md:hidden flex items-center justify-between p-3 border-b border-gray-100 bg-white">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-2 rounded-md hover:bg-gray-50"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <h1 className="text-lg font-semibold text-gray-900">Reception Bible</h1>
                    <div className="w-8" /> {/* Spacer */}
                </div>
                
                {/* Page content - optimized for portrait tablets */}
                <main className="min-h-screen p-4 content-area-portrait">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;