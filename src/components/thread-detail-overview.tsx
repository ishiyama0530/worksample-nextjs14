import { DeleteDialog } from "@/components/delete-dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export type ThreadDetailOverviewProps = {
  threadId: string;
  title: string;
  description: string;
};

export const ThreadDetailOverview: React.FC<ThreadDetailOverviewProps> = ({
  threadId,
  title,
  description,
}) => {
  return (
    <div className="mb-6 flex justify-between">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="self-end">
        <DeleteDialog threadId={threadId}>
          <Button size="icon" variant="ghost" className="rounded-full">
            <Trash className="h-4 w-4" />
          </Button>
        </DeleteDialog>
      </div>
    </div>
  );
};
