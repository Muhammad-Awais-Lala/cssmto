import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/CustomButton'; // Changed import

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="text-8xl font-bold text-slate-300 dark:text-slate-600 mb-4">
            404
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to preparing for your CSS exam.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Link to="/" className="w-full sm:w-auto">
            <CustomButton
              size="lg"
              className="w-full sm:w-48 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Home className="w-5 h-5 mr-2" />
              Go to Home
            </CustomButton>
          </Link>

          <div className="w-full sm:w-auto">
            <CustomButton
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="w-full sm:w-48"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </CustomButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-sm text-slate-500 dark:text-slate-400"
        >
          <p>Need help? </p>
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            <Link to="/mptpreparation" className="text-blue-600 hover:text-blue-700 underline">
              MPT Preparation
            </Link>
            <span>•</span>
            <Link to="/guide" className="text-blue-600 hover:text-blue-700 underline">
              Css Subjects Guide
            </Link>
            <span>•</span>
            <Link to="/sessions" className="text-blue-600 hover:text-blue-700 underline">
              Your Sessions
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}