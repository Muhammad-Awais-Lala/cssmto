import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, BookOpen, Layers, Clock, Sun, Moon } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { CustomSheet, CustomSheetTrigger, CustomSheetContent, CustomSheetHeader, CustomSheetTitle } from '@/components/CustomSheet';
// import navLogo from '../assets/navLogo.png';
import navLogo from '../assets/logoTransparent.png';
// Custom DropdownMenu implementation (for theme toggle)
const CustomDropdownMenu = ({ children, trigger, onClose }: { children: React.ReactNode, trigger: React.ReactNode, onClose?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <>
          {/* Backdrop to close dropdown when clicking outside */}
          <div
            className="fixed inset-0 z-10"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-surface ring-1 ring-black/10 dark:ring-white/10 focus:outline-none z-20"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            {children}
          </motion.div>
        </>
      )}
    </div>
  );
};

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
  const { theme, setTheme } = useTheme();

  const ThemeIcon = theme === 'light' ? Sun : Moon;

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <img
                src={navLogo}
                alt="Logo"
                className="w-24 h-24 object-contain" // Adjust size here
              />
              {/* Optional text next to logo */}
              {/* <span className="font-bold text-xl dark:text-white mr-2">
      Preparation
    </span> */}
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
                      className={`flex items-center space-x-2 ${isActive
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

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <CustomDropdownMenu
              trigger={
                <CustomButton variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <ThemeIcon className="w-4 h-4" />
                </CustomButton>
              }
              onClose={() => { }}
            >
              <div className="py-1">
                {themeOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <CustomButton
                      key={option.value}
                      variant={theme === option.value ? "default" : "ghost"}
                      className="w-full justify-start text-sm px-4 py-2"
                      onClick={(e) => {
                        setTheme(option.value as any);
                        // Auto-close the dropdown by dispatching a click on backdrop
                        (e.currentTarget.closest('.relative')?.querySelector('.fixed.inset-0') as HTMLElement)?.click?.();
                      }}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {option.label}
                    </CustomButton>
                  );
                })}
              </div>
            </CustomDropdownMenu>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <CustomSheet
                open={isOpen}
                onOpenChange={setIsOpen}
                side="top"
                className="w-full h-auto max-h-[80vh] rounded-b-xl"
              >
                <CustomSheetTrigger onClick={() => setIsOpen(true)}>
                  <CustomButton
                    variant="ghost"
                    size="sm"
                    className="w-9 h-9 p-0 text-slate-700 dark:text-slate-200"
                    aria-label="Open navigation menu"
                  >
                    <Menu className="w-5 h-5" />
                  </CustomButton>
                </CustomSheetTrigger>
                <CustomSheetContent className="relative pt-24 px-4 sm:px-8 lg:px-16 pb-20 min-h-[70vh] bg-gradient-to-br from-blue-500/80 via-indigo-200/80 to-blue-100/80 dark:from-slate-900/90 dark:via-blue-900/80 dark:to-indigo-900/80 backdrop-blur-2xl shadow-2xl border border-blue-100 dark:border-blue-900 rounded-b-2xl">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="absolute top-6 right-6 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-lg hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors border border-blue-200 dark:border-blue-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 dark:text-blue-200">
                      <path fillRule="evenodd" d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10l-4.95-4.95A1 1 0 115.05 3.636L10 8.586z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <CustomSheetHeader className="border-b border-blue-200 dark:border-blue-700 pb-4 mb-6 text-center py-4">
                    <CustomSheetTitle className="text-2xl font-bold text-blue-700 dark:text-blue-200 tracking-wide drop-shadow">
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
                            <CustomButton
                              variant={isActive ? "default" : "ghost"}
                              className={`w-full flex items-center justify-start rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 border border-blue-100 dark:border-blue-800 ${isActive
                                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                                : 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-200 hover:bg-blue-50 dark:hover:bg-blue-800'
                                }`}
                            >
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