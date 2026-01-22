import { motion, AnimatePresence } from 'framer-motion';
import { useContext, useState } from 'react';
import SubjectCard from './SubjectCard';
import { 
  X, LineChart, Target, Landmark, 
  Microscope, Calculator, Beaker, Globe, Brain, Languages, LucideIcon
} from "lucide-react";
import { ThemeContext } from '@/contexts/ThemeContext';

// --- Types ---
interface Subject {
  name: string;
  marks: number;
  trend: string;
  tips: string;
}

interface GroupType {
  id: string;
  title: string;
  icon: LucideIcon;
  gradient: string;
  subjects: Subject[];
}

interface GroupDetailsModalProps {
  group: GroupType;
  onClose: () => void;
}

// --- Data ---
const pmsOptionalGroups: GroupType[] = [
  {
    id: 'A',
    title: 'Group A: Commerce & Admin',
    icon: Landmark,
    gradient: 'from-blue-600 to-cyan-500',
    subjects: [
      { name: 'Commerce', marks: 200, trend: 'High', tips: 'Focus on accounting and business law.' },
      { name: 'Economics', marks: 200, trend: 'Moderate', tips: 'Master Micro and Macro theories.' },
      { name: 'Business Administration', marks: 200, trend: 'High', tips: 'Case studies are vital.' },
      { name: 'Public Administration', marks: 200, trend: 'Scoring', tips: 'Relate to Pakistan\'s bureaucracy.' }
    ]
  },
  {
    id: 'B',
    title: 'Group B: Biological Sciences',
    icon: Microscope,
    gradient: 'from-green-500 to-emerald-600',
    subjects: [
      { name: 'Agriculture', marks: 200, trend: 'Very High', tips: 'Focus on irrigation and crops.' },
      { name: 'Veterinary Sciences', marks: 200, trend: 'Steady', tips: 'Best for professional backgrounds.' },
      { name: 'Botany', marks: 200, trend: 'Moderate', tips: 'Focus on plant physiology.' },
      { name: 'Zoology', marks: 200, trend: 'High', tips: 'Diagrams are key to scoring.' }
    ]
  },
  {
    id: 'C',
    title: 'Group C: Mathematics',
    icon: Calculator,
    gradient: 'from-indigo-600 to-purple-600',
    subjects: [
      { name: 'Mathematics', marks: 200, trend: 'Objective/High', tips: 'Practice past papers.' },
      { name: 'Computer Science', marks: 200, trend: 'Scoring', tips: 'Networking and OS concepts.' },
      { name: 'Statistics', marks: 200, trend: 'Very High', tips: 'Focus on probability.' },
      { name: 'Principle of Engineering', marks: 200, trend: 'Technical', tips: 'Strong conceptual foundation.' }
    ]
  },
  {
    id: 'D',
    title: 'Group D: Physical Sciences',
    icon: Beaker,
    gradient: 'from-orange-500 to-red-600',
    subjects: [
      { name: 'Physics', marks: 200, trend: 'Moderate', tips: 'Electromagnetism and Modern Physics.' },
      { name: 'Chemistry', marks: 200, trend: 'Moderate', tips: 'Organic and Physical reactions.' },
      { name: 'Geology', marks: 200, trend: 'High', tips: 'Pakistan\'s mineral resources.' },
      { name: 'Geography', marks: 200, trend: 'Scoring', tips: 'Use maps extensively.' }
    ]
  },
  {
    id: 'E',
    title: 'Group E: History & Law',
    icon: Globe,
    gradient: 'from-cyan-500 to-blue-500',
    subjects: [
      { name: 'Political Science', marks: 200, trend: 'High', tips: 'Western vs Muslim thinkers.' },
      { name: 'History', marks: 200, trend: 'Moderate', tips: 'Chronology is vital.' },
      { name: 'Law', marks: 200, trend: 'Scoring', tips: 'PPC and Constitution focus.' },
      { name: 'Mass Communication', marks: 200, trend: 'Very High', tips: 'Media laws and theories.' }
    ]
  },
  {
    id: 'F',
    title: 'Group F: Social Sciences',
    icon: Brain,
    gradient: 'from-rose-500 to-pink-600',
    subjects: [
      { name: 'Philosophy', marks: 200, trend: 'Moderate', tips: 'Logic and Ethics.' },
      { name: 'Psychology', marks: 200, trend: 'High', tips: 'Clinical and research studies.' },
      { name: 'Sociology', marks: 200, trend: 'Very High', tips: 'Pakistan social issues.' },
      { name: 'Social Work', marks: 200, trend: 'Scoring', tips: 'NGOs and community development.' }
    ]
  },
  {
    id: 'G',
    title: 'Group G: Languages & Education',
    icon: Languages,
    gradient: 'from-amber-500 to-yellow-600',
    subjects: [
      { name: 'English Literature', marks: 200, trend: 'Moderate', tips: 'Deep text analysis.' },
      { name: 'Urdu', marks: 200, trend: 'Moderate', tips: 'Poetry and history.' },
      { name: 'Arabic', marks: 200, trend: 'High', tips: 'Grammar focus.' },
      { name: 'Education', marks: 200, trend: 'Scoring', tips: 'Educational psychology.' },
      { name: 'Persian', marks: 200, trend: 'Very High', tips: 'Grammar and translation.' },
      { name: 'Punjabi', marks: 200, trend: 'Extremely High', tips: 'Highest scoring language.' }
    ]
  }
];

// --- Sub-Component: Modal ---
function GroupDetailsModal({ group, onClose }: GroupDetailsModalProps) {
  const Icon = group.icon;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        exit={{ opacity: 0, scale: 0.9 }} 
        className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden"
      >
        <div className="p-8 overflow-y-auto max-h-[85vh]">
          <button onClick={onClose} className="absolute top-5 right-5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${group.gradient}`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{group.title}</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {group.subjects.map((sub) => (
              <div key={sub.name} className="p-5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg text-indigo-600 dark:text-indigo-400">{sub.name}</h4>
                  <span className="text-xs font-bold px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 rounded-md">{sub.marks} Marks</span>
                </div>
                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <p className="flex items-center gap-2"><LineChart className="w-4 h-4 text-green-500"/> <b>Trend:</b> {sub.trend}</p>
                  <p className="flex items-start gap-2"><Target className="w-4 h-4 text-red-500 mt-1"/> <span><b>Tip:</b> {sub.tips}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// --- Main Component ---
export default function PmsOptional() {
  const [selectedGroup, setSelectedGroup] = useState<GroupType | null>(null);
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || 'light';

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
          PMS Optional Subjects
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg">
          Select <b>THREE</b> subjects (600 marks) from different groups.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pmsOptionalGroups.map((group) => (
          <div key={group.id} onClick={() => setSelectedGroup(group)}>
            <SubjectCard
              title={group.title}
              // FIX: Yahan subjects ko comma separated string bana diya hai taake TypeScript error na de
              description={group.subjects.map(sub => sub.name).join(", ")}
              icon={group.icon}
              gradient={group.gradient}
              onClick={() => setSelectedGroup(group)}
              className="cursor-pointer transform hover:scale-[1.02] transition-all h-full"
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedGroup && (
          <GroupDetailsModal group={selectedGroup} onClose={() => setSelectedGroup(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}