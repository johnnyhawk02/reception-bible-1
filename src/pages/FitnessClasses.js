import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import fitnessClassesContent from '../content/fitnessClasses';

const FitnessClasses = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredContent = fitnessClassesContent.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Fitness Classes</h1>
                <p className="text-gray-600 mb-4">Booking procedures and class management guidelines</p>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="space-y-4">
                    {filteredContent.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                                {index + 1}
                            </span>
                            <span className="text-gray-700 leading-relaxed">{item}</span>
                        </div>
                    ))}
                </div>
                
                {filteredContent.length === 0 && searchTerm && (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No results found for "{searchTerm}"</p>
                    </div>
                )}
            </div>

            {/* Quick Reference */}
            <div className="mt-8 bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h3 className="font-bold text-purple-800 mb-3">Quick Class Booking Reference</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <h4 className="font-semibold text-purple-700 mb-2">Booking Rules:</h4>
                        <ul className="text-purple-600 space-y-1">
                            <li>• Maximum 2 classes per day</li>
                            <li>• 24-hour cancellation policy</li>
                            <li>• Valid membership required</li>
                            <li>• Check capacity before booking</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-purple-700 mb-2">System Notes:</h4>
                        <ul className="text-purple-600 space-y-1">
                            <li>• Always check membership status</li>
                            <li>• Log no-shows in system</li>
                            <li>• Update waiting lists promptly</li>
                            <li>• Process refunds as needed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FitnessClasses;