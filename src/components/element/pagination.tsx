import {
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  Pagination as UiPagination,
} from "@/components/ui/pagination";

export type PaginationProps = {
  currentPage: number;
  hasNext?: boolean;
  className?: string;
  onClick?: (nextPage: number) => void;
};

export default function Pagination({
  currentPage,
  hasNext,
  className,
  onClick,
}: PaginationProps) {
  const hasPrev = currentPage > 1;

  return (
    <div className={className}>
      <UiPagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => onClick?.(currentPage - 1)}
              className={
                hasPrev ? "cursor-pointer" : "pointer-events-none opacity-50"
              }
              aria-disabled={!hasPrev}
            >
              Previous
            </PaginationPrevious>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() => hasNext && onClick?.(currentPage + 1)}
              className={
                hasNext ? "cursor-pointer" : "pointer-events-none opacity-50"
              }
              aria-disabled={!hasNext}
            >
              Next
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </UiPagination>
    </div>
  );
}
