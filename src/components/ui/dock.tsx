import React, { useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 56;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "mx-auto w-max h-16 p-2 flex gap-3 rounded-full border border-white/[0.12] bg-[#090b10]/80 backdrop-blur-2xl shadow-[0_16px_40px_-10px_rgba(0,0,0,0.8)] z-50"
);

export const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      direction = "bottom",
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(Infinity);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            mouseX: mouseX,
            magnification: magnification,
            distance: distance,
          } as any);
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }), {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        })}
      >
        {renderChildren()}
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: any;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  title?: string;
}

export const DockIcon = ({
  size = 40,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  onClick,
  title,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mouseX || useMotionValue(Infinity), (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onClick={onClick}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-700/80 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors relative group",
        className
      )}
      title={title}
      {...props}
    >
      {children}
      {title && (
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 border border-zinc-700 dark:border-zinc-300 text-[11px] font-mono font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md hidden sm:inline-block">
          {title}
        </span>
      )}
    </motion.div>
  );
};

DockIcon.displayName = "DockIcon";
