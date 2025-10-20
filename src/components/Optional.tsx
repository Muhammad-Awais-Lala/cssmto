import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
// import Breadcrumbs from '../components/Breadcrumbs';
import SubjectCard from './SubjectCard';
import { X, BookOpenCheck, Clock, LineChart, PieChart, Target } from "lucide-react";
// import Compulsory from './Compulsory';

import { optionalGroups } from '../data/optionalGroups';
import { ThemeContext } from '@/contexts/ThemeContext';

function GroupDetailsModal({ group, onClose }: { group: typeof optionalGroups[0], onClose: () => void }) {
  if (!group) return null;

  const Icon = group.icon; // ✅ Fix for icon rendering

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden"
      >
        {/* Scroll wrapper with padding */}
        <div className="p-6 overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            {Icon && <Icon className="w-9 h-9 text-indigo-500" />}
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              {group.title}
            </h2>
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            {group.description}
          </p>

          {/* Subjects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {group.subjects.map((subject, idx) => (
              <motion.div
                key={subject.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-5 hover:shadow-lg hover:border-indigo-400 dark:hover:border-indigo-500 transition-all"
              >
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3">
                  {subject.name}
                </h3>

                {/* Details List with Icons */}
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <BookOpenCheck className="w-4 h-4 text-indigo-500" />
                    Marks: {subject.marks || "200"}
                  </li>
                  <li className="flex items-center gap-2">
                    <LineChart className="w-4 h-4 text-green-500" />
                    Trend: {subject.trend || "Moderate"}
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    Time Allocation: {subject.timeAllocation || "2-3 months"}
                  </li>
                  <li className="flex items-center gap-2">
                    <PieChart className="w-4 h-4 text-purple-500" />
                    Weight: {subject.weight || "Varies"}
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-red-500" />
                    Tip: {subject.tips || "Use past papers & Pakistan-specific examples"}
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Optional() {
  const [selectedGroup, setSelectedGroup] = useState < typeof optionalGroups[0] | null > (null);

  const handleGroupClick = (group: typeof optionalGroups[0]) => {
    setSelectedGroup(group);
  };

  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || 'light';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* <Breadcrumbs items={[{ label: "Css Subjects Guide" }]} /> */}
      {/* Compulsory Section */}
      {/* <div className="mb-16">
        <Compulsory />

      </div> */}
      {/* Header */}

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Optional Subjects
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
        {/* <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"> */}
        <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-600'}`}>
          Choose from seven specialized groups covering diverse academic disciplines.
          Each group contains subjects with Pakistan-focused content and examples.
        </p>
      </div>


      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {optionalGroups.map((group, index) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="h-full"
          >
            <SubjectCard
              title={group.title}
              description={group.description}
              icon={group.icon}
              gradient={group.gradient}
              className="h-full cursor-pointer"
              onClick={() => handleGroupClick(group)}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal for Group Details */}
      {selectedGroup && (
        <GroupDetailsModal group={selectedGroup} onClose={() => setSelectedGroup(null)} />
      )}
    </div>
  );
}
