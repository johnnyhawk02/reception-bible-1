import React from 'react';
import openingProcedureContent from '../content/openingProcedure';

const OpeningProcedure = () => {
    return (
        <div className="p-8">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Opening Procedure</h1>
                <p className="text-gray-600">Daily opening checklist for reception staff</p>
            </div>

            {/* Checklist */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Daily Opening Checklist</h2>
                <div className="space-y-3">
                    {openingProcedureContent.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-gray-600 font-medium mr-3">{index + 1}.</span>
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Info */}
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tips for Success</h3>
                <ul className="space-y-2 text-gray-700">
                    <li>• Arrive 15 minutes early to allow time for a thorough opening procedure</li>
                    <li>• Double-check all safety equipment before opening to the public</li>
                    <li>• Keep the opening checklist visible at reception for reference throughout the day</li>
                </ul>
            </div>
        </div>
    );
};

export default OpeningProcedure;