import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-transparent py-3 border-b border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold premium-text">LinkedIn Assistant</span>
        </Link>
        
        <nav>
          <ul className="flex space-x-6">
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
                className="premium-button"
              >
                Get Extension
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}