import React, { useState } from "react";
import BasicButton from "../buttons/BasicButton";
import Modal from "./Modal";

type CenteredModalProps = {};
const CenteredModal = ({}: CenteredModalProps) => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    // alert("test");
    setOpenModal(false);
  };

  return (
    <div>
      <BasicButton onClick={() => setOpenModal(true)}>Test</BasicButton>
      {openModal && (
        <Modal
          closeHandler={handleCloseModal}
          className="shadow-2xl rounded-xl border border-black/20 fixed inset-0 z-50
      bg-white flex flex-col items-center justify-center focus:bg-blue-500"
        >
          {"Test"}
        </Modal>
      )}
    </div>
  );
};

export default CenteredModal;
