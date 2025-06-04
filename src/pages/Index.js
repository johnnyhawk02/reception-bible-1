import { Link } from 'react-router-dom';

function Index() {
  const indexItems = [
    // Opening Procedures
    {
      category: "Opening Procedures",
      items: [
        { title: "Daily Opening Checklist", path: "/opening-procedure", section: "checklist" },
        { title: "System Setup", path: "/opening-procedure", section: "systems" },
        { title: "Cash Till Preparation", path: "/opening-procedure", section: "till" },
        { title: "Facility Checks", path: "/opening-procedure", section: "facility" }
      ]
    },
    
    // Guidelines
    {
      category: "Reception Guidelines",
      items: [
        { title: "Customer Service Standards", path: "/dos-and-donts", section: "customer-service" },
        { title: "Phone Etiquette", path: "/dos-and-donts", section: "phone" },
        { title: "Emergency Procedures", path: "/dos-and-donts", section: "emergency" },
        { title: "Professional Conduct", path: "/dos-and-donts", section: "conduct" }
      ]
    },
    
    // Memberships
    {
      category: "Membership Management",
      items: [
        { title: "New Member Registration", path: "/memberships", section: "registration" },
        { title: "Band Changes", path: "/memberships", section: "bands" },
        { title: "Payment Processing", path: "/memberships", section: "payments" },
        { title: "Membership Cancellation", path: "/memberships", section: "cancellation" },
        { title: "Guest Passes", path: "/memberships", section: "guests" },
        { title: "Corporate Memberships", path: "/memberships", section: "corporate" }
      ]
    },
    
    // Fitness Classes
    {
      category: "Fitness Classes",
      items: [
        { title: "Class Booking System", path: "/fitness-classes", section: "booking" },
        { title: "Cancellation Policy", path: "/fitness-classes", section: "cancellation" },
        { title: "Waitlist Management", path: "/fitness-classes", section: "waitlist" },
        { title: "Class Capacity", path: "/fitness-classes", section: "capacity" },
        { title: "Instructor Communications", path: "/fitness-classes", section: "instructors" }
      ]
    },
    
    // Till Operations
    {
      category: "Till Operations",
      items: [
        { title: "Daily Till Checks", path: "/till-checks", section: "daily" },
        { title: "Cash Handling", path: "/till-checks", section: "cash" },
        { title: "Card Payments", path: "/till-checks", section: "cards" },
        { title: "Refund Procedures", path: "/till-checks", section: "refunds" },
        { title: "Banking Procedures", path: "/till-checks", section: "banking" }
      ]
    },
    
    // End of Day
    {
      category: "Closing Procedures",
      items: [
        { title: "Locker Refunds", path: "/end-of-day", section: "lockers" },
        { title: "Cash Taking", path: "/end-of-day", section: "cash-taking" },
        { title: "System Shutdown", path: "/end-of-day", section: "shutdown" },
        { title: "Security Checks", path: "/end-of-day", section: "security" },
        { title: "Final Reports", path: "/end-of-day", section: "reports" }
      ]
    },
    
    // Common Questions
    {
      category: "Frequently Asked Questions",
      items: [
        { title: "Membership Questions", path: "/faqs", section: "membership" },
        { title: "Facility Information", path: "/faqs", section: "facilities" },
        { title: "Class Enquiries", path: "/faqs", section: "classes" },
        { title: "Payment Issues", path: "/faqs", section: "payments" },
        { title: "General Enquiries", path: "/faqs", section: "general" }
      ]
    }
  ];

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Reception Bible Index</h1>
        <p className="text-sm text-gray-600">Quick reference guide to all procedures and information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {indexItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="border-b border-gray-200 pb-3">
            <h2 className="text-lg font-bold text-gray-900 mb-2">{category.category}</h2>
            <div className="space-y-1">
              {category.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  to={item.path}
                  className="block p-2 border border-gray-200 hover:bg-gray-50 text-gray-700"
                >
                  <div className="font-medium text-gray-900 text-sm">{item.title}</div>
                  <div className="text-xs text-gray-500">
                    {item.path.replace('/', '').replace('-', ' ')} → {item.section}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-3 bg-gray-50">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Emergency Contacts</h3>
        <div className="space-y-1 text-xs text-gray-700">
          <div className="flex justify-between">
            <span>Emergency Services:</span>
            <span className="font-medium">999</span>
          </div>
          <div className="flex justify-between">
            <span>Main Reception:</span>
            <span className="font-medium">0151 288 6727</span>
          </div>
          <div className="flex justify-between">
            <span>Manager:</span>
            <span className="font-medium">Available on site</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
