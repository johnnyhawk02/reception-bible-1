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

            {/* Main Content Sections */}
            <div className="space-y-8">
            {/* Booking Procedures */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Booking Procedures</h2>
                <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                        <span className="text-gray-600 font-medium mr-3">1.</span>
                        <p className="text-gray-700">{fitnessClassesContent[0]}</p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-gray-600 font-medium mr-3">2.</span>
                        <p className="text-gray-700">{fitnessClassesContent[1]}</p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-gray-600 font-medium mr-3">3.</span>
                        <p className="text-gray-700">{fitnessClassesContent[2]}</p>
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Booking Timeline</h3>
                    <div className="space-y-2 text-gray-700">
                        <p>• <strong>6:30am</strong> - Classes go live</p>
                        <p>• <strong>All day</strong> - Members can book</p>
                        <p>• <strong>11:00am</strong> - Non-members can book</p>
                    </div>
                </div>
            </div>

                {/* Reserve List Management */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="bg-gray-100 px-6 py-4">
                        <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                            <span className="mr-3">📝</span>
                            Reserve List Management
                        </h2>
                    </div>
                    <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">4</div>
                                    <p className="text-gray-700">{fitnessClassesContent[3]}</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">5</div>
                                    <p className="text-gray-700">{fitnessClassesContent[4]}</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-4">Reserve List Process</h4>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <div className="w-6 h-6 bg-gray-600 rounded text-white text-xs flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</div>
                                        <span className="text-sm text-gray-700">Mark as "Res x 1", "Res x 2", etc.</span>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-6 h-6 bg-gray-600 rounded text-white text-xs flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</div>
                                        <span className="text-sm text-gray-700">Ensure valid contact number</span>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-6 h-6 bg-gray-600 rounded text-white text-xs flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</div>
                                        <span className="text-sm text-gray-700">Call reserves in order</span>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-6 h-6 bg-gray-600 rounded text-white text-xs flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</div>
                                        <span className="text-sm text-gray-700">Move up remaining reserves</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Member vs Non-Member Rules */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="bg-gray-100 px-6 py-4">
                        <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                            <span className="mr-3">👥</span>
                            Member & Non-Member Rules
                        </h2>
                    </div>
                    <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                                    <span className="mr-2">✅</span>
                                    Members
                                </h4>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                                        <span>Can book from 6:30am</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                                        <span>Priority booking</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                                        <span>No class limit</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                                        <span>Can use address code without band</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                                    <span className="mr-2">🎫</span>
                                    Non-Members
                                </h4>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                                        <span>Can book from 11:00am only</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                                        <span>Members get priority</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                                        <span>Can be added to reserve list</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                                        <span>Up to 1 week advance booking</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 grid md:grid-cols-2 gap-6">
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">6</div>
                                <p className="text-gray-700">{fitnessClassesContent[5]}</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">7</div>
                                <p className="text-gray-700">{fitnessClassesContent[6]}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Check-in Procedures */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="bg-gray-100 px-6 py-4">
                        <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                            <span className="mr-3">🎯</span>
                            Arrival & Check-in
                        </h2>
                    </div>
                    <div className="p-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 text-xl flex-shrink-0">
                                ✓
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Mandatory Check-in</h4>
                                <p className="text-gray-700 mb-4">{fitnessClassesContent[7]}</p>
                                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                    <h5 className="font-medium text-gray-900 mb-2">Check-in Procedure</h5>
                                    <div className="space-y-2 text-sm text-gray-700">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                                            <span>Verify booking in system</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                                            <span>Check membership status</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                                            <span>Mark as attended</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                                            <span>Update capacity count</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FitnessClasses;