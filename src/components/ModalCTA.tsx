"use client";

import { useModal } from "@/components/ModalProvider";
import type { ReactNode } from "react";

interface ModalCTAProps {
  children: ReactNode;
  className?: string;
}

export default function ModalCTA({ children, className = "" }: ModalCTAProps) {
  const { open } = useModal();

  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
