
export default function Footer() {
  return (
    <footer className="bg-surface border-t border-slate-200 dark:border-slate-700 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-text-muted">
        <p>&copy; {new Date().getFullYear()} CSS Prep. All rights reserved.</p>
        <p className="mt-1">Designed and Developed by <a href="https://ranksol.com/" target="_blank" rel="noopener noreferrer">RankSol</a> team.</p>
      </div>
    </footer>
  );
}