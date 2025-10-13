import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ChartBar, Languages, FileText, Brain, Globe, Star } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SubjectCard from '../components/SubjectCard';
import { CustomButton } from '@/components/CustomButton';
import { CustomModal } from '@/components/CustomModal';
import { Helmet } from 'react-helmet-async';


const mptSubjects = [
  {
    name: 'Islamic Studies',
    title: 'Islamiat',
    icon: BookOpen,
    description: 'Islamic history, Quran, Sunnah and Fiqh',
    gradient: 'from-green-500 to-green-600',
    subjects: [
      { name: 'Quran & Sunnah', slug: 'quran-sunnah' },
      { name: 'Islamic History', slug: 'islamic-history' },
      { name: 'Fiqh & Jurisprudence', slug: 'fiqh' },
    ],
  },
  {
    name: 'Urdu',
    title: 'Urdu (Grammar & Translation)',
    icon: Languages,
    description: 'Urdu comprehension and language structure',
    gradient: 'from-orange-500 to-orange-600',
    subjects: [
      { name: 'Grammar', slug: 'urdu-grammar' },
      { name: 'Translation', slug: 'urdu-translation' },
      // { name: 'Vocabulary', slug: 'urdu-vocabulary' },
    ],
  },
  {
    name: 'English',
    title: 'English (Vocabulary, Grammar, Comprehension)',
    icon: FileText,
    description: 'English comprehension, writing and grammar skills',
    gradient: 'from-blue-500 to-blue-600',
    subjects: [
      { name: 'Vocabulary', slug: 'english-vocabulary' },
      { name: 'Grammar', slug: 'english-grammar' },
      { name: 'Comprehension', slug: 'english-comprehension' },
    ],
  },
  {
    name: 'General Knowledge',
    title: 'General Knowledge',
    icon: Globe,
    description: 'Everyday science, Pakistan studies, current affairs',
    gradient: 'from-purple-500 to-purple-600',
    subjects: [
      { name: 'Pakistan Studies', slug: 'pakistan-studies' },
      { name: 'Current Affairs', slug: 'current-affairs' },
      { name: 'Everyday Science', slug: 'everyday-science' },
    ],
  },
  {
    name: 'General Ability',
    title: 'General Ability',
    icon: Brain,
    description: 'Arithmetic, Algebra, Geometry, Logic & Mental Ability',
    gradient: 'from-red-500 to-red-600',
    subjects: [
      { name: 'Basic Arithmetic', slug: 'basic-arithmetic' },
      { name: 'Algebra', slug: 'algebra' },
      { name: 'Geometry', slug: 'geometry' },
      { name: 'Logical Reasoning', slug: 'logical-reasoning' },
      { name: 'Analytical Ability', slug: 'analytical-ability' },
      { name: 'Mental Ability', slug: 'mental-ability' },
    ],
  }
  ,
  {
    name: 'Ethics',
    title: 'Ethics (For Non-Muslims)',
    icon: Star,
    description: 'Ethics and comparative religion',
    gradient: 'from-teal-500 to-teal-600',
    subjects: [
      { name: 'Moral Philosophy', slug: 'moral-philosophy' },
      { name: 'Comparative Religion', slug: 'comparative-religion' },
    ],
  },
];

export default function MptPreparation() {
  const navigate = useNavigate();
  const [selectedGroup, setSelectedGroup] = useState < typeof mptSubjects[0] | null > (null);

  const handleGroupClick = (group: typeof mptSubjects[0]) => {
    setSelectedGroup(group);
  };

  const handleSubjectClick = (subject: { name: string; slug: string }) => {
    setSelectedGroup(null);
    navigate(`/quiz/${subject.slug}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'MPT Preparation' }]} />
      <Helmet>
        <title>MPT Preparation | CSS Preparation</title>
        <meta name="description" content="Prepare for the MPT exam with our comprehensive resources." />
        <meta property="og:title" content="MPT Preparation | CSS Preparation" />
        <meta property="og:description" content="Best resources for MPT exam preparation!" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-3xl mx-auto mb-12 text-center space-y-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold  mb-4">
            What is MPT
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            The <span className="font-semibold">MCQ Based Preliminary Test (MPT)</span>
            is a screening test conducted by FPSC for the CSS Examination.
            It helps shortlist candidates for the written CSS exam by testing
            their knowledge across multiple subjects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6 text-left">
          {/* Criteria Card */}
          <div className="group relative p-6 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white dark:from-indigo-700 dark:to-indigo-900 
                  rounded-2xl shadow-lg border-0 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-white/20">
                <ChartBar className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-white text-lg">Criteria</p>
            </div>
            <ul className="list-disc pl-6 text-white/90 space-y-2 text-sm">
              <li>200 Marks (All MCQs)</li>
              <li>Qualifying Marks: 66 (33%)</li>
              <li>Duration: 200 minutes</li>
              <li>No Negative Marking</li>
            </ul>
          </div>

          {/* Subjects Card */}
          <div className="group relative p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white dark:from-purple-700 dark:to-pink-900 
                  rounded-2xl shadow-lg border-0 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-white/20">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <p className="font-semibold text-white text-lg">Subjects Covered</p>
            </div>
            <ul className="list-disc pl-6 text-white/90 space-y-2 text-sm">
              <li>Islamic Studies / Ethics</li>
              <li>Urdu</li>
              <li>English</li>
              <li>General Knowledge</li>
              <li>General Ability</li>
              {/* <li>Pakistan Studies & Current Affairs</li> */}
            </ul>
          </div>
        </div>
      </div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            MPT Preparation
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Pick a subject and we'll generate a practice MCQ quiz for you — timed, Pakistan-centric, and ready to review.
          </p>
        </div> */}


        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            MPT Preparation
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Pick a subject and we'll generate a practice MCQ quiz for you — timed, Pakistan-centric, and ready to review.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {mptSubjects.map((group, index) => (
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
            Select a section to start practicing:
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
