import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[19rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-300 p-4 bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 justify-between flex flex-col space-y-4 relative overflow-hidden backdrop-blur-xl shadow-xs",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-1 transition duration-200 z-10">
        {icon}
        <div className="font-sans font-bold text-zinc-900 dark:text-zinc-100 mb-1 mt-2 text-base">
          {title}
        </div>
        <div className="font-sans font-normal text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
