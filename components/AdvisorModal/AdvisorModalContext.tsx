"use client";

import React, { createContext, useContext, useState } from "react";
import AdvisorModal from "./AdvisorModal";

type AdvisorModalContextType = {
  isOpen: boolean;
  openAdvisorModal: () => void;
  closeAdvisorModal: () => void;
};

const AdvisorModalContext = createContext<AdvisorModalContextType>({
  isOpen: false,
  openAdvisorModal: () => {},
  closeAdvisorModal: () => {},
});

export const useAdvisorModal = () => useContext(AdvisorModalContext);

export function AdvisorModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openAdvisorModal = () => setIsOpen(true);
  const closeAdvisorModal = () => setIsOpen(false);

  return (
    <AdvisorModalContext.Provider value={{ isOpen, openAdvisorModal, closeAdvisorModal }}>
      {children}
      <AdvisorModal isOpen={isOpen} onClose={closeAdvisorModal} />
    </AdvisorModalContext.Provider>
  );
}