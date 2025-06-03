import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import content from '../content/endOfDay';

const EndOfDay = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredContent = content.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">End of Day Procedures</h1>
                <p className="text-gray-600 mb-4">Complete cashing up and closing procedures</p>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
                <ol className="space-y-3">
                    {filteredContent.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-0.5 flex-shrink-0">
                                {index + 1}
                            </span>
                            <span className="text-gray-700 leading-relaxed text-sm">{item}</span>
                        </li>
                    ))}
                </ol>
                
                {filteredContent.length === 0 && searchTerm && (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No results found for "{searchTerm}"</p>
                    </div>
                )}
            </div>

            {/* Critical Steps Reminder */}
            <div className="mt-8 bg-red-50 rounded-lg p-6 border border-red-200">
                <h3 className="font-bold text-red-800 mb-3">🔒 Critical Steps - Do Not Skip</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <h4 className="font-semibold text-red-700 mb-2">Security:</h4>
                        <ul className="text-red-600 space-y-1">
                            <li>• Lock all cash in safe</li>
                            <li>• Set building alarm (Code: 9876)</li>
                            <li>• Check all doors are locked</li>
                            <li>• Complete security walk-through</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-700 mb-2">Documentation:</h4>
                        <ul className="text-red-600 space-y-1">
                            <li>• Balance all tills</li>
                            <li>• Complete cashing up sheet</li>
                            <li>• File daily reports</li>
                            <li>• Update duty manager log</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EndOfDay;