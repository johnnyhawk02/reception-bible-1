import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import openingProcedureContent from '../content/openingProcedure';

const OpeningProcedure = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredContent = openingProcedureContent.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Opening Procedures</h1>
                <p className="text-gray-600 mb-4">Daily opening checklist for Meadows Leisure Centre reception</p>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
                <ol className="space-y-4">
                    {filteredContent.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
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
        </div>
    );
};

export default OpeningProcedure;