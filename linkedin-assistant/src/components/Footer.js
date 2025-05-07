import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 glass-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 premium-text">LinkedIn Assistant</h3>
            <p className="text-gray-300">
              Enhance your LinkedIn experience with AI-powered engagement tools.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 premium-text">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-blue-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a 
                  href="https://microsoftedge.microsoft.com/addons/detail/linkedin-assistant/[YOUR-EXTENSION-ID]" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-300 transition-colors"
                >
                  Download Extension
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 premium-text">Contact</h3>
            <p className="text-gray-300 mb-2">
              Have questions or feedback?
            </p>
            <a 
              href="mailto:ujjwalsharmacloud@gmail.com" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ujjwalsharmacloud@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} LinkedIn Assistant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}