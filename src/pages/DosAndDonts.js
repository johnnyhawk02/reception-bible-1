import React from 'react';
import dosAndDontsContent from '../content/dosAndDonts';

const DosAndDonts = () => {
    return (
        <div className="p-8">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{dosAndDontsContent.title}</h1>
                <p className="text-gray-600">Essential guidelines for reception staff</p>
            </div>
            
            {/* DON'T's Section */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">DON'T:</h2>
                <div className="space-y-2">
                    {dosAndDontsContent.donts.map((item, index) => (
                        <p key={index} className="text-gray-700">• {item}</p>
                    ))}
                </div>
            </div>

            {/* DO's Section */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">DO:</h2>
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
        </div>
    );
};

export default DosAndDonts;