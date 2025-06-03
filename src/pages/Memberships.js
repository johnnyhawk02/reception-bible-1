import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import membershipsContent from '../content/memberships';

const Memberships = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredContent = membershipsContent.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Memberships</h1>
                <p className="text-gray-600 mb-4">Complete guide to membership procedures and band systems</p>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="space-y-4">
                    {filteredContent.map((item, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                            <p className="text-gray-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
                
                {filteredContent.length === 0 && searchTerm && (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No results found for "{searchTerm}"</p>
                    </div>
                )}
            </div>

            {/* Quick Reference Cards */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h3 className="font-bold text-blue-800 mb-2">Membership Bands</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Band 1: Peak membership</li>
                        <li>• Band 2: Off-peak membership</li>
                        <li>• Band 3: Student/concession rates</li>
                        <li>• Check band eligibility carefully</li>
                    </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h3 className="font-bold text-green-800 mb-2">Key Contacts</h3>
                    <ul className="text-sm text-green-700 space-y-1">
                        <li>• Retention Team: Extension 245</li>
                        <li>• Head Office: 01332 123456</li>
                        <li>• Always log retention attempts</li>
                        <li>• Follow up within 48 hours</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Memberships;