import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
// import Compulsory from './pages/Compulsory';
import Quiz from './pages/Quiz';
import Sessions from './pages/Sessions';
// import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import CustomToastProvider from './components/CustomToastProvider';
import Footer from './components/Footer';
import './index.css';
import MptPreparation from './pages/MptPreparation';
import SubjectsGuide from './pages/SubjectsGuid';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-background text-text-primary transition-colors duration-300 flex flex-col">
            <Navigation />
            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/home" element={<Home />} /> */}
            
                <Route path ='/mptpreparation' element={<MptPreparation/>} />
                <Route path="/guide" element={<SubjectsGuide />} />
                <Route path="/quiz/:subjectSlug" element={<Quiz />} />
                <Route path="/sessions" element={<Sessions />} />
                {/* <Route path="/settings" element={<Settings />} /> */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <CustomToastProvider />
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;