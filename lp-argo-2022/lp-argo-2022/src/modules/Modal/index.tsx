import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Form } from "../../modules";

import { ModalProps } from "../../interfaces";

import icoClosePurple from "../../assets/ico-close-purple.svg";
import icoCloseRed from "../../assets/ico-close-red.svg";
import icoSmile from "../../assets/ico-smile.svg";
import icoSad from "../../assets/ico-sad.svg";

import styles from "./styles.module.scss";

const Modal = ({ setShowModal }: ModalProps) => {
  const [showFeedback, setShowFeedback] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    });

    return () => {
      document.removeEventListener("keydown", handleCloseModal);
    };
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseFeedbackError = () => {
    setShowFeedback("");
  };

  return (
    <div className={styles.modal}>
      {showFeedback === "" && (
        <div className={styles.container}>
          <ButtonClose feedback={showFeedback} onClick={handleCloseModal} />
          <h3 className="desktop">
            Preencha o Formulário abaixo e prepare-se para conhecer todos os
            detalhes do seu novo Fiat Argo
          </h3>
          <h3 className="mobile">Conheça os detalhes do seu novo Fiat Argo</h3>
          <p>
            Fique tranquilo, um dos nossos vendedores entrará em contato para
            finalizar o seu atendimento
          </p>
          <Form setShowFeedback={setShowFeedback} />
        </div>
      )}

      {showFeedback === "success" && (
        <ModalFeedback
          feedback={showFeedback}
          text="Sucesso! <br />Deu tudo certo com a sua solicitação."
          onClick={handleCloseModal}
        />
      )}

      {showFeedback === "error" && (
        <ModalFeedback
          feedback={showFeedback}
          text="Algo deu errado ao enviar seus dados. <br />Por favor, tente novamente."
          onClick={handleCloseFeedbackError}
        />
      )}
    </div>
  );
};

export default Modal;

interface ModalFeedbackProps {
  feedback: string;
  text: string;
  onClick: () => void;
}

const ModalFeedback = ({ feedback, text, onClick }: ModalFeedbackProps) => {
  return (
    <div
      className={`${styles.container} ${styles.containerFeedback} ${
        feedback === "success" ? styles.success : styles.error
      }`}
    >
      <ButtonClose feedback={feedback} onClick={onClick} />
      <Image src={feedback === "success" ? icoSmile : icoSad} alt="ícone" />
      <h3 dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

interface ButtonCloseProps {
  feedback: string;
  onClick: () => void;
}

const ButtonClose = ({ feedback, onClick }: ButtonCloseProps) => {
  return (
    <button className={styles.close} onClick={onClick}>
      <Image
        src={feedback === "error" ? icoCloseRed : icoClosePurple}
        alt="fechar"
      />
    </button>
  );
};
