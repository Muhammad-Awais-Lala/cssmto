import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ChartBar, Globe, FileText, Brain, Target, Users, TrendingUp, Shield, Briefcase, Atom, Cpu, Leaf, Utensils, Calculator } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SubjectCard from '../components/SubjectCard';
import { CustomButton } from '@/components/CustomButton';
import { CustomModal } from '@/components/CustomModal';
import { Helmet } from 'react-helmet-async';
import { ThemeContext } from '@/contexts/ThemeContext';

const pmsSubjects = [
  {
    name: 'Current Affairs',
    title: 'Current Affairs',
    icon: Globe,
    description: 'National and international current events, political issues, global relations',
    gradient: 'from-blue-500 to-blue-600',
    subjects: [
      { name: 'Pakistan Economic & Social Issues', slug: 'pakistan-economic-issues' },
      { name: 'International Relations', slug: 'international-relations' },
      { name: 'Global Issues & Organizations', slug: 'global-issues' },
      { name: 'Prominent Personalities & NGOs', slug: 'prominent-personalities' },
    ],
  },
  {
    name: 'Physical Sciences',
    title: 'Physical Sciences',
    icon: Atom,
    description: 'Astronomy, natural disasters, energy sources, physics & chemistry basics',
    gradient: 'from-purple-500 to-purple-600',
    subjects: [
      { name: 'Astronomy & Universe', slug: 'astronomy-universe' },
      { name: 'Natural Hazards & Disasters', slug: 'natural-hazards' },
      { name: 'Energy Sources', slug: 'energy-sources' },
      { name: 'Physics & Chemistry Basics', slug: 'physics-chemistry' },
    ],
  },
  {
    name: 'Biological Sciences',
    title: 'Biological Sciences',
    icon: Leaf,
    description: 'Life forms, biomolecules, human body, diseases, vitamins and vaccines',
    gradient: 'from-green-500 to-green-600',
    subjects: [
      { name: 'Fundamentals of Life Forms', slug: 'life-forms' },
      { name: 'Biomolecules & Functions', slug: 'biomolecules' },
      { name: 'Human Body & Health', slug: 'human-body' },
      { name: 'Diseases & Treatment', slug: 'diseases-treatment' },
    ],
  },
  {
    name: 'Environment Studies',
    title: 'Environment Studies',
    icon: Leaf,
    description: 'Ecosystem, climate change, pollution, international conventions',
    gradient: 'from-emerald-500 to-emerald-600',
    subjects: [
      { name: 'Ecosystem & Biodiversity', slug: 'ecosystem-biodiversity' },
      { name: 'Climate Change & Pollution', slug: 'climate-change' },
      { name: 'International Conventions', slug: 'environment-conventions' },
      { name: 'Water Pollution & Management', slug: 'water-management' },
    ],
  },
  {
    name: 'Food Sciences',
    title: 'Food Sciences',
    icon: Utensils,
    description: 'Diet, food quality, preservation, food security and global hunger issues',
    gradient: 'from-amber-500 to-amber-600',
    subjects: [
      { name: 'Diet & Health Compounds', slug: 'diet-health' },
      { name: 'Food Quality & Preservation', slug: 'food-preservation' },
      { name: 'Food Security & Global Issues', slug: 'food-security' },
    ],
  },
  {
    name: 'Computer Science & IT',
    title: 'Computer Science & IT',
    icon: Cpu,
    description: 'Hardware, software, networking, social media, telecommunications',
    gradient: 'from-indigo-500 to-indigo-600',
    subjects: [
      { name: 'Hardware & Software Fundamentals', slug: 'hardware-software' },
      { name: 'Data Processing & MS Office', slug: 'data-processing' },
      { name: 'Networking & Social Media', slug: 'networking-social' },
      { name: 'Telecommunications', slug: 'telecommunications' },
    ],
  },
  {
    name: 'Basic Mathematics',
    title: 'Basic Mathematics',
    icon: Calculator,
    description: 'Quantitative reasoning, arithmetic, algebra, geometry, statistics',
    gradient: 'from-red-500 to-red-600',
    subjects: [
      { name: 'Quantitative Reasoning', slug: 'quantitative-reasoning' },
      { name: 'Arithmetic & Algebra', slug: 'arithmetic-algebra' },
      { name: 'Geometry & Logical Reasoning', slug: 'geometry-logical' },
      { name: 'Statistics & Mental Mathematics', slug: 'statistics-mental' },
    ],
  },
  {
    name: 'General Knowledge',
    title: 'General (Scientists & Inventions)',
    icon: BookOpen,
    description: 'Famous scientists, inventions, discoveries, units of measurement',
    gradient: 'from-teal-500 to-teal-600',
    subjects: [
      { name: 'Famous Scientists & Inventions', slug: 'scientists-inventions' },
      { name: 'Scientific Laws & Theories', slug: 'scientific-laws' },
      { name: 'Units & Instruments', slug: 'units-instruments' },
    ],
  },
];

export default function PmsPreparation() {
  const navigate = useNavigate();
  const [selectedGroup, setSelectedGroup] = useState < typeof pmsSubjects[0] | null > (null);

  const handleGroupClick = (group: typeof pmsSubjects[0]) => {
    setSelectedGroup(group);
  };

  const handleSubjectClick = (subject: { name: string; slug: string }) => {
    setSelectedGroup(null);
    navigate(`/quiz/${subject.slug}`);
  };

  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || 'light';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'PMS Preparation' }]} />
      <Helmet>
        <title>PMS General Knowledge Preparation | CSS Preparation</title>
        <meta name="description" content="Prepare for PMS General Knowledge (Objective) with our comprehensive resources." />
        <meta property="og:title" content="PMS General Knowledge Preparation" />
        <meta property="og:description" content="Best resources for PMS GK exam preparation!" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-3xl mx-auto mb-12 text-center space-y-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold  mb-4">
            PMS General Knowledge (Objective)
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-600'}`}>
            The <span className="font-semibold">General Knowledge (Objective)</span> paper in PMS exam tests 
            candidates on diverse topics including current affairs, sciences, environment, and basic mathematics.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6 text-left">
          {/* Exam Structure Card */}
          <div className="group relative p-6 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white dark:from-indigo-700 dark:to-indigo-900 
                  rounded-2xl shadow-lg border-0 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-white/20">
                <ChartBar className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-white text-lg">Exam Structure</p>
            </div>
            <ul className="list-disc pl-6 text-white/90 space-y-2 text-sm">
              <li>Total Marks: 100</li>
              <li>Objective Type MCQs</li>
              <li>All subjects combined</li>
              <li>Comprehensive syllabus</li>
            </ul>
          </div>

          {/* Key Areas Card */}
          <div className="group relative p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white dark:from-purple-700 dark:to-pink-900 
                  rounded-2xl shadow-lg border-0 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-white/20">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-white text-lg">Key Areas</p>
            </div>
            <ul className="list-disc pl-6 text-white/90 space-y-2 text-sm">
              <li>Current Affairs</li>
              <li>Physical & Biological Sciences</li>
              <li>Environment & Food Sciences</li>
              <li>Computer Science & Mathematics</li>
            </ul>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            PMS General Knowledge Preparation
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-600'}`}>
            Select a subject area to start practicing MCQs. Each section covers specific topics from the PMS GK syllabus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {pmsSubjects.map((group, index) => (
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
                onClick={() => handleGroupClick(group)}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16"
      >
        <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-gradient-to-br from-indigo-800 to-purple-900 text-white' : 'bg-white border border-slate-200 text-slate-700'} shadow-lg`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-white/20' : 'bg-indigo-500/20'}`}>
              <Target className="w-5 h-5 text-indigo-600 dark:text-white" />
            </div>
            <h3 className="text-xl font-semibold">Preparation Strategy</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className={`font-semibold ${theme === 'dark' ? 'text-indigo-300' : 'text-slate-800'}`}>Current Affairs Focus</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-indigo-500/20 mt-0.5">
                    <TrendingUp className="w-3 h-3 text-indigo-600 dark:text-white" />
                  </div>
                  <span>Daily newspaper reading (Dawn, The News)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-indigo-500/20 mt-0.5">
                    <TrendingUp className="w-3 h-3 text-indigo-600 dark:text-white" />
                  </div>
                  <span>Follow monthly current affairs magazines</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-indigo-500/20 mt-0.5">
                    <TrendingUp className="w-3 h-3 text-indigo-600 dark:text-white" />
                  </div>
                  <span>International relations and Pakistan's foreign policy</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className={`font-semibold ${theme === 'dark' ? 'text-indigo-300' : 'text-slate-800'}`}>Science & Technology</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-indigo-500/20 mt-0.5">
                    <Brain className="w-3 h-3 text-indigo-600 dark:text-white" />
                  </div>
                  <span>Basic concepts of physics, chemistry, biology</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-indigo-500/20 mt-0.5">
                    <Brain className="w-3 h-3 text-indigo-600 dark:text-white" />
                  </div>
                  <span>Environmental issues and climate change</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="p-1 rounded-full bg-indigo-500/20 mt-0.5">
                    <Brain className="w-3 h-3 text-indigo-600 dark:text-white" />
                  </div>
                  <span>Recent technological advancements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal for Sub-subjects */}
      <CustomModal
        open={!!selectedGroup}
        onOpenChange={() => setSelectedGroup(null)}
        title={`${selectedGroup?.title}`}
        contentClassName="max-w-lg"
      >
        <div className="space-y-3">
          <p className="text-center text-slate-600 dark:text-slate-400 mb-6">
            {selectedGroup?.description}
          </p>
          <p className="text-center text-sm text-slate-500 dark:text-slate-500 mb-6">
            Select a topic to start practicing:
          </p>

          {selectedGroup?.subjects.map((subject, index) => (
            <motion.div
              key={subject.slug}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <CustomButton
                variant="outline"
                className="w-full justify-start h-auto p-4 text-left"
                onClick={() => handleSubjectClick(subject)}
              >
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">
                    {subject.name}
                  </div>
                </div>
              </CustomButton>
            </motion.div>
          ))}
        </div>
      </CustomModal>
    </div>
  );
}