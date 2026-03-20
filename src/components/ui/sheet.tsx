"use client";

import * as React from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  side?: "left" | "right";
}

function Sheet({ open, onOpenChange, children, side = "right" }: SheetProps) {
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      <div
        className={cn(
          "fixed top-0 z-50 h-full w-full max-w-sm bg-background shadow-lg transition-transform duration-300 ease-out sm:max-w-md",
          side === "right" ? "right-0" : "left-0"
        )}
      >
        {children}
      </div>
    </>
  );
}

function SheetHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-1.5 border-b p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function SheetContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-4", className)} {...props}>
      {children}
    </div>
  );
}

function SheetClose({ onClose }: { onClose: () => void }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClose}
      className="absolute right-4 top-4"
      aria-label="Close"
    >
      <X className="h-4 w-4" />
    </Button>
  );
}

export { Sheet, SheetHeader, SheetContent, SheetClose };
