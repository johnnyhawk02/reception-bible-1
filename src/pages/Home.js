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
    <div className="p-8 max-w-6xl">
      {/* Header Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-2">
              Reception Bible
            </h1>
            <p className="text-xl text-gray-600">
              Meadows Leisure Centre Complete Staff Guide
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Your comprehensive guide to reception procedures, member management, and daily operations. 
          Everything you need to provide excellent customer service and run smooth operations.
        </p>
        
        {/* Complete Index Link */}
        <div className="mt-8">
          <Link 
            to="/index" 
            className="inline-block p-4 bg-gray-100 border border-gray-300 text-gray-900 font-medium hover:bg-gray-200"
          >
            Complete Index - Find Everything Quickly
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Reference</h2>
        <div className="space-y-6">
          {quickActions.map((action, index) => (
            <div key={index} className="mb-4">
              <div className="mb-2">
                <h3 className="font-semibold text-gray-900">{action.title}</h3>
              </div>
              <ul className="space-y-1">
                {action.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Main Sections */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Procedures & Guidelines</h2>
        <div className="space-y-4">
          {sections.map((section, index) => (
            <Link
              key={index}
              to={section.path}
              className="block p-4 text-gray-900 hover:text-gray-600"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {section.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="mb-8">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you can't find what you're looking for, don't hesitate to ask a supervisor or check the detailed procedures in each section.
            </p>
            <div className="flex items-center text-sm text-gray-700">
              <span className="mr-2 font-bold">*</span>
              <span>Always prioritize customer safety and satisfaction</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="font-medium">Emergency:</span>
                <span className="ml-2 text-gray-900 font-bold">999</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium">Main Line:</span>
                <span className="ml-2">0151 288 6727</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium">Email:</span>
                <span className="ml-2">meadows@sefton.gov.uk</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium">Address:</span>
                <span className="ml-2">Hall Lane, Maghull, L31 7BB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Install Instructions */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">💡 Install as App</h2>
        <p className="text-gray-600 mb-4">
          For the best experience, install Reception Bible as an app on your tablet. 
          It will work offline and open like a native app!
        </p>
        <InstallInstructions />
      </div>
    </div>
  )
}

export default Home