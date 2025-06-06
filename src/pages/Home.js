import { Link } from 'react-router-dom'
import InstallInstructions from '../components/InstallInstructions'

function Home() {
  const sections = [
    { 
      title: 'Opening Procedure', 
      path: '/opening-procedure', 
      description: 'Daily opening checklist and procedures'
    },
    { 
      title: "Do's & Don'ts", 
      path: '/dos-and-donts', 
      description: 'Essential reception guidelines'
    },
    { 
      title: 'Memberships', 
      path: '/memberships', 
      description: 'Member management and band procedures'
    },
    { 
      title: 'Fitness Classes', 
      path: '/fitness-classes', 
      description: 'Class booking and management'
    },
    { 
      title: 'Till Checks', 
      path: '/till-checks', 
      description: 'Mid-day till balancing procedures'
    },
    { 
      title: 'End of Day', 
      path: '/end-of-day', 
      description: 'Cash up and closing procedures'
    },
    { 
      title: 'FAQs', 
      path: '/faqs', 
      description: 'Common questions and answers'
    }
  ]

  const quickActions = [
    { title: 'Emergency Numbers', items: ['999 - Emergency', '0151 288 6727 - Main'] },
    { title: 'Key Times', items: ['Open: 6:00 AM', 'Close: 10:00 PM', 'Till Check: 2:00 PM'] },
    { title: 'Important Info', items: ['Always check ID', 'Log all incidents', 'Be professional'] }
  ]

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Reception Bible</h1>
      <p className="text-gray-700 mb-8">Complete guide for Meadows Leisure Centre reception staff</p>
      
      <div className="mb-8">
        <Link 
          to="/index" 
          className="inline-block p-2 bg-gray-50 border border-gray-300 text-gray-900 font-medium hover:bg-gray-100"
        >
          Complete Index - Find Everything Quickly
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Quick Reference</h2>
        <div className="space-y-2">
          {quickActions.map((action, index) => (
            <div key={index} className="p-2">
              <h3 className="font-bold text-gray-900">{action.title}</h3>
              <div className="text-gray-700">
                {action.items.map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Sections */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Main Sections</h2>
        <div className="space-y-2">
          {sections.map((section, index) => (
            <Link key={index} to={section.path} className="block p-2 hover:bg-gray-50">
              <h3 className="font-bold text-gray-900">{section.title}</h3>
              <p className="text-gray-700">{section.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Contact Information</h2>
        <div className="space-y-2">
          <div className="text-gray-700">Emergency: <span className="font-bold">999</span></div>
          <div className="text-gray-700">Main Line: 0151 288 6727</div>
          <div className="text-gray-700">Email: meadows@sefton.gov.uk</div>
          <div className="text-gray-700">Address: Hall Lane, Maghull, L31 7BB</div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Install as App</h2>
        <p className="text-gray-700 mb-4">
          For the best experience, install Reception Bible as an app on your tablet. 
          It will work offline and open like a native app!
        </p>
        <InstallInstructions />
      </div>
    </div>
  )
}

export default Home