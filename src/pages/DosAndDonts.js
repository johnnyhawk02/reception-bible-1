import React from 'react';
import dosAndDontsContent from '../content/dosAndDonts';

const DosAndDonts = () => {
    // Separate DO's and DON'Ts
    const dos = dosAndDontsContent.filter(item => item.startsWith('DO:'));
    const donts = dosAndDontsContent.filter(item => item.startsWith('DON\'T:'));

    return (
        <div className="p-8">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Do's & Don'ts</h1>
                <p className="text-gray-600">Essential guidelines for reception staff</p>
            </div>
            
            {/* DO's Section */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">DO's</h2>
                <div className="space-y-2">
                    {dos.map((item, index) => (
                        <p key={index} className="text-gray-700">
                            • {item.replace('DO: ', '')}
                        </p>
                    ))}
                </div>
            </div>

            {/* DON'T's Section */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">DON'Ts</h2>
                <div className="space-y-2">
                    {donts.map((item, index) => (
                        <p key={index} className="text-gray-700">
                            • {item.replace('DON\'T: ', '')}
                        </p>
                    ))}
                </div>
            </div>

            {/* Additional Guidelines */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Remember</h3>
                <div className="space-y-2 text-gray-700">
                    <p>• Every interaction shapes our reputation</p>
                    <p>• When in doubt, ask for help</p>
                    <p>• Customer safety comes first</p>
                    <p>• Document any unusual incidents</p>
                </div>
            </div>
        </div>
    );
};

export default DosAndDonts;