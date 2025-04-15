import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
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
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">Last updated: March 2024</p>
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">By accessing and using EvolveX's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our services.</p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Service Description</h2>
            <p className="text-gray-300">EvolveX provides:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Custom software development services</li>
              <li>AI and machine learning solutions</li>
              <li>Digital transformation consulting</li>
              <li>Technical support and maintenance</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Client Responsibilities</h2>
            <p className="text-gray-300">Clients must:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Provide accurate project requirements</li>
              <li>Respond to queries in a timely manner</li>
              <li>Review and approve deliverables</li>
              <li>Make payments as per agreement</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-300">Unless otherwise specified:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Client retains rights to their original content</li>
              <li>EvolveX maintains ownership of pre-existing IP</li>
              <li>Custom development IP transfers upon full payment</li>
              <li>Both parties respect third-party licenses</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Payment Terms</h2>
            <p className="text-gray-300">Our payment terms include:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>50% upfront payment for new projects</li>
              <li>Monthly billing for ongoing services</li>
              <li>Net 30 payment terms for enterprises</li>
              <li>Late payment fees may apply</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Project Timeline</h2>
            <p className="text-gray-300">We commit to:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Providing detailed project schedules</li>
              <li>Regular progress updates</li>
              <li>Timely notification of delays</li>
              <li>Flexible adaptation to changes</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Support & Maintenance</h2>
            <p className="text-gray-300">Post-deployment support includes:</p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>90-day warranty period</li>
              <li>24/7 emergency support</li>
              <li>Regular maintenance updates</li>
              <li>Performance monitoring</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Contact Information</h2>
            <p className="text-gray-300">For legal inquiries:</p>
            <p className="text-gray-300">Email: legal@evolvex.one</p>
            <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
