import SearchBar from '../components/SearchBar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const sections = [
    { title: 'Opening Procedure', path: '/opening-procedure', description: 'Daily opening checklist and procedures' },
    { title: "Do's & Don'ts", path: '/dos-and-donts', description: 'Essential reception guidelines' },
    { title: 'Memberships', path: '/memberships', description: 'Member management and band procedures' },
    { title: 'Fitness Classes', path: '/fitness-classes', description: 'Class booking and management' },
    { title: 'Till Checks', path: '/till-checks', description: 'Mid-day till balancing procedures' },
    { title: 'End of Day', path: '/end-of-day', description: 'Cash up and closing procedures' },
    { title: 'FAQs', path: '/faqs', description: 'Common questions and answers' }
  ]

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Reception Bible</h1>
        <p className="text-xl text-gray-600 mb-6">Your complete guide to reception procedures</p>
      </div>

      <SearchBar onSearch={setSearchTerm} placeholder="Search sections..." />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSections.map(section => (
          <div key={section.path} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">{section.title}</h3>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <Link
              to={section.path}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Quick Reference</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Emergency Contacts</h3>
            <p>Duty Manager: Internal extension</p>
            <p>Retention: 0151-934 2858</p>
            <p>Harlands: 01444 449024</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Important Codes</h3>
            <p>Voicemail PIN: 112233#</p>
            <p>Card Machine Startup: 7735</p>
            <p>Till Float: £50.00 each</p>
          </div>
        </div>
      </div>

      {filteredSections.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No sections found matching "{searchTerm}"
        </div>
      )}
    </div>
  )
}

export default Home