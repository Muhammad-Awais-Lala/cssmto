import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
      <Link to="/" className="flex items-center hover:text-slate-900 dark:hover:text-white transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4" />
          {item.path ? (
            <Link 
              to={item.path} 
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-900 dark:text-white font-medium">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
