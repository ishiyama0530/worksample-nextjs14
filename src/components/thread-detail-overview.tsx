import { DeleteDialog } from "@/components/delete-dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export type ThreadDetailOverviewProps = {
  threadId: string;
  title: string;
  description: string | null;
};

export const ThreadDetailOverview: React.FC<ThreadDetailOverviewProps> = ({
  threadId,
  title,
  description,
}) => {
  return (
    <div className="mb-2">
      <div className="px-2">
        <h1 className="text-3xl prose">{title}</h1>
        {description && (
          <p className="px-1 text-muted-foreground prose max-w-fit">
            {description}
          </p>
        )}
      </div>
      <div className="flex justify-end">
        <DeleteDialog threadId={threadId}>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full hover:bg-white"
          >
            <Trash className="h-4 w-4" />
          </Button>
        </DeleteDialog>
      </div>
    </div>
  );
};
