export type ThreadOverviewProps = {
  title: string;
  description: string;
};

export const ThreadOverview: React.FC<ThreadOverviewProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl prose">
          {title}
        </h1>
        {/* <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed prose">
          {description}
        </p> */}
      </div>
    </div>
  );
};
