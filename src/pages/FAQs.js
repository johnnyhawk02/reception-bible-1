import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import faqsContent from '../content/faqs';

const FAQs = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFAQs = faqsContent.filter(faq =>
        faq.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h1>
                <p className="text-gray-600 mb-4">Common questions and their standard responses</p>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            
            <div className="space-y-6">
                {filteredFAQs.map((faq, index) => {
                    const { question, answer } = parseQA(faq);
                    return (
                        <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                            <div className="flex items-start mb-3">
                                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                                    Q
                                </span>
                                <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                                    {question}
                                </h3>
                            </div>
                            
                            {answer && (
                                <div className="flex items-start ml-11">
                                    <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                                        A
                                    </span>
                                    <p className="text-gray-700 leading-relaxed">{answer}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
                
                {filteredFAQs.length === 0 && searchTerm && (
                    <div className="text-center py-8">
                        <p className="text-gray-500">No FAQs found for "{searchTerm}"</p>
                    </div>
                )}
            </div>

            {/* Quick Tips */}
            <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-3">💡 Customer Service Tips</h3>
                <div className="text-sm text-blue-700 space-y-2">
                    <p>• Always greet customers with a smile and friendly tone</p>
                    <p>• If you don't know the answer, say "Let me find that out for you"</p>
                    <p>• Escalate complex issues to the duty manager</p>
                    <p>• Follow up with customers when possible</p>
                </div>
            </div>
        </div>
    );
};

export default FAQs;