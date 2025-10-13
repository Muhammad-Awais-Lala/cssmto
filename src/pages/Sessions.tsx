import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Eye, Trash2, CheckCircle, XCircle, Circle, X } from 'lucide-react';
import { CustomButton } from '@/components/CustomButton';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  CustomTable,
  CustomTableHeader,
  CustomTableBody,
  CustomTableRow,
  CustomTableHead,
  CustomTableCell,
} from '@/components/CustomTable';
import {
  CustomAlertDialog,
  CustomAlertDialogTrigger,
  CustomAlertDialogContent,
  CustomAlertDialogHeader,
  CustomAlertDialogTitle,
  CustomAlertDialogDescription,
  CustomAlertDialogFooter,
  CustomAlertDialogAction,
  CustomAlertDialogCancel,
} from '@/components/CustomAlertDialog';
import { Helmet } from 'react-helmet-async';

interface QuizResult {
  right: number[];
  wrong: number[];
  empty: number[];
  totals: { right: number; wrong: number; empty: number };
  timestamp: string;
  subject: string;
  group?: string;
}

export default function Sessions() {
  const [sessions, setSessions] = useState<QuizResult[]>([]);
  const [selectedSession, setSelectedSession] = useState<QuizResult | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showAlertDialog, setShowAlertDialog] = useState(false);

  useEffect(() => {
    const savedSessions = JSON.parse(localStorage.getItem('quiz-sessions') || '[]');
    setSessions(savedSessions);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('quiz-sessions');
    setSessions([]);
    setShowAlertDialog(false);
  };

  const deleteSession = (timestamp: string) => {
    const updatedSessions = sessions.filter((s) => s.timestamp !== timestamp);
    setSessions(updatedSessions);
    localStorage.setItem('quiz-sessions', JSON.stringify(updatedSessions));
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const getScoreColor = (correct: number, total: number = 15) => {
    const percentage = (correct / total) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Sessions' }]} />
      <Helmet>
        <title>Quiz Sessions | CSS Preparation</title>
        <meta name="description" content="Review your past quiz sessions and track your progress." />
        <meta property="og:title" content="Quiz Sessions | CSS Preparation" />
        <meta property="og:description" content="Comprehensive overview of your quiz attempts." />
        <meta property="og:type" content="website" /> 
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
              Quiz Sessions
            </h1>
            <p className="text-text-muted">
              Track your progress and review past quiz attempts
            </p>
          </div>
        </div>

        {sessions.length === 0 ? (
          <div className="text-center py-12 bg-surface rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <Clock className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-text-primary mb-2">
              No Quiz Sessions Yet
            </h2>
            <p className="text-text-muted mb-6">
              Start taking quizzes to see your session history here
            </p>
            <CustomButton onClick={() => window.history.back()}>Start a Quiz</CustomButton>
          </div>
        ) : (
          <div className="bg-surface rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden relative">
            {/* Clear All Button - Top Left (Always Visible) */}
            <div className="absolute top-2 left-2 z-50">
              <CustomAlertDialog open={showAlertDialog} onOpenChange={setShowAlertDialog}>
                <CustomAlertDialogTrigger onClick={() => setShowAlertDialog(true)}>
                  <CustomButton
                    variant="outline"
                    className="bg-white dark:bg-slate-800 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/30 shadow-md"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear All
                  </CustomButton>
                </CustomAlertDialogTrigger>
                <CustomAlertDialogContent>
                  <CustomAlertDialogHeader>
                    <CustomAlertDialogTitle>Clear All Sessions</CustomAlertDialogTitle>
                    <CustomAlertDialogDescription>
                      This action cannot be undone. It will permanently delete all your quiz sessions.
                    </CustomAlertDialogDescription>
                  </CustomAlertDialogHeader>
                  <CustomAlertDialogFooter>
                    <CustomAlertDialogCancel onClick={() => setShowAlertDialog(false)}>
                      Cancel
                    </CustomAlertDialogCancel>
                    <CustomAlertDialogAction
                      onClick={clearHistory}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      Clear All
                    </CustomAlertDialogAction>
                  </CustomAlertDialogFooter>
                </CustomAlertDialogContent>
              </CustomAlertDialog>
            </div>

            {/* Table */}
            <CustomTable>
              <CustomTableHeader>
                <CustomTableRow>
                  <CustomTableHead>Subject</CustomTableHead>
                  <CustomTableHead>Date & Time</CustomTableHead>
                  <CustomTableHead className="text-center">Correct</CustomTableHead>
                  <CustomTableHead className="text-center">Wrong</CustomTableHead>
                  <CustomTableHead className="text-center">Empty</CustomTableHead>
                  <CustomTableHead className="text-center">Score</CustomTableHead>
                  <CustomTableHead className="text-center">Actions</CustomTableHead>
                </CustomTableRow>
              </CustomTableHeader>
              <CustomTableBody>
                {sessions.map((session, index) => (
                  <CustomTableRow key={index}>
                    <CustomTableCell className="font-medium">
                      <div>
                        <div className="text-text-primary">{session.subject}</div>
                        {session.group && (
                          <div className="text-sm text-text-muted">{session.group}</div>
                        )}
                      </div>
                    </CustomTableCell>
                    <CustomTableCell className="text-text-muted">
                      {formatDate(session.timestamp)}
                    </CustomTableCell>
                    <CustomTableCell className="text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {session.totals.right}
                      </span>
                    </CustomTableCell>
                    <CustomTableCell className="text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                        {session.totals.wrong}
                      </span>
                    </CustomTableCell>
                    <CustomTableCell className="text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                        {session.totals.empty}
                      </span>
                    </CustomTableCell>
                    <CustomTableCell className="text-center">
                      <span className={`font-semibold ${getScoreColor(session.totals.right)}`}>
                        {Math.round((session.totals.right / 15) * 100)}%
                      </span>
                    </CustomTableCell>
                    <CustomTableCell className="text-center flex items-center justify-center space-x-2">
                      <CustomButton
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedSession(session);
                          setShowDetails(true);
                        }}
                      >
                        <Eye className="w-4 h-4" />
                      </CustomButton>

                      <CustomButton
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteSession(session.timestamp)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </CustomButton>
                    </CustomTableCell>
                  </CustomTableRow>
                ))}
              </CustomTableBody>
            </CustomTable>
          </div>
        )}

        {/* Session Details Modal */}
        {showDetails && selectedSession && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg w-full max-w-2xl mx-4 p-6 relative">
              <button
                className="absolute top-3 right-3 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                onClick={() => setShowDetails(false)}
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold text-center mb-6 text-slate-900 dark:text-white">
                Session Details
              </h2>

              <div className="text-center mb-6">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                  {selectedSession.subject}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {formatDate(selectedSession.timestamp)}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-xl font-bold text-green-600">
                    {selectedSession.totals.right}
                  </div>
                  <div className="text-xs text-green-700">Correct</div>
                </div>
                <div className="text-center p-4 bg-red-100 dark:bg-red-900/30 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-600 mx-auto mb-2" />
                  <div className="text-xl font-bold text-red-600">
                    {selectedSession.totals.wrong}
                  </div>
                  <div className="text-xs text-red-700">Wrong</div>
                </div>
                <div className="text-center p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <Circle className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                  <div className="text-xl font-bold text-slate-600">
                    {selectedSession.totals.empty}
                  </div>
                  <div className="text-xs text-slate-700">Empty</div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-green-600 mb-2">Right Answers</h4>
                  <p className="text-sm bg-green-50 dark:bg-green-900/20 p-3 rounded text-slate-800 dark:text-slate-200">
                    {selectedSession.right.length > 0
                      ? selectedSession.right.join(', ')
                      : 'None'}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-red-600 mb-2">Wrong Answers</h4>
                  <p className="text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded text-slate-800 dark:text-slate-200">
                    {selectedSession.wrong.length > 0
                      ? selectedSession.wrong.join(', ')
                      : 'None'}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-600 mb-2">Empty</h4>
                  <p className="text-sm bg-slate-50 dark:bg-slate-700 p-3 rounded text-slate-800 dark:text-slate-200">
                    {selectedSession.empty.length > 0
                      ? selectedSession.empty.join(', ')
                      : 'None'}
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div
                  className={`text-3xl font-bold ${getScoreColor(
                    selectedSession.totals.right
                  )}`}
                >
                  {Math.round((selectedSession.totals.right / 15) * 100)}%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Overall Score
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
