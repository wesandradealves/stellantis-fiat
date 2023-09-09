import React from 'react';

export const LgpdParagraf = () => {
  return (
    <div
      style={{
        textAlign: 'left',
        fontSize: '12px',
        lineHeight: '16px',
        color: '#ffffff',
        marginTop: '30px',
        fontFamily: 'ProximaNova-Reg',
      }}
    >
      Seus dados pessoais poderão ser utilizados pela Fiat e pela Concessionária para fins de envio de comunicações de marketing de produtos e serviços relacionados à Fiat.
      <br />
      A Fiat compartilhará seus dados pessoais com a instituição financeira parceira e com demais empresas do grupo (Fiat, Chrysler, Dogde e Ram) para viabilizar o envio de uma proposta de financiamento do veículo de seu interesse.
      <br />
      Para mais detalhes sobre como desativar o recebimento de comunicações de marketing e outras informações sobre como a Fiat trata seus dados pessoais, acesse a Política de Privacidade {' '}
      <a
        href="https://www.fiat.com.br/politica-de-privacidade.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#ffffff', textDecoration: "underline" }}
      >
        disponível aqui
      </a>
      .
    </div>
  );
};
