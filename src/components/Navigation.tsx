import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, BookOpen, Layers, Clock } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';
import { motion } from 'framer-motion';
import { CustomSheet, CustomSheetTrigger, CustomSheetContent, CustomSheetHeader, CustomSheetTitle } from '@/components/CustomSheet';

// Theme dropdown removed

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/mptpreparation', label: 'MPT Preparation', icon: BookOpen },
  { path: '/guide', label: 'CSS Subjects Guide', icon: Layers },
  { path: '/sessions', label: 'Sessions', icon: Clock },
  // { path: '/settings', label: 'Settings', icon: Settings },
];

// Framer Motion variants for staggered animation of nav items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CSS</span>
              </div>
              <span className="font-bold text-xl text-slate-900">
                CSS Prep
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CustomButton
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={`flex items-center space-x-2 ${
                        isActive 
                          ? 'bg-[var(--color-primary)] hover:bg-[var(--color-primary-600)] text-white' 
                          : 'text-text-primary hover:bg-accent'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </CustomButton>
                  </motion.div>
                </Link>
              );
            })}
          </div>

  {/* Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <CustomSheet 
                open={isOpen} 
                onOpenChange={setIsOpen} 
                side="top"
                className="w-full h-auto max-h-[80vh] rounded-b-xl"
              >
                <CustomSheetTrigger onClick={() => setIsOpen(true)}>
                  <CustomButton variant="ghost" size="sm" className="w-9 h-9 p-0 text-slate-700" aria-label="Open navigation menu">
                    <Menu className="w-5 h-5" />
                  </CustomButton>
                </CustomSheetTrigger>
                <CustomSheetContent className="relative pt-24 px-4 sm:px-8 lg:px-16 pb-20 min-h-[70vh] bg-gradient-to-br from-blue-500/80 via-indigo-200/80 to-blue-100/80 backdrop-blur-2xl shadow-2xl border border-blue-100 rounded-b-2xl">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="absolute top-6 right-6 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 shadow-lg hover:bg-blue-100 transition-colors border border-blue-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700">
                      <path fillRule="evenodd" d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10l-4.95-4.95A1 1 0 115.05 3.636L10 8.586z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <CustomSheetHeader className="border-b border-blue-200 pb-4 mb-6 text-center py-4">
                    <CustomSheetTitle className="text-2xl font-bold text-blue-700 tracking-wide drop-shadow">
                      Navigation
                    </CustomSheetTitle>
                  </CustomSheetHeader>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col space-y-3"
                  >
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <motion.div key={item.path} variants={itemVariants} className="rounded-xl shadow-md overflow-hidden">
                          <Link
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                          >
                            <CustomButton variant={isActive ? "default" : "ghost"} className={`w-full flex items-center justify-start rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-100 ${isActive ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' : 'bg-white text-blue-700 hover:bg-blue-50'}`}>
                              <Icon className="w-5 h-5 mr-3" />
                              <span className="truncate">{item.label}</span>
                            </CustomButton>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </CustomSheetContent>
              </CustomSheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}