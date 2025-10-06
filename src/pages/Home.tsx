import { motion } from 'framer-motion';
import { BookOpen, Layers, ArrowRight, Target, Trophy, Users, Clock, CheckCircle, AlertCircle, BookMarked, GraduationCap, FileText, Award, Brain, ShieldCheck, Globe, ChartBar, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/CustomButton';
import { CustomCard, CustomCardHeader, CustomCardTitle, CustomCardDescription, CustomCardContent } from '@/components/CustomCard';
import { CustomTabs, CustomTabsList, CustomTabsTrigger, CustomTabsContent } from '@/components/CustomTabs'; // Updated import
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const quickAccessSubjects = [
  { name: 'English', slug: 'english', color: 'bg-teal-600' },
  { name: 'General Abilities', slug: 'general-abilities', color: 'bg-purple-600' },
  { name: 'General Knowledge', slug: 'general-knowledge', color: 'bg-indigo-600' },
  { name: 'Current Affairs', slug: 'current-affairs', color: 'bg-green-600' },
  { name: 'Pakistan Affairs', slug: 'pakistan-affairs', color: 'bg-fuchsia-600' },
  // { name: 'Islamic Studies', slug: 'islamic-studies', color: 'bg-emerald-600' },
];


const features = [
  {
    icon: BookOpen,
    title: 'Subject Guidance & Selection',
    description: "Get expert guidance on compulsory and optional CSS subjects, along with subject selection strategies, scoring trends, and study resources to plan effectively.",
  },
  {
    icon: BookMarked,
    title: 'Dynamic, Subject-specific Quizzes',
    description: "Choose any subject and get a fresh, auto-generated MCQ quiz every time — ideal for focused practice and concept reinforcement.",
  },
  {
    icon: Trophy,
    title: 'Detailed Reports & Progress Tracking',
    description: "Instant post-quiz reports (correct / wrong / skipped), all correct answers for review, plus a session-history page with analytics to monitor improvement.",
  },
];


const examGuideSteps = [
  {
    step: 1,
    title: 'Understand the Exam Structure',
    description: 'CSS exam consists of written examination (1200 marks) and psychological assessment, medical examination, and interview.',
    icon: FileText,
  },
  {
    step: 2,
    title: 'Choose Your Optional Subjects Wisely',
    description: 'Select optional subjects based on your academic background and interest. Each group has different marking schemes.',
    icon: BookOpen,
  },
  {
    step: 3,
    title: 'Master Compulsory Subjects',
    description: 'Focus on the six compulsory subjects: English Essay, English Precis & Composition, General Science, Current Affairs, Pakistan Affairs, and Islamic Studies.',
    icon: GraduationCap,
  },
  {
    step: 4,
    title: 'Practice Regularly',
    description: 'Consistent practice with MCQs and essay writing is key to success. Aim for at least 3-4 hours of daily study.',
    icon: Clock,
  },
  {
    step: 5,
    title: 'Stay Updated',
    description: 'Keep yourself updated with current affairs, especially those related to Pakistan and international relations.',
    icon: AlertCircle,
  },
  {
    step: 6,
    title: 'Take Mock Tests',
    description: 'Regular assessment through mock tests helps identify weak areas and improves time management.',
    icon: Award,
  },
];

const eligibilityRequirements = [
  'Pakistani citizen aged 21-30 years',
  'Bachelor\'s degree (at least 2nd division) from a recognized university',
  'Good physical and mental health',
  'No criminal record or involvement in anti-state activities',
  'Proficiency in Urdu and English languages',
];

const subjectSelectionGuide = {
  compulsory: [
    'English Essay (100 marks) - Focus on current issues, social problems, and analytical writing',
    'English Precis & Composition (100 marks) - Comprehension, grammar, and composition skills',
    'General Science & Ability (100 marks) - Basic science concepts and general knowledge',
    'Current Affairs (100 marks) - National and international current events',
    'Pakistan Affairs (100 marks) - History, culture, geography, and governance of Pakistan',
    'Islamic Studies/Comparative Religion (100 marks) - Islamic principles and comparative studies',
  ],
  optional: [
    'Group I & III: Choose 1 subject (200 marks) - Business, Political Science, International Relations',
    'Group II: Choose 1 subject (200 marks) - Pure Sciences like Physics, Chemistry, Mathematics',
    'Group IV: Choose 1 subject (200 marks) - History subjects with focus on different regions/periods',
    'Groups V, VI, VII: Choose subjects totaling 200 marks (100 marks each) - Law, Literature, Social Sciences',
  ],
};

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >

          <h1 className="text-3xl md:text-5xl font-bold  mb-6 text-text-primary leading-tight">
            Master the{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              CSS Journey <br /> MPT to Final Exam
            </span>
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto mb-10 leading-relaxed"
        >
          Your all-in-one platform for Pakistan’s <span className="font-semibold">CSS Exam</span>.
          Start with <span className="font-semibold">MPT Screening Test practice</span> through Pakistan-centric MCQs,
          and explore detailed <span className="font-semibold">CSS subject guidance, strategies, and preparation tips</span>
          to help you succeed step by step.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link to="/mptreparation">
            <CustomButton
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Start Practicing MPT
              <ArrowRight className="w-6 h-6 ml-3" />
            </CustomButton>
          </Link>
          <Link to="/guide">
            <CustomButton
              variant="outline"
              size="lg"
              className="px-10 py-4 text-lg border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
            >
              Explore CSS Subjects
            </CustomButton>
          </Link>
        </motion.div>
      </motion.div>

      {/* Main Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid md:grid-cols-2 gap-8 mb-12"
      >
        <Link to="/mptpreparation" className="contents">
          <motion.div
            whileHover={{ scale: 1.03, y: -8 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 p-10 text-white shadow-2xl cursor-pointer group h-full min-h-[320px]"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10 flex h-full flex-col">
              <BookOpen className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-3xl font-bold mb-4 dark:text-white">MPT Preparation</h2>
              <p className="text-blue-100 mb-6 text-lg">
                Start your <span className="font-semibold">MPT Preparation</span> with Pakistan-focused MCQs
                and boost your chances to qualify for the CSS exam.
              </p>
              <div className="mt-auto flex items-center text-blue-100 group-hover:text-white transition-colors">
                <span className="text-lg font-medium">Start Practicing</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        </Link>

        <Link to="/guide" className="contents">
          <motion.div
            whileHover={{ scale: 1.03, y: -8 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 via-purple-600 to-pink-700 p-10 text-white shadow-2xl cursor-pointer group h-full min-h-[320px]"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <motion.div
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10 flex h-full flex-col">
              <Layers className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-3xl font-bold mb-4 dark:text-white">CSS Subjects Guide</h2>
              <p className="text-purple-100 mb-6 text-lg">
                Explore compulsory and optional subjects with detailed marks distribution and guidance
                for effective CSS exam preparation.
              </p>

              <div className="mt-auto flex items-center text-purple-100 group-hover:text-white transition-colors">
                <span className="text-lg font-medium">Explore Groups</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        </Link>
      </motion.div>
      {/*//////////////////// info //////////// */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* --- WHAT IS CSS --- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold dark:text-white mb-4">
            What is CSS ?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>

        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >


          <div className="prose max-w-none text-slate-700 dark:text-slate-300 mb-6">

            {/* Parent Card with Sub Sections */}
            <div className={`mt-4 p-6 rounded-2xl shadow-sm space-y-6 
              ${theme === 'dark' ? 'bg-gradient-to-br from-indigo-800 to-purple-900 text-white border-0' : 'bg-white border border-slate-200 text-slate-700'}`}
            >
              <p>
                The <strong>Central Superior Services (CSS)</strong> Exam is conducted by the
                Federal Public Service Commission (FPSC) for recruitment to posts at BPS-17.
                It tests candidates across compulsory and optional subjects and includes
                written, medical, psychological and interview stages.
              </p>

              {/* Exam Components */}
              <div>
                <h3 className={`text-sm font-medium mb-2 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                  <ClipboardList className="w-4 h-4 text-indigo-500" />
                  Exam Components
                </h3>
                <ul className={`list-disc pl-5 text-sm space-y-1 ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-600'}`}>
                  <li>Written Test — 1200 marks</li>
                  <li>Medical Test</li>
                  <li>Psychological Test</li>
                  <li>Viva-Voce (Interview) — 300 marks</li>
                </ul>
              </div>

              {/* Subjects Overview */}
              <div>
                <h3 className={`text-sm font-medium mb-2 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                  <BookOpen className="w-4 h-4 text-indigo-500" />
                  Subjects Overview
                </h3>
                <ul className={`list-disc pl-5 text-sm space-y-1 ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-600'}`}>
                  <li>Compulsory Subjects — 600 marks</li>
                  <li>Optional Subjects — 600 marks (choose from groups)</li>
                </ul>
              </div>

            </div>
          </div>
        </motion.div>

        {/* --- WHAT IS MPT --- */}
        {/* Header */}

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold dark:text-white mb-4">
            What is MPT (MCQ Preliminary Test)?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className={`max-w-7xl mx-auto rounded-2xl shadow-md p-8 space-y-10 
            ${theme === 'dark' ? 'bg-gradient-to-br from-indigo-800 to-purple-900 text-white border-0' : 'bg-white border border-slate-200 text-slate-700'}`}
        >

          {/* Section 1: About MPT */}
          <div className="space-y-4">
            <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-600'}`}>
              The <strong>MPT</strong> is a screening MCQ test introduced by FPSC in 2022.
              It shortlists candidates for the CSS written exam and checks baseline knowledge across
              core areas.
            </p>

            <ul className={`space-y-2 text-sm md:text-base ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-700'}`}>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>
                  <strong>Duration:</strong> 200 minutes
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ChartBar className="w-4 h-4 text-indigo-500" />
                <span>
                  <strong>Total Marks:</strong> 200 (All MCQs)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>
                  <strong>Qualifying Marks:</strong> 66 (33%)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-500" />
                <span>
                  <strong>Negative Marking:</strong> None
                </span>
              </li>
            </ul>
          </div>

          {/* Section 2: Subjects */}
          <div className="space-y-3">
            <h3 className={`flex items-center gap-2 text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
              <Globe className="w-5 h-5 text-purple-500" />
              Subjects Covered in MPT
            </h3>
            <ul className={`grid sm:grid-cols-2 gap-2 text-sm md:text-base ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-600'}`}>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Islamic Studies / Ethics
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                English & Urdu
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                General Knowledge
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                General Ability
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Pakistan Studies & Current Affairs
              </li>
            </ul>
          </div>

          {/* Section 3: Why Important */}
          <div className="space-y-3">
            <h3 className={`flex items-center gap-2 text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              Why MPT Matters
            </h3>
            <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-700'}`}>
              MPT is the screening gate — without clearing it, a candidate cannot
              appear for the CSS written exam. It ensures only serious and prepared
              candidates move forward.
            </p>
            <ul className={`space-y-2 text-sm md:text-base ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-600'}`}>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                Shortlists candidates for the written stage
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                Reduces huge candidate pool and focuses evaluation
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                Rewards consistent reading and factual knowledge
              </li>
            </ul>
          </div>
        </motion.div>
      </section>




      {/* CSS Exam Guide Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold dark:text-white mb-4">
            Complete CSS Exam Guide
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Everything you need to know about the CSS examination process, eligibility, and preparation strategy
          </p>
        </div>

        <CustomTabs defaultValue="guide" className="w-full">
          <CustomTabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 h-auto">
            <CustomTabsTrigger value="guide" className="text-sm sm:text-lg py-2 sm:py-3 px-2 sm:px-4">
              <span className="hidden sm:inline">Preparation Guide</span>
              <span className="sm:hidden">Guide</span>
            </CustomTabsTrigger>
            <CustomTabsTrigger value="subjects" className="text-sm sm:text-lg py-2 sm:py-3 px-2 sm:px-4">
              <span className="hidden sm:inline">Subject Selection</span>
              <span className="sm:hidden">Subjects</span>
            </CustomTabsTrigger>
            <CustomTabsTrigger value="eligibility" className="text-sm sm:text-lg py-2 sm:py-3 px-2 sm:px-4">
              <span className="hidden sm:inline">Eligibility & Rules</span>
              <span className="sm:hidden">Rules</span>
            </CustomTabsTrigger>
          </CustomTabsList>

          <CustomTabsContent value="guide" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {examGuideSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CustomCard className="h-full hover:shadow-lg transition-all duration-300">
                      <CustomCardHeader>
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <span className="text-sm font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                            Step {step.step}
                          </span>
                        </div>
                        <CustomCardTitle className="text-lg">{step.title}</CustomCardTitle>
                      </CustomCardHeader>
                      <CustomCardContent>
                        <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                      </CustomCardContent>
                    </CustomCard>
                  </motion.div>
                );
              })}
            </div>
          </CustomTabsContent>

          <CustomTabsContent value="subjects" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <CustomCard className="h-full">
                <CustomCardHeader>
                  <CustomCardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <span>Compulsory Subjects (600 marks)</span>
                  </CustomCardTitle>
                  <CustomCardDescription>All candidates must appear in these subjects</CustomCardDescription>
                </CustomCardHeader>
                <CustomCardContent>
                  <ul className="space-y-3">
                    {subjectSelectionGuide.compulsory.map((subject, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{subject}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CustomCardContent>
              </CustomCard>

              <CustomCard className="h-full">
                <CustomCardHeader>
                  <CustomCardTitle className="flex items-center space-x-2">
                    <Layers className="w-5 h-5 text-purple-600" />
                    <span>Optional Subjects (600 marks)</span>
                  </CustomCardTitle>
                  <CustomCardDescription>Choose subjects based on your background</CustomCardDescription>
                </CustomCardHeader>
                <CustomCardContent>
                  <ul className="space-y-3">
                    {subjectSelectionGuide.optional.map((subject, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{subject}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CustomCardContent>
              </CustomCard>
            </div>
          </CustomTabsContent>

          <CustomTabsContent value="eligibility" className="space-y-6">
            <CustomCard className="h-full">
              <CustomCardHeader>
                <CustomCardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-600" />
                  <span>Eligibility Requirements</span>
                </CustomCardTitle>
                <CustomCardDescription>Basic requirements to appear in CSS examination</CustomCardDescription>
              </CustomCardHeader>
              <CustomCardContent>
                <ul className="space-y-4">
                  {eligibilityRequirements.map((requirement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">{requirement}</span>
                    </motion.li>
                  ))}
                </ul>
              </CustomCardContent>
            </CustomCard>

            <CustomCard className="h-full">
              <CustomCardHeader>
                <CustomCardTitle className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                  <span>Important Rules & Regulations</span>
                </CustomCardTitle>
              </CustomCardHeader>
              <CustomCardContent>
                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                  <p><strong>Application Process:</strong> Online application through FPSC website during specified period</p>
                  <p><strong>Examination Pattern:</strong> Written examination followed by psychological assessment, medical examination, and interview</p>
                  <p><strong>Passing Criteria:</strong> Minimum 50% marks in aggregate and 40% in each compulsory subject</p>
                  <p><strong>Attempts:</strong> Maximum 3 attempts allowed (age permitting)</p>
                  <p><strong>Medical Standards:</strong> Candidates must meet prescribed medical and physical standards</p>
                </div>
              </CustomCardContent>
            </CustomCard>
          </CustomTabsContent>
        </CustomTabs>
      </motion.div>


      <div className="text-center mb-12">
  <h2 className="text-4xl font-bold dark:text-white mb-4">
          Start Practicing Instantly
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Pick a subject and get subject-specific MCQs generated in seconds for MPT preparation</p>
      </div>

      {/* Quick Access */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mb-20"
      >
        {/* <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Quick Access to Popular Subjects
        </h2> */}
        <div className="flex flex-wrap justify-center gap-4">
          {quickAccessSubjects.map((subject, index) => (
            <Link key={subject.slug} to={`/quiz/${subject.slug}`}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`${subject.color} text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                {subject.name}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      <div className="text-center mb-12">
  <h2 className="text-4xl font-bold dark:text-white mb-4">
          Why Choose Our CSS Prep Platform?
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          A complete preparation hub with subject guidance, smart quizzes, and detailed progress tracking
          designed to make your CSS journey structured and stress-free.</p>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-md bg-white/20">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold">How this site helps you</h3>
        </div>

        <ul className="mt-2 text-sm space-y-3">
          <li className="flex items-start gap-3">
            <div className="p-1 rounded-full bg-white/20">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span>Clear breakdown of CSS structure and stages</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="p-1 rounded-full bg-white/20">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span>Smart subject selection guidance with scoring trends</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="p-1 rounded-full bg-white/20">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span>Interactive MCQ quizzes designed for MPT preparation</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="p-1 rounded-full bg-white/20">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span>Choose any subject and get subject-specific MCQs</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="p-1 rounded-full bg-white/20">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span>Fresh quiz every time for better practice and concept clarity</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="p-1 rounded-full bg-white/20">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span>Get instant result report after each quiz submission</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="p-1 rounded-full bg-white/20">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span>Report includes: correct answers, wrong answers, and skipped questions</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="p-1 rounded-full bg-white/20">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span>Review all correct answers to strengthen weak areas</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="p-1 rounded-full bg-white/20">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span>Track your progress with a dedicated page of past quiz sessions and detailed history</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="p-1 rounded-full bg-white/20">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span>Helps in building exam confidence with real-time practice</span>
          </li>

        </ul>
      </div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="grid md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                ${theme === 'dark' 
                  ? 'bg-gradient-to-br from-purple-800 via-purple-700 to-fuchsia-900 text-white border-0' 
                  : 'bg-white text-slate-900 border border-slate-200'}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg ${theme === 'dark' ? 'bg-gradient-to-br from-purple-500 to-fuchsia-600' : 'bg-blue-100'}`}>
                <Icon className={`w-8 h-8 ${theme === 'dark' ? 'text-white' : 'text-blue-600'}`} />
              </div>
              <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {feature.title}
              </h3>
              <p className={`leading-relaxed ${theme === 'dark' ? 'text-indigo-100' : 'text-slate-600'}`}>
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}