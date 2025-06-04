import React from 'react';
import content from '../content/endOfDay';

const EndOfDay = () => {
    // Group procedures by sections
    const lockerRefundSteps = content.slice(0, 18);
    const cashTakingSteps = content.slice(18, 33);
    const finalSteps = content.slice(33);

    return (
        <div className="p-8">
            {/* Page Header */}
            <div className="mb-8">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-gray-900">End of Day Procedures</h1>
                    <p className="text-gray-600 mt-1">Complete cashing up and closing procedures</p>
                </div>
            </div>

            {/* Overview */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
                <div className="space-y-2 text-gray-700">
                    <p>• <strong>Locker Refunds:</strong> Process member locker refunds first</p>
                    <p>• <strong>Cash Taking:</strong> Balance tills and complete sheets</p>
                    <p>• <strong>Final Close:</strong> End of day reports and secure building</p>
                </div>
            </div>

            {/* Main Procedures */}
            <div className="space-y-8">
            {/* Step 1: Locker Refund Process */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Step 1: Locker Refund Process</h2>
                <div className="space-y-3">
                    {lockerRefundSteps.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-gray-600 font-medium mr-3">{index + 1}.</span>
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Step 2: Cash Taking & Balance */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Step 2: Cash Taking & Balance</h2>
                <div className="space-y-3 mb-6">
                    {cashTakingSteps.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-gray-600 font-medium mr-3">{index + 19}.</span>
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Float Check</h3>
                    <p className="text-gray-700">£50.00 should remain in till</p>
                </div>
            </div>

            {/* Step 3: Final Close & End of Day */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Step 3: Final Close & End of Day</h2>
                <div className="space-y-3">
                    {finalSteps.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-gray-600 font-medium mr-3">{index + 34}.</span>
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Critical Reminders */}
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Critical Security Reminders</h3>
                <div className="space-y-3">
                    <p className="text-gray-700">• Lock all cash in safe</p>
                    <p className="text-gray-700">• Set building alarm</p>
                    <p className="text-gray-700">• Check all doors are locked</p>
                    <p className="text-gray-700">• Complete security walk-through</p>
                    <p className="text-gray-700">• Ensure all figures match</p>
                    <p className="text-gray-700">• File all daily reports</p>
                    <p className="text-gray-700">• Update duty manager log</p>
                    <p className="text-gray-700">• Handover to next shift/security</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default EndOfDay;