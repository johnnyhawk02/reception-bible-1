import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import tillChecksContent from '../content/tillChecks';

const TillChecks = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredContent = tillChecksContent.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Till Checks</h1>
                <p className="text-gray-600 mb-4">Step-by-step till checking procedure</p>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
                <ol className="space-y-4">
                    {filteredContent.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                                {index + 1}
                            </span>
                            <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ol>
                
                {filteredContent.length === 0 && searchTerm && (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No results found for "{searchTerm}"</p>
                    </div>
                )}
            </div>

            {/* Important Notes */}
            <div className="mt-8 bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h3 className="font-bold text-yellow-800 mb-3">⚠️ Important Reminders</h3>
                <div className="text-sm text-yellow-700 space-y-2">
                    <p>• Always complete till checks at the start of each shift</p>
                    <p>• Report any discrepancies immediately to duty manager</p>
                    <p>• Ensure float is correct before accepting responsibility</p>
                    <p>• Double-check all card reader connections and receipts</p>
                </div>
            </div>
        </div>
    );
};

export default TillChecks;