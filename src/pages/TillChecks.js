import React from 'react';
import tillChecksContent from '../content/tillChecks';

const TillChecks = () => {
    return (
        <div className="p-8">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Till Checks</h1>
                <p className="text-gray-600">Step-by-step cash handling and balance procedures</p>
            </div>

            {/* Quick Reference */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Reference</h2>
                <div className="space-y-2 text-gray-700">
                    <p>• <strong>Timing:</strong> Mid-afternoon checks required during shift</p>
                    <p>• <strong>Float Amount:</strong> £50.00 float to deduct from total</p>
                    <p>• <strong>Documentation:</strong> Black binder register form required</p>
                </div>
            </div>

            {/* Main Procedure */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Till Check Procedure</h2>
                <div className="space-y-3">
                    {tillChecksContent.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-gray-600 font-medium mr-3">{index + 1}.</span>
                            <div className="flex-1">
                                <p className="text-gray-700">{item}</p>
                                {index === 2 && (
                                    <p className="text-gray-600 text-sm mt-1"><strong>ESP Access:</strong> Action Tab → Authenticate User → Cash Taking</p>
                                )}
                                {index === 6 && (
                                    <p className="text-gray-600 text-sm mt-1"><strong>Till Options:</strong> Choose Till 1 or Till 2 for cash and card figures</p>
                                )}
                                {index === 8 && (
                                    <p className="text-gray-600 text-sm mt-1"><strong>Calculation:</strong> Total Cash - £50.00 Float = Cash Taken Amount</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cash vs Card Breakdown */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Cash vs Card Reconciliation</h2>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cash Reconciliation</h3>
                <div className="space-y-2 text-gray-700 mb-4">
                    <p>• Count Physical Cash: £XXX.XX</p>
                    <p>• Minus Till Float: £50.00</p>
                    <p>• Should Equal ESP Cash: £XXX.XX</p>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">Card Reconciliation</h3>
                <div className="space-y-2 text-gray-700">
                    <p>• Add Card Receipts: £XXX.XX</p>
                    <p>• Should Equal ESP Card Amount: £XXX.XX</p>
                    <p>• <strong>Note:</strong> Physical card receipts must match the ESP system card total</p>
                </div>
            </div>

            {/* ESP System Process */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">ESP System Process</h2>
                <div className="space-y-2 text-gray-700">
                    <p>1. <strong>Access Action Tab:</strong> Click on the action tab in ESP system to begin till check process</p>
                    <p>2. <strong>Authenticate User:</strong> Enter your ESP login details to authenticate your access</p>
                    <p>3. <strong>Select Cash Taking Tab:</strong> Navigate to the cash taking section to view till totals</p>
                    <p>4. <strong>Choose Till:</strong> Select Till 1 or Till 2 to view cash and card payment figures</p>
                </div>
            </div>

            {/* Cash Verification */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Cash Verification Process</h2>
                <div className="space-y-2 text-gray-700">
                    <p>• <strong>Physical Cash Count:</strong> Count all physical cash in your till and add up the full amount</p>
                    <p>• <strong>Important:</strong> Deduct £50.00 float from total</p>
                    <p>• <strong>Card Receipt Verification:</strong> Take out all card receipts and add them up to match the card payment total in ESP</p>
                    <p>• <strong>Balance Verification:</strong> Your physical count should match the ESP system figures exactly</p>
                </div>
            </div>

            {/* Documentation Requirements */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Documentation & Sign-off</h2>
                <div className="space-y-2 text-gray-700">
                    <p>1. <strong>Locate Register Form:</strong> Find the register form in the black binder at the back of reception</p>
                    <p>2. <strong>Record Details:</strong> Record all cash taken amounts on the form with date and time</p>
                    <p>3. <strong>Sign & Date:</strong> Sign and date the form, then get the duty manager to counter-sign</p>
                </div>
            </div>

            {/* Key Points */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Important Reminders</h2>
                <div className="space-y-2 text-gray-700">
                    <p>• Check till mid-afternoon during your shift</p>
                    <p>• Always deduct the £50.00 float amount</p>
                    <p>• Verify discrepancies before shift end</p>
                    <p>• Count both cash and card receipts</p>
                    <p>• Complete documentation in black binder</p>
                    <p>• Obtain duty manager counter-signature</p>
                </div>
            </div>
        </div>
    );
};

export default TillChecks;