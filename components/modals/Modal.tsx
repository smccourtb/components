import React, { RefObject, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode | React.ReactNode[];
  closeHandler?: (isOpen: boolean) => void;
  className?: string;
};
const Modal = ({ children, closeHandler, className }: ModalProps) => {
  const ref: RefObject<HTMLDialogElement> = useRef(null);
  const handleEscape = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeHandler && closeHandler(false);
    }
  };

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return createPortal(
    <dialog
      tabIndex={-1}
      ref={ref}
      onKeyDown={handleEscape}
      onClick={closeHandler && (() => closeHandler(false))}
      className={className}
    >
      {children}
    </dialog>,
    document.body
  );
};

export default Modal;
