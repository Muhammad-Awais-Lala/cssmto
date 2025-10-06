import Breadcrumbs from '../components/Breadcrumbs';
import Compulsory from '../components/Compulsory';
import Optional from '../components/Optional';
import { motion } from 'framer-motion';
import { BookOpen, ClipboardList, CheckCircle, Layers, CircleCheck } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function SubjectsGuide() {
  const guidePoints = [
    {
      icon: ClipboardList,
      title: "Total Marks Requirement",
      summary: "CSS exam has a total of 1200 marks.",
      bullets: [
        "Total Marks are 1200.",
        "Compulsory subjects = 600 marks.",
        "Optional subjects = 600 marks.",
      ],
      chips: ["1200 Total Marks", "600 Compulsory", "600 Optional"],
    },
    {
      icon: BookOpen,
      title: "Compulsory Subjects (600 Marks)",
      summary: "6 fixed subjects for every candidate.",
      bullets: [
        "English Essay (100 marks)",
        "English Precis & Composition (100 marks)",
        "General Science & Ability (100 marks)",
        "Current Affairs (100 marks)",
        "Pakistan Affairs (100 marks)",
        "Islamic Studies (100 marks)",
      ],
      chips: ["Fixed 6 Subjects", "Each 100 Marks"],
    },
    {
      icon: Layers,
      title: "Optional Subjects (600 Marks)",
      summary: "Candidates must choose subjects from groups.",
      bullets: [
        "Subjects can be 100 or 200 marks.",
        "Total optional marks must be exactly 600.",
        "Wide variety across 7 groups.",
      ],
      chips: ["100 or 200 Marks", "Pick from Groups"],
    },
    {
      icon: CheckCircle,
      title: "Group Conditions",
      summary: "Important rules for subject selection.",
      bullets: [
        "Must pick at least one 200-mark subject from Group I.",
        "Remaining 400 marks from Groups II–VII.",
        "Cannot pick more than one subject from same group (except Group VII).",
      ],
      chips: ["Group-I Mandatory", "Max 1 Subject per Group"],
    },
  ];

  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || 'light';
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "CSS Subjects Guide" }]} />
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : ''}`}>
          CSS Subjects Selection Guide
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
        <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-600'}`}>
          Before exploring Compulsory and Optional subjects, it’s important to
          understand the exam structure and subject selection rules for CSS.
        </p>
      </div>
      {/* Guide Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="grid md:grid-cols-2 gap-8" key={theme}>
          {guidePoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className={`relative rounded-2xl p-6 hover:shadow-xl transition group 
                ${theme === 'dark' ? 'bg-gradient-to-br from-indigo-800 to-purple-900 text-white border-transparent' : 'bg-white border border-slate-200'}`}
            >
              {/* Icon */}
              <div className="absolute -top-6 left-6 p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg">
                <point.icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className={`font-bold text-lg mt-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {point.title}
              </h3>

              {/* Summary */}
              <p className={`text-sm italic mt-2 mb-3 ${theme === 'dark' ? 'text-indigo-200' : 'text-slate-600'}`}>
                {point.summary}
              </p>

              {/* Bullets with icons */}
              <ul className={`space-y-2 text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-700'}`}>
                {point.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-indigo-500 mt-0.5"><CircleCheck className="w-4 h-4" /></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 mt-2">
                {point.chips.map((chip, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs font-medium rounded-full shadow-sm 
                      ${theme === 'dark' ? 'bg-indigo-900/40 to-purple-900/40 text-indigo-300' : 'bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700'}`}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Compulsory Section */}
      <div className="mb-16">
        <Compulsory />
      </div>
      {/* Optional Section */}
      <div>
        <Optional />
      </div>
    </div>
  );
}
