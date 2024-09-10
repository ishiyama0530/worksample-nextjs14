import { Button } from "@/components/ui/button";
import {
  PaginationContent,
  PaginationItem,
  Pagination as UiPagination,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export type PaginationProps = {
  currentPage: number;
  hasNext?: boolean;
  className?: string;
  hrefTemplate?: (nextPage: number) => string;
};

export function Pagination({
  currentPage,
  hasNext,
  className,
  hrefTemplate,
}: PaginationProps) {
  const hasPrev = currentPage > 1;

  return (
    <div className={className}>
      <UiPagination>
        <PaginationContent>
          <PaginationItem>
            <Button
              variant="ghost"
              disabled={!hasPrev}
              aria-disabled={!hasPrev}
            >
              <Link
                href={hrefTemplate ? hrefTemplate(currentPage - 1) : "#"}
                className="flex items-center gap-1"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Link>
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button
              variant="ghost"
              disabled={!hasNext}
              aria-disabled={!hasNext}
            >
              <Link
                href={hrefTemplate ? hrefTemplate(currentPage + 1) : "#"}
                className="flex items-center gap-1"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </PaginationItem>
        </PaginationContent>
      </UiPagination>
    </div>
  );
}
