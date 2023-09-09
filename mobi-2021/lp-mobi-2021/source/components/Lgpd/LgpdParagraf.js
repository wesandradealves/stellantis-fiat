import React from "react";

export const LgpdParagraf = () => {
  return (
    <div
      style={{
        textAlign: "left",
        fontSize: "12px",
        lineHeight: "16px",
        fontFamily: "FuturaPT Medium",
      }}
    >
      Informamos que utilizamos cookies que nos permitem fornecer
      funcionalidades como segurança, acessibilidade e gerenciamento de rede.
      Nosso site também pode usar cookies de terceiros para enviar publicidade
      mais relevante para você. Se quiser saber mais sobre os cookies que usamos
      para garantir uma melhor experiência em nosso site, acesse nossa{" "}
      <a
        href="https://www.fiat.com.br/politica-de-privacidade.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#000000" }}
      >
        Política de Privacidade
      </a>
      .
    </div>
  );
};
