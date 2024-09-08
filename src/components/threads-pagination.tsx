"use client";

import Pagination from "@/components/element/pagination";
import {} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

export type ThreadPaginationProps = {
  currentPage: number;
  hasNext?: boolean;
  className?: string;
};

export default function ThreadPagination({
  currentPage,
  hasNext,
  className,
}: ThreadPaginationProps) {
  const { replace } = useRouter();

  const handleClick = (nextPage: number) => {
    const params = new URLSearchParams({
      page: String(nextPage),
    });
    replace(`/threads?${params.toString()}`);
  };

  return (
    <Pagination
      currentPage={currentPage}
      hasNext={hasNext}
      className={className}
      onClick={handleClick}
    />
  );
}
