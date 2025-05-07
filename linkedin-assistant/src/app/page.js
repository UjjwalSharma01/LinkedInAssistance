import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 premium-text">LinkedIn Assistant</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
            Enhance your LinkedIn experience with AI-powered comments and personalized engagement
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="https://microsoftedge.microsoft.com/addons/detail/linkedin-assistant/[YOUR-EXTENSION-ID]" 
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button"
            >
              Add to Edge
            </a>
            <Link 
              href="/privacy-policy" 
              className="bg-transparent border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 premium-text">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="premium-card p-6">
              <div className="bg-transparent text-blue-400 w-12 h-12 flex items-center justify-center rounded-full mb-4 border border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">AI-Powered Comments</h3>
              <p className="text-gray-400">Generate relevant, personalized comments for LinkedIn posts with just one click.</p>
            </div>
            <div className="premium-card p-6">
              <div className="bg-transparent text-blue-400 w-12 h-12 flex items-center justify-center rounded-full mb-4 border border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Personalized Engagement</h3>
              <p className="text-gray-400">Tailor your interactions based on profile information and post context.</p>
            </div>
            <div className="premium-card p-6">
              <div className="bg-transparent text-blue-400 w-12 h-12 flex items-center justify-center rounded-full mb-4 border border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Easy Customization</h3>
              <p className="text-gray-400">Set your preferences for comment style and tone to match your personal brand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 glass-section mt-10 mb-10 mx-auto container px-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 premium-text">How It Works</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="bg-transparent text-blue-400 w-16 h-16 flex items-center justify-center rounded-full mx-auto border border-gray-700">
                  <span className="text-2xl font-bold">1</span>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-xl font-semibold mb-2 text-white">Install the Extension</h3>
                <p className="text-gray-300">Add LinkedIn Assistant to your browser from the Microsoft Edge Add-ons store.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="bg-transparent text-blue-400 w-16 h-16 flex items-center justify-center rounded-full mx-auto border border-gray-700">
                  <span className="text-2xl font-bold">2</span>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-xl font-semibold mb-2 text-white">Set Up Your Account</h3>
                <p className="text-gray-300">Complete a simple authentication process to secure your experience.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="bg-transparent text-blue-400 w-16 h-16 flex items-center justify-center rounded-full mx-auto border border-gray-700">
                  <span className="text-2xl font-bold">3</span>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-xl font-semibold mb-2 text-white">Start Engaging</h3>
                <p className="text-gray-300">Browse LinkedIn as usual and use our AI tools to generate thoughtful comments and responses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 premium-text">Ready to Level Up Your LinkedIn Game?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Join thousands of professionals who are using LinkedIn Assistant to enhance their networking experience.
          </p>
          <a 
            href="https://microsoftedge.microsoft.com/addons/detail/linkedin-assistant/[YOUR-EXTENSION-ID]" 
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </>
  );
}
