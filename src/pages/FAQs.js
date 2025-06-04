import React from 'react';
import faqsContent from '../content/faqs';

const FAQs = () => {
    // Parse Q&A format from the content
    const parseQA = (text) => {
        const qIndex = text.indexOf('Q: ');
        const aIndex = text.indexOf('A: ');
        
        if (qIndex !== -1 && aIndex !== -1) {
            return {
                question: text.substring(qIndex + 3, aIndex).trim(),
                answer: text.substring(aIndex + 3).trim()
            };
        }
        return { question: text, answer: '' };
    };

    return (
        <div className="p-8">
            {/* Page Header */}
            <div className="mb-8">
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
                    <p className="text-gray-600 mt-1">Common questions and their standard responses</p>
                </div>
            </div>

            {/* Categories Overview */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
                <div className="space-y-2 text-gray-700">
                    <p>• <strong>Till Issues:</strong> Balance problems & cash handling</p>
                    <p>• <strong>Memberships:</strong> Bands, queries & retention</p>
                    <p>• <strong>Classes:</strong> Booking rules & procedures</p>
                    <p>• <strong>Technical:</strong> Card machines & systems</p>
                </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
                {faqsContent.map((faq, index) => {
                    const { question, answer } = parseQA(faq);
                    
                    return (
                        <div key={index} className="mb-6">
                            <div className="mb-2">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Q: {question}
                                </h3>
                            </div>
                            
                            {answer && (
                                <div className="ml-4">
                                    <p className="text-gray-700">A: {answer}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Customer Service Tips */}
            <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Customer Service Excellence</h3>
                <div className="space-y-3">
                    <p className="text-gray-700">• Always greet customers with a smile and friendly tone</p>
                    <p className="text-gray-700">• If you don't know the answer, say "Let me find that out for you"</p>
                    <p className="text-gray-700">• Escalate complex issues to the duty manager</p>
                    <p className="text-gray-700">• Follow up with customers when possible</p>
                </div>
            </div>

            {/* Quick Reference */}
            <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Reference Numbers</h3>
                <div className="space-y-2 text-gray-700">
                    <p>• <strong>Voicemail Pin:</strong> 112233#</p>
                    <p>• <strong>Card Machine Startup:</strong> 7735</p>
                    <p>• <strong>Retention Team:</strong> 0151-934 2858</p>
                </div>
            </div>
        </div>
    );
};

export default FAQs;