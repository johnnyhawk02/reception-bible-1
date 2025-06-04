import React from 'react';
import fitnessClassesContent from '../content/fitnessClasses';

const FitnessClasses = () => {
    return (
        <div className="p-8">
            {/* Page Header */}
            <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 text-2xl">
                        🏃
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Fitness Classes</h1>
                        <p className="text-gray-600 mt-1">Booking procedures and class management guidelines</p>
                    </div>
                </div>
            </div>

            {/* Quick Reference */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Reference</h2>
                <div className="space-y-2 text-gray-700">
                    <p>• <strong>Booking Opens:</strong> 6:30am daily</p>
                    <p>• <strong>Advance Booking:</strong> 1 week ahead</p>
                    <p>• <strong>Reserve List:</strong> Max 3 people</p>
                    <p>• <strong>Check-in:</strong> Required at reception</p>
                </div>
            </div>

            {/* All Procedures */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Procedures</h2>
                <div className="space-y-3">
                    {fitnessClassesContent.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-gray-600 font-medium mr-3">{index + 1}.</span>
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Booking Timeline */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Booking Timeline</h3>
                <div className="space-y-2 text-gray-700">
                    <p>• <strong>6:30am</strong> - Classes go live</p>
                    <p>• <strong>All day</strong> - Members can book</p>
                    <p>• <strong>11:00am</strong> - Non-members can book</p>
                </div>
            </div>

            {/* Important Notes */}
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Important Notes</h3>
                <div className="space-y-2 text-gray-700">
                    <p>• Members have priority booking until 11:00am</p>
                    <p>• Reserve list maximum is 3 people per class</p>
                    <p>• All participants must check in at reception</p>
                    <p>• Late arrivals (5+ minutes) may lose their space</p>
                    <p>• Contact duty manager for any booking issues</p>
                </div>
            </div>
        </div>
    );
};

export default FitnessClasses;
