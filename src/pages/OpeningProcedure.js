import React from 'react';
import openingProcedureContent from '../content/openingProcedure';

const OpeningProcedure = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Opening Procedure</h1>
            <p className="text-gray-700 mb-8">Daily opening checklist for reception staff</p>

            <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 mb-2">Daily Opening Checklist</h2>
                <div className="space-y-2">
                    {openingProcedureContent.map((item, index) => (
                        <div key={index} className="text-gray-700">
                            {index + 1}. {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OpeningProcedure;