import { motion } from 'framer-motion';
import { FileText, BookOpen, Lightbulb, Globe, Flag, Star } from 'lucide-react';
import SubjectCard from './SubjectCard';
import { useState } from 'react';
import { CustomModal } from '@/components/CustomModal';
const compulsorySubjects = [
  {
    name: 'English Essay',
    slug: 'english-essay',
    icon: FileText,
    description: 'Essay writing skills with Pakistani contexts',
    gradient: 'from-blue-500 to-blue-600',
    marks: 100,
    guidance: 'Focus on structure, clarity, and Pakistan-related examples. Practice writing essays weekly.',
    scoringTrend: 'Low — tough marking, needs strong practice',
    weight: 'High (Core Subject)',
    recommendedTime: '~4–5 months',
    mcqSplit: 'Fully Subjective',
  },
  {
    name: 'English (Precis & Composition)',
    slug: 'english-precis-composition',
    icon: BookOpen,
    description: 'Comprehension and composition skills',
    gradient: 'from-indigo-500 to-indigo-600',
    marks: 100,
    guidance: 'Work on precis writing, comprehension, and grammar. Past papers are key practice.',
    scoringTrend: 'Moderate — rewarding with consistent practice',
    weight: 'High',
    recommendedTime: '~3 months',
    mcqSplit: '20% MCQs — 80% Subjective',
  },
  {
    name: 'General Science & Ability',
    slug: 'general-science-ability',
    icon: Lightbulb,
    description: 'Science concepts with Pakistani applications',
    gradient: 'from-purple-500 to-purple-600',
    marks: 100,
    guidance: 'Covers everyday science, basic arithmetic, and logical reasoning. Revise GK and practice MCQs.',
    scoringTrend: 'High — very scoring subject',
    weight: 'High',
    recommendedTime: '~2–3 months',
    mcqSplit: '50% MCQs — 50% Subjective',
  },
  {
    name: 'Current Affairs',
    slug: 'current-affairs',
    icon: Globe,
    description: 'Pakistan and international current events',
    gradient: 'from-green-500 to-green-600',
    marks: 100,
    guidance: 'Read newspapers daily, follow Pakistan’s foreign policy and international relations updates.',
    scoringTrend: 'Moderate — depends on current issues & analysis',
    weight: 'High',
    recommendedTime: 'Continuous (follow daily news & journals)',
    mcqSplit: 'Mostly Subjective',
  },
  {
    name: 'Pakistan Affairs',
    slug: 'pakistan-affairs',
    icon: Flag,
    description: 'History, culture, and governance of Pakistan',
    gradient: 'from-emerald-500 to-emerald-600',
    marks: 100,
    guidance: 'Focus on constitutional history, movements, and contemporary Pakistan challenges.',
    scoringTrend: 'Moderate — depends on conceptual clarity',
    weight: 'Medium–High',
    recommendedTime: '~2 months',
    mcqSplit: '20% MCQs — 80% Subjective',
  },
  {
    name: 'Islamic Studies',
    slug: 'islamic-studies',
    icon: Star,
    description: 'Islamic principles and religious studies',
    gradient: 'from-teal-500 to-teal-600',
    marks: 100,
    guidance: 'Understand Islamic concepts, contemporary issues, and their application in modern life.',
    scoringTrend: 'High — very scoring with authentic references',
    weight: 'High',
    recommendedTime: '~2 months',
    mcqSplit: '20% MCQs — 80% Subjective',
  },
];


export default function Compulsory() {
  const [selectedSubject, setSelectedSubject] = useState < typeof compulsorySubjects[0] | null > (null);

  const handleSubjectClick = (subject: typeof compulsorySubjects[0]) => {
    setSelectedSubject(subject);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold dark:text-white mb-4">
            Compulsory Subjects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Select any subject card to view its syllabus, exam weightage, and study tips
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {compulsorySubjects.map((subject, index) => (
            <motion.div
              key={subject.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="h-full"
            >
              <SubjectCard
                title={subject.name}
                description={subject.description}
                icon={subject.icon}
                gradient={subject.gradient}
                onClick={() => handleSubjectClick(subject)}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Subject Guidance Modal */}
      {/* Subject Guidance Modal */}
      <CustomModal
        open={!!selectedSubject}
        onOpenChange={() => setSelectedSubject(null)}
        title={selectedSubject?.name || ''}
      >
        {selectedSubject && (
          <div className="space-y-6">
            {/* Description */}
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl shadow-sm">
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                {selectedSubject.description}
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Marks */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl shadow border border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500 dark:text-slate-400">Marks</p>
                <p className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  {selectedSubject.marks}
                </p>
              </div>

              {/* Scoring Trend */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl shadow border border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500 dark:text-slate-400">Scoring Trend</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {selectedSubject.scoringTrend || '📈 Varies — depends on preparation'}
                </p>
              </div>

              {/* Recommended Time */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl shadow border border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500 dark:text-slate-400">Recommended Time</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {selectedSubject.recommendedTime || '~3 months prep'}
                </p>
              </div>

              {/* Weight in Exam */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl shadow border border-slate-200 dark:border-slate-700">
                <p className="text-xs text-slate-500 dark:text-slate-400">Weight in Exam</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {selectedSubject.weight || 'Medium'}
                </p>
              </div>

              {/* MCQ vs Subjective */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl shadow border border-slate-200 dark:border-slate-700 sm:col-span-2">
                <p className="text-xs text-slate-500 dark:text-slate-400">MCQ vs Subjective Split</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {selectedSubject.mcqSplit || 'Mostly Subjective'}
                </p>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-xl shadow-md">
              <p className="text-sm leading-relaxed">
                🎯 <span className="font-semibold">Tip:</span> {selectedSubject.guidance}
              </p>
            </div>
          </div>
        )}
      </CustomModal>


    </div>
  );
}
