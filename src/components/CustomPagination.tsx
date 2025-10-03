import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { CustomButton } from './CustomButton';
import { cn } from '@/lib/utils';

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const CustomPagination = ({ currentPage, totalPages, onPageChange, className }: CustomPaginationProps) => {
  const getPageNumbers = () => {
    const pageNumbers: (number | '...')[] = [];
    const maxPagesToShow = 5; // Number of page buttons to show directly

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
      const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
          pageNumbers.push('...');
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push('...');
        }
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className={cn("flex items-center justify-center space-x-2", className)} aria-label="Pagination">
      <CustomButton
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </CustomButton>

      {pageNumbers.map((page, index) => (
        page === '...' ? (
          <span key={index} className="h-9 w-9 flex items-center justify-center text-sm text-slate-600 dark:text-slate-400">
            <MoreHorizontal className="h-4 w-4" />
          </span>
        ) : (
          <CustomButton
            key={index}
            variant={page === currentPage ? "default" : "outline"}
            size="icon"
            onClick={() => onPageChange(page as number)}
            aria-current={page === currentPage ? "page" : undefined}
            aria-label={`Page ${page}`}
          >
            {page}
          </CustomButton>
        )
      ))}

      <CustomButton
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </CustomButton>
    </nav>
  );
};
CustomPagination.displayName = "CustomPagination";

export { CustomPagination };