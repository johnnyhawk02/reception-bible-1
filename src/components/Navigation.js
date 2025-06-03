import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navigation() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/opening-procedure', label: 'Opening Procedure' },
    { path: '/dos-and-donts', label: "Do's & Don'ts" },
    { path: '/memberships', label: 'Memberships' },
    { path: '/fitness-classes', label: 'Fitness Classes' },
    { path: '/till-checks', label: 'Till Checks' },
    { path: '/end-of-day', label: 'End of Day' },
    { path: '/faqs', label: 'FAQs' }
  ]

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold">
            Reception Bible
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex flex-wrap pb-4 -mx-2">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 mx-1 mb-2 rounded text-sm ${
                location.pathname === item.path
                  ? 'bg-blue-700 text-white'
                  : 'hover:bg-blue-800 text-blue-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 mb-1 rounded ${
                  location.pathname === item.path
                    ? 'bg-blue-700 text-white'
                    : 'hover:bg-blue-800 text-blue-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation