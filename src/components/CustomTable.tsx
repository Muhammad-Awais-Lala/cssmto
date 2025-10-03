import React from 'react';
import { cn } from '@/lib/utils';

interface CustomTableProps extends React.HTMLAttributes<HTMLTableElement> {}

const CustomTable = React.forwardRef<HTMLTableElement, CustomTableProps>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
);
CustomTable.displayName = "CustomTable";

interface CustomTableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const CustomTableHeader = React.forwardRef<HTMLTableSectionElement, CustomTableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead
      ref={ref}
      className={cn("text-xs text-text-muted uppercase bg-slate-50 dark:bg-slate-800/50 [&_tr]:border-b", className)}
      {...props}
    />
  )
);
CustomTableHeader.displayName = "CustomTableHeader";

interface CustomTableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const CustomTableBody = React.forwardRef<HTMLTableSectionElement, CustomTableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
);
CustomTableBody.displayName = "CustomTableBody";

interface CustomTableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const CustomTableFooter = React.forwardRef<HTMLTableSectionElement, CustomTableFooterProps>(
  ({ className, ...props }, ref) => (
    <tfoot
      ref={ref}
      className={cn(
        "border-t bg-slate-50/50 font-medium dark:bg-slate-800 [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
);
CustomTableFooter.displayName = "CustomTableFooter";

interface CustomTableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

const CustomTableRow = React.forwardRef<HTMLTableRowElement, CustomTableRowProps>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors hover:bg-accent data-[state=selected]:bg-accent",
        className
      )}
      {...props}
    />
  )
);
CustomTableRow.displayName = "CustomTableRow";

interface CustomTableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}

const CustomTableHead = React.forwardRef<HTMLTableCellElement, CustomTableHeadProps>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400 [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
);
CustomTableHead.displayName = "CustomTableHead";

interface CustomTableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

const CustomTableCell = React.forwardRef<HTMLTableCellElement, CustomTableCellProps>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
      {...props}
    />
  )
);
CustomTableCell.displayName = "CustomTableCell";

interface CustomTableCaptionProps extends React.HTMLAttributes<HTMLTableCaptionElement> {}

const CustomTableCaption = React.forwardRef<HTMLTableCaptionElement, CustomTableCaptionProps>(
  ({ className, ...props }, ref) => (
    <caption
      ref={ref}
      className={cn("mt-4 text-sm text-slate-500 dark:text-slate-400", className)}
      {...props}
    />
  )
);
CustomTableCaption.displayName = "CustomTableCaption";

export {
  CustomTable,
  CustomTableHeader,
  CustomTableBody,
  CustomTableFooter,
  CustomTableHead,
  CustomTableRow,
  CustomTableCell,
  CustomTableCaption,
};