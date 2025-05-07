export default function PrivacyPolicy() {
  return (
    <div className="bg-transparent">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center premium-text">Privacy Policy</h1>
        
        <div className="max-w-4xl mx-auto glass-section p-8 rounded-xl">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Introduction</h2>
            <p className="mb-4 text-gray-300">
              At LinkedIn Assistant, we are committed to protecting your privacy and providing a secure experience. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our browser extension.
            </p>
            <p className="text-gray-300">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access or use the extension.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Last Updated</h2>
            <p className="text-gray-300">
              This Privacy Policy was last updated on May 7, 2025.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
            <p className="mb-4 text-gray-300">
              We collect different types of information to provide and improve our services to you:
            </p>
            <h3 className="text-xl font-medium mb-2 text-gray-200">Personal Information</h3>
            <p className="mb-4 text-gray-300">
              When you use LinkedIn Assistant, we may collect:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>Email address (used for authentication purposes)</li>
              <li>Profile information you provide in your account settings</li>
              <li>User preferences and settings for the extension</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-2 text-gray-200">Usage Data</h3>
            <p className="mb-4 text-gray-300">
              We collect usage information that helps us improve the extension:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>How you interact with the extension features</li>
              <li>Error logs and performance data</li>
              <li>Device information such as browser type and version</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-2 text-gray-200">Content Data</h3>
            <p className="mb-4 text-gray-300">
              To provide our AI-powered comment suggestions, we temporarily process:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>Content of LinkedIn posts you view</li>
              <li>Profile information visible on LinkedIn</li>
              <li>Comments you generate and interactions with the AI tools</li>
            </ul>
            <p className="text-gray-300">
              <strong>Important:</strong> This content data is processed in memory and is not permanently stored on our servers.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
            <p className="mb-4 text-gray-300">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>To provide, maintain, and improve our extension's features</li>
              <li>To authenticate users and provide personalized experiences</li>
              <li>To generate AI-powered comments based on LinkedIn post content</li>
              <li>To process and fulfill your requests and preferences</li>
              <li>To send important notifications about the extension</li>
              <li>To analyze usage patterns and optimize performance</li>
              <li>To detect, prevent, and address technical issues, fraud, or security incidents</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Browser Permissions</h2>
            <p className="mb-4 text-gray-300">
              To function properly, LinkedIn Assistant requires several browser permissions:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li><strong>Storage</strong>: To save your preferences and authentication information</li>
              <li><strong>ActiveTab</strong>: To interact with the current LinkedIn page you're viewing</li>
              <li><strong>Scripting</strong>: To inject necessary functionality into LinkedIn pages</li>
              <li><strong>Tabs</strong>: To detect when you're browsing LinkedIn</li>
            </ul>
            <p className="text-gray-300">
              Our extension only activates on LinkedIn domains (https://www.linkedin.com/*) as specified in the host permissions.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Data Storage and Security</h2>
            <p className="mb-4 text-gray-300">
              We implement industry-standard technical and organizational measures to protect your personal data:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>Authentication data is secured using Firebase Authentication</li>
              <li>Personal settings are stored in your browser's local storage</li>
              <li>Content data is processed temporarily and not stored permanently</li>
              <li>All communications with our servers are encrypted using HTTPS</li>
            </ul>
            <p className="text-gray-300">
              While we strive to use commercially acceptable means to protect your data, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Third-Party Services</h2>
            <p className="mb-4 text-gray-300">
              Our extension relies on certain third-party services:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li><strong>Firebase Authentication</strong>: Used for user authentication and account management</li>
              <li><strong>AI Service Providers</strong>: Used to power our comment generation capabilities</li>
            </ul>
            <p className="text-gray-300">
              Each third-party service has its own privacy policy governing their use of your information. We encourage you to review their privacy policies:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li>Firebase (Google): <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Data Retention</h2>
            <p className="mb-4 text-gray-300">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. 
            </p>
            <p className="text-gray-300">
              Your preferences and settings remain stored in your browser until you uninstall the extension or clear your browser data. Authentication data is retained until you delete your account.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Your Privacy Rights</h2>
            <p className="mb-4 text-gray-300">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              <li><strong>Access</strong>: You can request copies of your personal data</li>
              <li><strong>Rectification</strong>: You can request that we correct inaccurate information</li>
              <li><strong>Deletion</strong>: You can request that we delete your personal data (right to be forgotten)</li>
              <li><strong>Restriction</strong>: You can request that we restrict the processing of your data</li>
              <li><strong>Data Portability</strong>: You can request a copy of your data in a structured, machine-readable format</li>
              <li><strong>Objection</strong>: You can object to our processing of your personal data</li>
              <li><strong>Withdraw Consent</strong>: You can withdraw consent where processing is based on consent</li>
            </ul>
            <p className="text-gray-300">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below. We will respond to your request within the timeframe required by applicable law.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Children's Privacy</h2>
            <p className="text-gray-300">
              Our extension is not intended for use by children under the age of 13 (or the minimum age in your country/region). We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take appropriate action.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">International Data Transfers</h2>
            <p className="text-gray-300">
              Your information may be transferred to and processed in countries other than the one in which you reside. These countries may have different data protection laws. By using our extension, you consent to the transfer of information to countries that may have different data protection rules than your country.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Changes to This Privacy Policy</h2>
            <p className="text-gray-300">
              We may update our Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p className="mb-4 text-gray-300">
              If you have any questions about this Privacy Policy, wish to exercise your privacy rights, or have concerns about your data, please contact us at:
            </p>
            <p className="text-gray-300">
              Email: <a href="mailto:ujjwalsharmacloud@gmail.com" className="text-blue-400 hover:text-blue-300">ujjwalsharmacloud@gmail.com</a>
            </p>
          </div>

          <div className="mt-10 text-sm text-gray-400 border-t border-gray-700 pt-6">
            By using LinkedIn Assistant, you agree to the collection and use of information in accordance with this Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  );
}