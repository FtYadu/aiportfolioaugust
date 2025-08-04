'use client'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

export const BentoGrid = ({
  className,
  children,
  autoRows = false,
}: {
  className?: string;
  children?: React.ReactNode;
  autoRows?: boolean;
}) => {
  return (
    <div
      className={cn(
        "grid md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        autoRows ? "md:auto-rows-[18rem]" : "md:auto-rows-[20rem]",
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
  link,
  onClick,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
  onClick?: () => void;
}) => {
  const content = (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-card dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4",
        className,
        onClick && "cursor-pointer"
      )}
      onClick={onClick}
    >
      <div className="flex-1 h-3/5">{header}</div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-headline font-bold text-neutral-200 mb-1 mt-2">
          {title}
        </div>
        <div className="font-body font-normal text-xs text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
  
  if (link) {
    return (
      <Link href={link} className={cn("relative", className)}>
        {content}
        <div className="absolute bottom-4 right-4 text-accent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-200">
          <ArrowRight className="h-4 w-4" />
        </div>
      </Link>
    );
  }

  return content;
};
