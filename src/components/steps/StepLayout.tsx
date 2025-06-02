import {cn} from "@/lib/utils";
import {ReactNode} from "react";

interface StepLayoutProps {
  children: ReactNode;
  className?: string;
}

export const StepLayout: React.FC<StepLayoutProps> = ({children, className}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 p-6 text-center bg-white border rounded-lg shadow-md h-[40vh] md:h-[70vh]",
        className
      )}
    >
      {children}
    </div>
  );
};
