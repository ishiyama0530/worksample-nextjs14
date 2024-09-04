import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as UiPagination,
} from "@/components/ui/pagination";

export type PaginationProps = {
  className?: string;
};

export default function Pagination({ className }: PaginationProps) {
  return (
    <div className={className}>
      <UiPagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#">Previous</PaginationPrevious>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#">Next</PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </UiPagination>
    </div>
  );
}
