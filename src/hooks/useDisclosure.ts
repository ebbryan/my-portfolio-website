"use client";

import { useState } from "react";

export interface IUseDisclosure {
  isOpen: boolean;
  onToggle: () => void;
  onOpen: () => void;
  onClose: () => void;
}

const useDisclosure = (): IUseDisclosure => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return { isOpen, onToggle, onOpen, onClose };
};

export default useDisclosure;