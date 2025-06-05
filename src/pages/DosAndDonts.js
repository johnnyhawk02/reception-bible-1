import React from 'react';
import dosAndDontsContent from '../content/dosAndDonts';
import PortraitPageWrapper from '../components/PortraitPageWrapper';

const DosAndDonts = () => {
    return (
        <PortraitPageWrapper 
            title={dosAndDontsContent.title}
            description="Essential guidelines for reception staff"
        >
            {/* DON'T's Section */}
            <div className="mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3 header-portrait-h2">DON'T:</h2>
                <div className="space-y-2">
                    {dosAndDontsContent.donts.map((item, index) => (
                        <p key={index} className="text-gray-700">• {item}</p>
                    ))}
                </div>
            </div>

            {/* DO's Section */}
            <div className="mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3 header-portrait-h2">DO:</h2>
                <div className="space-y-3">
                    {dosAndDontsContent.dos.map((item, index) => (
                        <div key={index} className="text-gray-700">
                            {typeof item === 'string' ? (
                                <p>• {item}</p>
                            ) : (
                                <div>
                                    <p>• {item.text}</p>
                                    <div className="ml-4 mt-2 space-y-1">
                                        {item.example.map((line, lineIndex) => (
                                            <p key={lineIndex} className="text-gray-600 text-sm">{line}</p>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </PortraitPageWrapper>
    );
};

export default DosAndDonts;