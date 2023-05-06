import React from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode | React.ReactNode[];
  closeHandler: (isOpen: boolean) => void;
};
const Modal = ({ children, closeHandler }: ModalProps) => {
  return createPortal(
    <div
      onClick={() => closeHandler(false)}
      className="shadow-2xl rounded-xl border-1 w-1/2 absolute right-0 left-0 m-auto top-0 bottom-0 h-1/2 z-50
      bg-white flex flex-col items-center justify-center"
    >
      {children}
    </div>,
    document.body
  );
};

export default Modal;
