// components/ui/progress.tsx
import * as React from "react";
import {cn} from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({className, value, ...props}, ref) => {
    return (
      <div
        ref={ref}
        className={cn("h-2 w-full rounded-full bg-muted", className)}
        {...props}
      >
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{width: `${value}%`}}
        />
      </div>
    );
  }
);

Progress.displayName = "Progress";

export {Progress};
