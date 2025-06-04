import React from 'react';
import membershipsContent from '../content/memberships';

const Memberships = () => {
    return (
        <div className="p-8">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Memberships</h1>
                <p className="text-gray-600">Complete guide to membership procedures and band systems</p>
            </div>

            {/* Quick Reference */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Reference</h2>
                <div className="space-y-2 text-gray-700">
                    <p>• <strong>Purple Bands:</strong> Required for gym access and locker operation</p>
                    <p>• <strong>Retention Team:</strong> 0151-934 2858 for membership queries</p>
                    <p>• <strong>Direct Debits:</strong> Harlands 01444 449024 for DD queries</p>
                </div>
            </div>

            {/* Membership Setup & Types */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Membership Setup & Types</h2>
                <div className="space-y-2 text-gray-700 mb-4">
                    <p>• {membershipsContent[0]}</p>
                    <p>• {membershipsContent[1]}</p>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">Setup Checklist</h3>
                <div className="space-y-1 text-gray-700">
                    <p>1. Discuss membership types</p>
                    <p>2. Sign up on iPad</p>
                    <p>3. Get 'W' number</p>
                    <p>4. Produce purple band</p>
                    <p>5. Take member photo</p>
                </div>
            </div>

            {/* Band Management */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Band Management</h2>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">Purple Bands</h3>
                <p className="text-gray-700 mb-4">• {membershipsContent[6]}</p>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">Lost Bands</h3>
                <p className="text-gray-700 mb-4">• {membershipsContent[7]}</p>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">Forgotten Bands</h3>
                <p className="text-gray-700">• {membershipsContent[8]}</p>
            </div>

            {/* System Procedures */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">System Procedures</h2>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">Finding Members</h3>
                <p className="text-gray-700 mb-2">• {membershipsContent[9]}</p>
                <p className="text-gray-700 mb-4"><strong>Address Code Example:</strong> Susan Meadows → MEADS01</p>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cancellations & Amendments</h3>
                <p className="text-gray-700">• {membershipsContent[5]}</p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Key Contacts & Support</h2>
                <div className="space-y-2 text-gray-700">
                    <p>• {membershipsContent[3]}</p>
                    <p>• {membershipsContent[4]}</p>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 mt-4">Workforce Memberships</h3>
                <p className="text-gray-700">• {membershipsContent[2]}</p>
            </div>
        </div>
    );
};

export default Memberships;