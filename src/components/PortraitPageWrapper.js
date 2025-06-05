import React from 'react';

const PortraitPageWrapper = ({ children, title, description }) => {
    return (
        <div className="portrait-tablet-optimized">
            {/* Page Header - optimized for portrait */}
            {title && (
                <div className="mb-4">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 header-portrait-h1">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-gray-600 text-sm lg:text-base">{description}</p>
                    )}
                </div>
            )}
            
            {/* Content with portrait-optimized spacing */}
            <div className="space-y-4 space-y-portrait text-portrait-optimized">
                {children}
            </div>
        </div>
    );
};

export default PortraitPageWrapper;
