import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#021711] grid-pattern py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-8">
          <img 
            src="https://ddlppflcekemmdluepik.supabase.co/storage/v1/object/public/images-landing//evolve-x-logo.png" 
            alt="EvolveX Logo" 
            className="h-12 w-auto mb-4"
          />
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#021711]/50 rounded-3xl p-8 md:p-12 border border-primary/20"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">Last updated: March 2024</p>
            
            {/* Extended content sections */}
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information Collection</h2>
            <p className="text-gray-300">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Business details and requirements</li>
              <li>Project specifications and documentation</li>
              <li>Communication preferences and history</li>
              <li>Payment and billing information</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Use of Information</h2>
            <p className="text-gray-300">We use the collected information to:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Provide and improve our services</li>
              <li>Process payments and maintain accounts</li>
              <li>Send important updates and notifications</li>
              <li>Analyze and enhance website performance</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Protection</h2>
            <p className="text-gray-300">We implement robust security measures to protect your data:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Encryption of sensitive information</li>
              <li>Regular security audits and updates</li>
              <li>Restricted access to personal data</li>
              <li>Secure data backup and storage</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Third-Party Services</h2>
            <p className="text-gray-300">We may share information with trusted third parties for:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Payment processing</li>
              <li>Analytics and performance monitoring</li>
              <li>Customer support services</li>
              <li>Legal compliance</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Your Rights</h2>
            <p className="text-gray-300">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Access your personal data</li>
              <li>Request data correction or deletion</li>
              <li>Opt-out of marketing communications</li>
              <li>File a complaint with authorities</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Contact Us</h2>
            <p className="text-gray-300">For privacy-related inquiries, contact us at:</p>
            <p className="text-gray-300">Email: privacy@evolvex.one</p>
            <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
