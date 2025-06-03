import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import dosAndDontsContent from '../content/dosAndDonts';

const DosAndDonts = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredContent = dosAndDontsContent.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Separate DO's and DON'Ts
    const dos = filteredContent.filter(item => item.startsWith('DO:'));
    const donts = filteredContent.filter(item => item.startsWith('DON\'T:'));

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Dos and Don'ts</h1>
                <p className="text-gray-600 mb-4">Essential guidelines for reception staff</p>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                {/* DO's Section */}
                <div className="bg-green-50 rounded-lg shadow-sm p-6 border-l-4 border-green-500">
                    <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                        <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">✓</span>
                        DO's
                    </h2>
                    <ul className="space-y-3">
                        {dos.map((item, index) => (
                            <li key={index} className="text-green-700">
                                {item.replace('DO: ', '')}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* DON'T's Section */}
                <div className="bg-red-50 rounded-lg shadow-sm p-6 border-l-4 border-red-500">
                    <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                        <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">✗</span>
                        DON'Ts
                    </h2>
                    <ul className="space-y-3">
                        {donts.map((item, index) => (
                            <li key={index} className="text-red-700">
                                {item.replace('DON\'T: ', '')}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            {filteredContent.length === 0 && searchTerm && (
                <div className="text-center py-8">
                    <p className="text-gray-500">No results found for "{searchTerm}"</p>
                </div>
            )}
        </div>
    );
};

export default DosAndDonts;