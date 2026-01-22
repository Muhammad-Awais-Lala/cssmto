import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, BookOpen, Globe, Flag, Star, Book, 
  X, BookOpenCheck, Clock, LineChart, PieChart, Target, LucideIcon
} from 'lucide-react';
import SubjectCard from './SubjectCard';
import { useContext, useState } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';

// Subject type define karein
interface SubjectType {
  name: string;
  slug: string;
  icon: LucideIcon;
  description: string;
  gradient: string;
  marks: number;
  guidance: string;
  scoringTrend: string;
  weight: string;
  recommendedTime: string;
  mcqSplit: string;
}

const compulsorySubjects: SubjectType[] = [
  {
    name: 'English Essay',
    slug: 'english-essay',
    icon: FileText,
    description: 'Essay writing skills with Pakistani contexts',
    gradient: 'from-blue-500 to-blue-600',
    marks: 100,
    guidance: 'Focus on structure, clarity, and Pakistan-related examples. Practice writing essays weekly.',
    scoringTrend: 'Low — tough marking',
    weight: 'High (Core Subject)',
    recommendedTime: '~4–5 months',
    mcqSplit: 'Fully Subjective',
  },
  {
    name: 'English (Precis & Translation)',
    slug: 'english-precis-comprehension-translation',
    icon: BookOpen,
    description: 'Comprehension, translation and composition skills',
    gradient: 'from-indigo-500 to-indigo-600',
    marks: 100,
    guidance: 'Work on precis writing, comprehension, translation and grammar. Past papers are key.',
    scoringTrend: 'Moderate — rewarding',
    weight: 'High',
    recommendedTime: '~3 months',
    mcqSplit: '30% MCQs — 70% Subjective',
  },
  {
    name: 'Urdu (Essay & Translation)',
    slug: 'urdu-essay-comprehension-translation',
    icon: Book,
    description: 'Urdu writing, comprehension and translation skills',
    gradient: 'from-red-500 to-red-600',
    marks: 100,
    guidance: 'Practice Urdu essay writing and translation from English to Urdu.',
    scoringTrend: 'Moderate proficiency',
    weight: 'High',
    recommendedTime: '~2–3 months',
    mcqSplit: '20% MCQs — 80% Subjective',
  },
  {
    name: 'Islamic Studies / Ethics',
    slug: 'islamic-studies-ethics',
    icon: Star,
    description: 'Islamic principles and ethical studies',
    gradient: 'from-teal-500 to-teal-600',
    marks: 100,
    guidance: 'Understand Islamic concepts, contemporary issues, and ethical frameworks.',
    scoringTrend: 'High — very scoring',
    weight: 'High',
    recommendedTime: '~2 months',
    mcqSplit: '20% MCQs — 80% Subjective',
  },
  {
    name: 'Pakistan Studies',
    slug: 'pakistan-studies',
    icon: Flag,
    description: 'History, culture, and governance of Pakistan',
    gradient: 'from-green-500 to-green-600',
    marks: 100,
    guidance: 'Focus on constitutional history, national movements, and current challenges.',
    scoringTrend: 'Moderate clarity',
    weight: 'Medium–High',
    recommendedTime: '~2 months',
    mcqSplit: '25% MCQs — 75% Subjective',
  },
  {
    name: 'General Knowledge',
    slug: 'general-knowledge',
    icon: Globe,
    description: 'General knowledge with Pakistani context',
    gradient: 'from-purple-500 to-purple-600',
    marks: 100,
    guidance: 'Covers current affairs, everyday science, and general knowledge.',
    scoringTrend: 'High — very scoring',
    weight: 'High',
    recommendedTime: 'Continuous',
    mcqSplit: '40% MCQs — 60% Subjective',
  },
];

// Modal component ke liye props type define karein
interface SubjectDetailsModalProps {
  subject: SubjectType | null;
  onClose: () => void;
}

// Custom Modal following your CSS UI style
function SubjectDetailsModal({ subject, onClose }: SubjectDetailsModalProps) {
  if (!subject) return null;
  const Icon = subject.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
      >
        <div className="p-6 md:p-8 overflow-y-auto max-h-[90vh]">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${subject.gradient} text-white`}>
              <Icon className="w-8 h-8" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              {subject.name}
            </h2>
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            {subject.description}
          </p>

          {/* Details List (Following CSS UI) */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-6">
            <ul className="space-y-4 text-sm md:text-base text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-3">
                <BookOpenCheck className="w-5 h-5 text-indigo-500" />
                <span className="font-semibold text-slate-900 dark:text-white">Total Marks:</span> {subject.marks}
              </li>
              <li className="flex items-center gap-3">
                <LineChart className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-slate-900 dark:text-white">Scoring Trend:</span> {subject.scoringTrend}
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="font-semibold text-slate-900 dark:text-white">Preparation:</span> {subject.recommendedTime}
              </li>
              <li className="flex items-center gap-3">
                <PieChart className="w-5 h-5 text-purple-500" />
                <span className="font-semibold text-slate-900 dark:text-white">Exam Split:</span> {subject.mcqSplit}
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">Study Tip:</span>
                  <p className="mt-1 leading-relaxed">{subject.guidance}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function PmsCompulsary() {
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | null>(null);
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || 'light';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          PMS Compulsory Subjects
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
        <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-600'}`}>
          6 Compulsory Subjects of 600 Marks - Each Subject carries 100 Marks.
          Click any card to explore the scoring trend and preparation tips.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {compulsorySubjects.map((subject, index) => (
          <motion.div
            key={subject.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="h-full cursor-pointer"
            onClick={() => setSelectedSubject(subject)}
          >
            <SubjectCard
              title={subject.name}
              description={subject.description}
              icon={subject.icon}
              gradient={subject.gradient}
              onClick={() => setSelectedSubject(subject)}
              className="h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal Integration with AnimatePresence for smooth entry/exit */}
      <AnimatePresence>
        {selectedSubject && (
          <SubjectDetailsModal 
            subject={selectedSubject} 
            onClose={() => setSelectedSubject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}